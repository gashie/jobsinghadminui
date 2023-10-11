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
  GENERAL_INDUSTRIES,
  GENERAL_INDUSTRIES_ERROR,
  GENERAL_INDUSTRIES_SUCCESS,
  GENERAL_CATEGORIES,
  GENERAL_CATEGORIES_ERROR,
  GENERAL_CATEGORIES_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  errMssg: null,
  industryInfo: null,
  categoryInfo: null,
  generalIndustriesData: [],
  generalIndustriesLoading: false,
  generalIndustriesError: null,
  generalCategoriesData: [],
  generalCategoriesLoading: false,
  generalCategoriesError: null,
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
    case GENERAL_INDUSTRIES:
      return {
        ...state,
        generalIndustriesLoading: true,
        generalIndustriesError: null,
      };
    case GENERAL_INDUSTRIES_ERROR:
      return {
        ...state,
        generalIndustriesLoading: false,
        generalIndustriesError: action.payload,
      };
    case GENERAL_INDUSTRIES_SUCCESS:
      return {
        ...state,
        generalIndustriesData: action.payload,
        generalIndustriesLoading: false,
        generalIndustriesError: null,
      };
    case GENERAL_CATEGORIES:
      return {
        ...state,
        generalCategoriesLoading: true,
        generalCategoriesError: null,
      };
    case GENERAL_CATEGORIES_ERROR:
      return {
        ...state,
        generalCategoriesLoading: false,
        generalCategoriesError: action.payload,
      };
    case GENERAL_CATEGORIES_SUCCESS:
      return {
        ...state,
        generalCategoriesData: action.payload,
        generalCategoriesLoading: false,
        generalCategoriesError: null,
      };
    default:
      state = { ...state };

      break;
  }

  return state;
};

export default Industry;
