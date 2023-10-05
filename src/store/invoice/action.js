import { CREATE_INVOICE, CREATE_INVOICE_ERROR, CREATE_INVOICE_SUCCESS, INVOICE, INVOICE_ERROR, INVOICE_SUCCESS, UPDATE_INVOICE, UPDATE_INVOICE_ERROR, INVOICE_PAYMENT,
  INVOICE_PAYMENT_SUCCESS,
  INVOICE_PAYMENT_ERROR, } from "./actionType";



export const invoices = (data) => ({
  type: INVOICE, 
  payload: data
})
export const invoicesSuccess = (data) => ({
  type: INVOICE_SUCCESS, 
  payload: data
})
export const invoicesError = (data) => ({
  type: INVOICE_ERROR, 
  payload: data
})

export const updateInvoices = (data) => ({
  type: UPDATE_INVOICE, 
  payload: data
})
export const updateInvoicesSuccess = (data) => ({
  type: UPDATE_INVOICE_ERROR, 
  payload: data
})
export const updateInvoicesError = (data) => ({
  type: UPDATE_INVOICE_ERROR, 
  payload: data
})

export const createInvoiceAction = (data) => ({
  type: CREATE_INVOICE, 
  payload: data
})
export const createInvoiceSuccess = (data) => ({
  type: CREATE_INVOICE_SUCCESS, 
  payload: data
})
export const createInvoiceError = (data) => ({
  type: CREATE_INVOICE_ERROR, 
  payload: data
})

export const makeInvoicePayment = (data) =>({
  type: INVOICE_PAYMENT,
  payload: data
})

export const makeInvoicePaymentSuccess = (data) =>({
  type: INVOICE_PAYMENT_SUCCESS, 
  payload: data
})

export const makeInvoicePaymentError = (data) => ({
  type:INVOICE_PAYMENT_ERROR, 
  payload: data
})
