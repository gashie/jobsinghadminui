import {
    CREATE_INDUSTRY,
    CREATE_INDUSTRY_ERROR,
    CREATE_INDUSTRY_SUCCESS,
    INDUSTRY,
    INDUSTRY_ERROR,
    INDUSTRY_SUCCESS,
    UPDATE_INDUSTRY,
    UPDATE_INDUSTRY_ERROR,
    UPDATE_INDUSTRY_SUCCESS,
    CREATE_CATEGORY,
    CREATE_CATEGORY_ERROR,
    CREATE_CATEGORY_SUCCESS,
    CATEGORY,
    CATEGORY_ERROR,
    CATEGORY_SUCCESS,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_ERROR,
    UPDATE_CATEGORY_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  errMssg: null,
  industryInfo: null,
  categoryInfo: null
};

const Industry = (state = initialState, action) => {
  switch (action.type) {
    case INDUSTRY:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case INDUSTRY_ERROR:
      state = {
        ...state,
        loading: false,
        error: true,
        errMssg: action.payload,
      };
      break;
    case INDUSTRY_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        industryInfo: action.payload,
      };
      break;
    case CREATE_INDUSTRY:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case CREATE_INDUSTRY_ERROR:
      state = {
        ...state,
        loading: false,
        error: true,
        errMssg: action.payload,
      };
      break;
    case CREATE_INDUSTRY_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case UPDATE_INDUSTRY:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case UPDATE_INDUSTRY_ERROR:
      state = {
        ...state,
        loading: false,
        error: true,
        errMssg: action.payload,
      };
      break;
    case UPDATE_INDUSTRY_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;









      case CATEGORY:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case CATEGORY_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          errMssg: action.payload,
        };
        break;
      case CATEGORY_SUCCESS:
        state = {
          ...state,
          loading: false,
          error: false,
          categoryInfo: action.payload,
        };
        break;
      case CREATE_CATEGORY:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case CREATE_CATEGORY_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          errMssg: action.payload,
        };
        break;
      case CREATE_CATEGORY_SUCCESS:
        state = {
          ...state,
          loading: false,
          error: false,
        };
        break;
      case UPDATE_CATEGORY:
        state = {
          ...state,
          loading: true,
          error: false,
        };
        break;
      case UPDATE_CATEGORY_ERROR:
        state = {
          ...state,
          loading: false,
          error: true,
          errMssg: action.payload,
        };
        break;
      case UPDATE_CATEGORY_SUCCESS:
        state = {
          ...state,
          loading: false,
          error: false,
        };
        break;
    default:
      state = { ...state };

      break;
  }

  return state;
};

export default Industry
