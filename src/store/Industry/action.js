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
  
  export const industry = () => {
    return {
      type: INDUSTRY,
    };
  };
  export const industryError = (error) => {
    return {
      type: INDUSTRY_ERROR,
      payload: error,
    };
  };
  export const industrySuccess = (data) => {
    return {
      type: INDUSTRY_SUCCESS,
      payload: data,
    };
  };
  
  export const createIndustry = (data) => {
    return {
      type: CREATE_INDUSTRY,
      payload: data
    };
  };
  export const createIndustryError = (error) => {
    return {
      type: CREATE_INDUSTRY_ERROR,
      payload: error,
    };
  };
  export const createIndustrySuccess = () => {
    return {
      type: CREATE_INDUSTRY_SUCCESS,
    };
  };
  
  export const updateIndustry = () => {
      return {
        type: UPDATE_INDUSTRY,
      };
    };
    export const updateIndustryError = (error) => {
      return {
        type: UPDATE_INDUSTRY_ERROR,
        payload: error,
      };
    };
    export const updateIndustrySuccess = () => {
      return {
        type: UPDATE_INDUSTRY_SUCCESS,
      };
    };
  
  
  
  
  
  
  export const category = () => {
    return {
      type: CATEGORY,
    };
  };
  export const categoryError = (error) => {
    return {
      type: CATEGORY_ERROR,
      payload: error,
    };
  };
  export const categorySuccess = (data) => {
    return {
      type: CATEGORY_SUCCESS,
      payload: data,
    };
  };
  
  export const createcategory = (data) => {
    return {
      type: CREATE_CATEGORY,
      payload: data
    };
  };
  export const createcategoryError = (error) => {
    return {
      type: CREATE_CATEGORY_ERROR,
      payload: error,
    };
  };
  export const createcategorySuccess = () => {
    return {
      type: CREATE_CATEGORY_SUCCESS,
    };
  };
  
  
  
  export const updateCategory = () => {
    return {
      type: UPDATE_CATEGORY,
    };
  };
  export const updateCategoryError = (error) => {
    return {
      type: UPDATE_CATEGORY_ERROR,
      payload: error,
    };
  };
  export const updateCategorySuccess = () => {
    return {
      type: UPDATE_CATEGORY_SUCCESS,
    };
  };
  