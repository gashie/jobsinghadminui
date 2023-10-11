import { call, put, takeEvery, select, takeLatest } from "redux-saga/effects";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  invoicesSuccess,
  invoicesError,
  makeInvoicePayment as paymentAction, 
  makeInvoicePaymentError, 
  makeInvoicePaymentSuccess
} from "./action";
import {
  confirmPay,
  createIndustryURL,
  createInvoiceURL,
  industryURL,
  invoiceURL,
  payInvoiceURL,
  updateIndustryURL,
  updateInvoiceURL,
} from "../../helpers/fakebackend_helper";
import { CREATE_INVOICE, INVOICE, INVOICE_PAYMENT, UPDATE_INVOICE } from "./actionType";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

//official
function* invoices({ payload: data }) {
  try {
    const response = yield call(invoiceURL, data);
    console.log(response);
    if (response && response?.data.status === 1) {
      yield put(invoicesSuccess(response?.data.data));
      // toast.success(`${response?.message}`, {
      //   autoClose: 3000,
      // });
    } else {
      yield put(invoicesError(response));
      // toast.success(`${response?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
    console.log(error);
    yield put(invoicesError(error));
  }
}

// function* updateInvoices({ payload: data }) {
//   try {
//     const response = yield call(updateInvoiceURL, data);

//     if (response && response?.status === 1) {
//       yield put(updateInvoicesSuccess());
//       yield put(invoiceAction({ viewAction: "" }));
//       toast.success(`${response?.message}`, {
//         autoClose: 3000,
//       });
//     } else {
//       yield put(updateInvoicesError(response));
//       yield put(invoiceAction({ viewAction: "" }));
//       toast.success(`${response?.message}`, {
//         autoClose: 3000,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(updateInvoicesError(error));
//     yield put(invoiceAction({ viewAction: "" }));
//   }
// }

// function* createInvoice({ payload: data }) {
//   try {
//     const response = yield call(createInvoiceURL, data);

//     if (response && response?.status === 1) {
//       yield put(createInvoiceSuccess());
//       toast.success(`${response?.message}`, {
//         autoClose: 3000,
//       });
//       yield put(invoiceAction({ viewAction: "" }));
//     } else {
//       yield put(createInvoiceError(response));
//       toast.success(`${response?.message}`, {
//         autoClose: 3000,
//       });
//       yield put(invoiceAction({ viewAction: "" }));
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(createInvoiceError(error));
//     yield put(invoiceAction({ viewAction: "" }));
//   }
// }

function* pay({ payload: data }) {
  try {
    const response = yield call(payInvoiceURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(makeInvoicePaymentSuccess(response.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      const link = yield select((state) => state.Invoice.payInfo)
      const reference = yield select((state) => state.Invoice.payInfo);

      yield call(confirmPay, {
       reference: reference?.reference,
     });
      window.open(link?.authorization_url, "_blank")
      
    } else {
      yield put(makeInvoicePaymentError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(makeInvoicePaymentError(error));
  }
}

function* invoiceSaga() {
  yield takeEvery(INVOICE, invoices);
  yield takeEvery(INVOICE_PAYMENT, pay);
  // yield takeEvery(UPDATE_INVOICE, updateInvoices);
  // yield takeEvery(CREATE_INVOICE, createInvoice);
}

export default invoiceSaga;
