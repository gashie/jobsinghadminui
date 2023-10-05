import { CREATE_INVOICE, CREATE_INVOICE_ERROR, CREATE_INVOICE_SUCCESS, INVOICE, INVOICE_ERROR, INVOICE_SUCCESS, UPDATE_INVOICE, UPDATE_INVOICE_ERROR, UPDATE_INVOICE_SUCCESS , INVOICE_PAYMENT,
  INVOICE_PAYMENT_SUCCESS,
  INVOICE_PAYMENT_ERROR } from "./actionType";

const initialState = {
invoiceLoading: false,
invoiceError: false,
errMssg: null,
invoice: [],
updateInvoiceLoading: false, 
updateInvoiceError: false,
createLoading: false, 
createError: false, 
payInfo: null, 
  payloading: false, 
  payError: false,
  payErrMssg: null,
};

const Invoice = (state = initialState, action) => {
switch (action.type) {
  case INVOICE:
    state = {
      ...state,
     invoiceLoading: true, 
     invoiceError: false
    };
    break;
  case INVOICE_ERROR:
    state = {
      ...state,
      invoiceLoading: false,
      invoiceError: true,
      errMssg: action.payload
    };
    break;
  case INVOICE_SUCCESS:
    state = {
      ...state,
      invoiceLoading: false,
      invoiceError: false,
      invoice: action.payload,
    };
    break;
  case UPDATE_INVOICE:
    state = {
      ...state,
      updateInvoiceLoading: true,
      updateInvoiceError: false,
    };
    break;
  case UPDATE_INVOICE_ERROR:
    state = {
      ...state,
      updateInvoiceLoading: false,
      updateInvoiceError: true,
      errMssg: action.payload,
    };
    break;
  case UPDATE_INVOICE_SUCCESS:
    state = {
      ...state,
      updateInvoiceLoading: false,
      updateInvoiceError: false,
    };
    break;
  case CREATE_INVOICE:
    state = {
      ...state,
      createLoading: true,
      createError: false,
    };
    break;
  case CREATE_INVOICE_ERROR:
    state = {
      ...state,
      createLoading: false,
      createError: true,
      errMssg: action.payload,
    };
    break;
  case CREATE_INVOICE_SUCCESS:
    state = {
      ...state,
      createLoading: false,
      createError: false,
     
    };
    break;
    case INVOICE_PAYMENT:
      state = {
        ...state,
        payloading: true,
        payError: false,
      };
      break;
    case INVOICE_PAYMENT_SUCCESS:
      state = {
        ...state,
        payloading: false,
        payError: false,
        payInfo: action.payload
      };
      break;
    case INVOICE_PAYMENT_ERROR:
      state = {
        ...state,
        payloading: false,
        payError: true,
        payErrMssg: action.payload
      };
      break;
 
   
  default:
    state = { ...state };

    break;
}

return state;
};

export default Invoice
