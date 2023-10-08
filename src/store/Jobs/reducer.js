import {
  CREATE_JOB,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  CREATE_JOB_STATUS,
  CREATE_JOB_STATUS_SUCCESS,
  CREATE_JOB_STATUS_ERROR,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  UPDATE_JOB_STATUS,
  UPDATE_JOB_STATUS_SUCCESS,
  UPDATE_JOB_STATUS_ERROR,
  JOBS,
  JOBS_SUCCESS,
  JOBS_ERROR,
  APPROVE_JOBS,
  APPROVE_JOBS_SUCCESS,
  APPROVE_JOBS_ERROR,
  JOB_STATUS,
  JOB_STATUS_SUCCESS,
  JOB_STATUS_ERROR,
  JOBSEEKER_APPLICATIONS,
  JOBSEEKER_APPLICATIONS_SUCCESS,
  JOBSEEKER_APPLICATIONS_ERROR,
  APPROVE_APPLICATIONS,
  APPROVE_APPLICATIONS_SUCCESS,
  APPROVE_APPLICATIONS_ERROR,
  EMPLOYER_SHORTLIST,
  EMPLOYER_SHORTLIST_SUCCESS,
  EMPLOYER_SHORTLIST_ERROR,
  EMPLOYER_APPLICATIONS,
  EMPLOYER_APPLICATIONS_SUCCESS,
  EMPLOYER_APPLICATIONS_ERROR,
  UPDATE_LOGO,
  UPDATE_LOGO_SUCCESS,
  UPDATE_LOGO_ERROR,
  GENERAL_JOBS,
  GENERAL_JOBS_SUCCESS,
  GENERAL_JOBS_ERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  infoLoading: false,
  infoError: false,
  errMssg: null,
  jobStatusInfo: null,
  jobsInfo: null,
  idLoading: false,
  idError: false,
  id: "",
  jobseekerApplications: null,
  jobseekerApplicationsLoading: false,
  jobseekerApplicationsError: null,
  approveApplicationsLoading: false,
  approveApplicationsError: null,
  employerShortlist: null,
  employerShortlistLoading: false,
  employerShortlistError: null,
  employerApplications: null,
  employerApplicationsLoading: false,
  employerApplicationsError: null,
  logoUpdateLoading: false,
  logoUpdateError: null,
  generalJobsLoaing: false,
  generalJobsError: false,
  generalJobs: [],
  editCloneData: {},
  search: "",
  takeId: ""
};

const Jobs = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOB:
    case UPDATE_JOB:
    case JOBS:
    case APPROVE_JOBS:
      return {
        ...state,
        infoLoading: true,
        infoError: false,
      };

    case CREATE_JOB_STATUS:
    case JOB_STATUS:
    case UPDATE_JOB_STATUS:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case CREATE_JOB_ERROR:
    case UPDATE_JOB_ERROR:
    case JOBS_ERROR:
    case APPROVE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errMssg: action.payload,
      };

    case CREATE_JOB_STATUS_ERROR:
    case JOB_STATUS_ERROR:
    case UPDATE_JOB_STATUS_ERROR:
      return {
        ...state,
        infoLoading: false,
        infoError: true,
        errMssg: action.payload,
      };

    case UPDATE_JOB_SUCCESS:
    case JOBS_SUCCESS:
    case APPROVE_JOBS_SUCCESS:
      return {
        ...state,
        infoLoading: false,
        infoError: false,
        jobsInfo: action.payload,
      };

    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        infoLoading: false,
        infoError: false,
        id: action.payload,
        idLoading: false,
        idError: false,
      };

    case CREATE_JOB_STATUS_SUCCESS:
    case JOB_STATUS_SUCCESS:
    case UPDATE_JOB_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        jobStatusInfo: action.payload,
      };
    case JOBSEEKER_APPLICATIONS:
      return {
        ...state,
        jobseekerApplicationsLoading: true,
        jobseekerApplicationsError: null,
      };
    case JOBSEEKER_APPLICATIONS_SUCCESS:
      return {
        ...state,
        jobseekerApplications: action.payload,
        jobseekerApplicationsLoading: false,
      };
    case JOBSEEKER_APPLICATIONS_ERROR:
      return {
        ...state,
        jobseekerApplicationsLoading: false,
        jobseekerApplicationsError: action.payload,
      };
    case APPROVE_APPLICATIONS:
      return {
        ...state,
        approveApplicationsLoading: true,
        approveApplicationsError: null,
      };
    case APPROVE_APPLICATIONS_SUCCESS:
      return {
        ...state,
        approveApplicationsLoading: false,
      };
    case APPROVE_APPLICATIONS_ERROR:
      return {
        ...state,
        approveApplicationsLoading: false,
        approveApplicationsError: action.payload,
      };
    case EMPLOYER_SHORTLIST:
      return {
        ...state,
        employerShortlistLoading: true,
        employerShortlistError: null,
      };
    case EMPLOYER_SHORTLIST_SUCCESS:
      return {
        ...state,
        employerShortlist: action.payload,
        employerShortlistLoading: false,
      };
    case EMPLOYER_SHORTLIST_ERROR:
      return {
        ...state,
        employerShortlistLoading: false,
        employerShortlistError: action.payload,
      };
    case EMPLOYER_APPLICATIONS:
      return {
        ...state,
        employerApplicationsLoading: true,
        employerApplicationsError: null,
      };
    case EMPLOYER_APPLICATIONS_SUCCESS:
      return {
        ...state,
        employerApplications: action.payload,
        employerApplicationsLoading: false,
      };
    case EMPLOYER_APPLICATIONS_ERROR:
      return {
        ...state,
        employerApplicationsLoading: false,
        employerApplicationsError: action.payload,
      };
    case UPDATE_LOGO:
      return {
        ...state,
        logoUpdateLoading: true,
        logoUpdateError: null,
      };
    case UPDATE_LOGO_SUCCESS:
      return {
        ...state,
        logoUpdateLoading: false,
      };
    case UPDATE_LOGO_ERROR:
      return {
        ...state,
        logoUpdateLoading: false,
        logoUpdateError: action.payload,
      };
      case GENERAL_JOBS: 
      return{
        ...state, 
        generalJobsLoaing: false, 
        generalJobsError: false
      }
      case GENERAL_JOBS_SUCCESS: 
      return{
        ...state, 
        generalJobsLoaing: false, 
        generalJobsError: false,
        generalJobs: action.payload
      }
      case GENERAL_JOBS_ERROR: 
      return{
        ...state, 
        generalJobsLoaing: false, 
        generalJobsError: true, 
        generalJobs: action.payload
      }
      case "JOB_EDIT_CLONE":
      return {
        ...state,
        editCloneData: action.payload,
      };
      case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
      case "TAKE_ID":
      return {
        ...state,
        takeId: action.payload,
      };
    default:
      return state;
  }
};

export default Jobs;
