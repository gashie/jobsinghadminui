import {
    RATE_CARD,
    RATE_CARD_ERROR,
    RATE_CARD_SUCCESS,
    CREATE_RATE_CARD,
    CREATE_RATE_CARD_ERROR,
    CREATE_RATE_CARD_SUCCESS,
    UPDATE_RATE_CARD,
    UPDATE_RATE_CARD_ERROR,
    UPDATE_RATE_CARD_SUCCESS,
    APPROVE_RATE_CARD,
    APPROVE_RATE_CARD_ERROR,
    APPROVE_RATE_CARD_SUCCESS,
    PAY_ERROR,
    PAY_SUCCESS,
    PAY,
    PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_ERROR,
    TRANSACTIONS,
    TRANSACTIONS_ERROR,
    TRANSACTIONS_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    error: false,
    errMssg: null,
    rateCardInfo: null,
    payInfo: null, 
    payloading: false, 
    payError: false,
    payErrMssg: null,
    transactionsLoading: false, 
    transactionsError: false, 
    transactions: [], 
  };
  
  const Rates = (state = initialState, action) => {
    switch (action.type) {
      case RATE_CARD:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case RATE_CARD_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          rateCardInfo: action.payload,
        };
        break;
      case RATE_CARD_SUCCESS:
        state = {
          ...state,
          loading: false,
          error: false,
          rateCardInfo: action.payload,
        };
        break;
      case CREATE_RATE_CARD:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case CREATE_RATE_CARD_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          rateCardInfo: action.payload,
        };
        break;
      case CREATE_RATE_CARD_SUCCESS:
        state = {
          ...state,
          loading: false,
          error: false,
        };
        break;
      case UPDATE_RATE_CARD:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case UPDATE_RATE_CARD_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          rateCardInfo: action.payload,
        };
        break;
      case UPDATE_RATE_CARD_SUCCESS:
        state = {
          ...state,
          loading: false,
          error: false,
        };
        break;
  
      case APPROVE_RATE_CARD:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case APPROVE_RATE_CARD_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          rateCardInfo: action.payload,
        };
        break;
      case PAYMENT:
        state = {
          ...state,
          payloading: true,
          payError: false,
        };
        break;
      case PAYMENT_SUCCESS:
        state = {
          ...state,
          payloading: false,
          payError: false,
          payInfo: action.payload
        };
        break;
      case PAYMENT_ERROR:
        state = {
          ...state,
          payloading: false,
          payError: false,
          payErrMssg: action.payload
        };
        break;
        case TRANSACTIONS:
          state = {
            ...state,
            transactionsLoading: true,
            transactionsError: false,
          };
          break;
        case TRANSACTIONS_ERROR:
          state = {
            ...state,
            transactionsLoading: false,
            transactionsError: true,
            errMssg: action.payload,
          };
          break;
        case TRANSACTIONS_SUCCESS:
          state = {
            ...state,
            transactionsLoading: false,
            transactionsError: false,
            transactions: action.payload
          };
          break;
  
      default:
        state = { ...state };
  
        break;
    }
  
    return state;
  };
  
  export default Rates;
  