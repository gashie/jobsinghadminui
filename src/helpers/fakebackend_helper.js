import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) =>
  api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data) =>
  api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data) =>
  api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data) =>
  api.update(url.POST_EDIT_PROFILE + "/" + data.idx, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// Login Method
export const postJwtLogin = (data) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data) =>
  api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data) => api.create(url.SOCIAL_LOGIN, data);

// Calendar
// get Events
export const getEvents = () => api.get(url.GET_EVENTS);

// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES);

// get Upcomming Events
export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT);

// add Events
export const addNewEvent = (event) => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = (event) => api.put(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = (event) =>
  api.delete(url.DELETE_EVENT, { headers: { event } });

// Chat
// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT);

// get Messages
export const getMessages = (roomId) =>
  api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

// add Message
export const addMessage = (message) => api.create(url.ADD_MESSAGE, message);

// add Message
export const deleteMessage = (message) =>
  api.delete(url.DELETE_MESSAGE, { headers: { message } });

// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS);

// MailBox
//get Mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS);

// delete Mail
export const deleteMail = (forId) =>
  api.delete(url.DELETE_MAIL, { headers: { forId } });

// Ecommerce
// get Products
export const getProducts = () => api.get(url.GET_PRODUCTS);

// delete Product
export const deleteProducts = (product) =>
  api.delete(url.DELETE_PRODUCT + "/" + product);

// add Products
export const addNewProduct = (product) =>
  api.create(url.ADD_NEW_PRODUCT, product);

// update Products
export const updateProduct = (product) =>
  api.update(url.UPDATE_PRODUCT + "/" + product._id, product);

// get Orders
export const getOrders = () => api.get(url.GET_ORDERS);

// add Order
export const addNewOrder = (order) => api.create(url.ADD_NEW_ORDER, order);

// update Order
export const updateOrder = (order) =>
  api.update(url.UPDATE_ORDER + "/" + order._id, order);

// delete Order
export const deleteOrder = (order) =>
  api.delete(url.DELETE_ORDER + "/" + order);

// get Customers
export const getCustomers = () => api.get(url.GET_CUSTOMERS);

// add Customers
export const addNewCustomer = (customer) =>
  api.create(url.ADD_NEW_CUSTOMER, customer);

// update Customers
export const updateCustomer = (customer) =>
  api.update(url.UPDATE_CUSTOMER + "/" + customer._id, customer);

// delete Customers
export const deleteCustomer = (customer) =>
  api.delete(url.DELETE_CUSTOMER + "/" + customer);

// get Sellers
export const getSellers = () => api.get(url.GET_SELLERS);

// Project
// get Project list
export const getProjectList = () => api.get(url.GET_PROJECT_LIST);

// Tasks
// get Task
export const getTaskList = () => api.get(url.GET_TASK_LIST);

// add Task
export const addNewTask = (task) => api.create(url.ADD_NEW_TASK, task);

// update Task
export const updateTask = (task) =>
  api.update(url.UPDATE_TASK + "/" + task._id, task);

// delete Task
export const deleteTask = (task) => api.delete(url.DELETE_TASK + "/" + task);

// CRM
// get Contacts
export const getContacts = () => api.get(url.GET_CONTACTS);

// add Contact
export const addNewContact = (contact) =>
  api.create(url.ADD_NEW_CONTACT, contact);

// update Contact
export const updateContact = (contact) =>
  api.update(url.UPDATE_CONTACT + "/" + contact._id, contact);

// delete Contact
export const deleteContact = (contact) =>
  api.delete(url.DELETE_CONTACT + "/" + contact);

// get Companies
export const getCompanies = () => api.get(url.GET_COMPANIES);

// add Companies
export const addNewCompanies = (company) =>
  api.create(url.ADD_NEW_COMPANIES, company);

// update Companies
export const updateCompanies = (company) =>
  api.update(url.UPDATE_COMPANIES + "/" + company._id, company);

// delete Companies
export const deleteCompanies = (company) =>
  api.delete(url.DELETE_COMPANIES + "/" + company);

// get Deals
export const getDeals = () => api.get(url.GET_DEALS);

// get Leads
export const getLeads = () => api.get(url.GET_LEADS);

// add Lead
export const addNewLead = (lead) => api.create(url.ADD_NEW_LEAD, lead);

// update Lead
export const updateLead = (lead) =>
  api.update(url.UPDATE_LEAD + "/" + lead._id, lead);

// delete Lead
export const deleteLead = (lead) => api.delete(url.DELETE_LEAD + "/" + lead);

// Crypto
// Transation
export const getTransationList = () => api.get(url.GET_TRANSACTION_LIST);

// Order List
export const getOrderList = () => api.get(url.GET_ORDRER_LIST);

// Invoice
//get Invoice
export const getInvoices = () => api.get(url.GET_INVOICES);

// add Invoice
export const addNewInvoice = (invoice) =>
  api.create(url.ADD_NEW_INVOICE, invoice);

// update Invoice
export const updateInvoice = (invoice) =>
  api.update(url.UPDATE_INVOICE + "/" + invoice._id, invoice);

// delete Invoice
export const deleteInvoice = (invoice) =>
  api.delete(url.DELETE_INVOICE + "/" + invoice);

// Support Tickets
// Tickets
export const getTicketsList = () => api.get(url.GET_TICKETS_LIST);

// add Tickets
export const addNewTicket = (ticket) => api.create(url.ADD_NEW_TICKET, ticket);

// update Tickets
export const updateTicket = (ticket) =>
  api.update(url.UPDATE_TICKET + "/" + ticket._id, ticket);

// delete Tickets
export const deleteTicket = (ticket) =>
  api.delete(url.DELETE_TICKET + "/" + ticket);

// Dashboard Analytics

// Sessions by Countries
export const getAllData = () => api.get(url.GET_ALL_DATA);
export const getHalfYearlyData = () => api.get(url.GET_HALFYEARLY_DATA);
export const getMonthlyData = () => api.get(url.GET_MONTHLY_DATA);

// Audiences Metrics
export const getAllAudiencesMetricsData = () =>
  api.get(url.GET_ALLAUDIENCESMETRICS_DATA);
export const getMonthlyAudiencesMetricsData = () =>
  api.get(url.GET_MONTHLYAUDIENCESMETRICS_DATA);
export const getHalfYearlyAudiencesMetricsData = () =>
  api.get(url.GET_HALFYEARLYAUDIENCESMETRICS_DATA);
export const getYearlyAudiencesMetricsData = () =>
  api.get(url.GET_YEARLYAUDIENCESMETRICS_DATA);

// Users by Device
export const getTodayDeviceData = () => api.get(url.GET_TODAYDEVICE_DATA);
export const getLastWeekDeviceData = () => api.get(url.GET_LASTWEEKDEVICE_DATA);
export const getLastMonthDeviceData = () =>
  api.get(url.GET_LASTMONTHDEVICE_DATA);
export const getCurrentYearDeviceData = () =>
  api.get(url.GET_CURRENTYEARDEVICE_DATA);

// Audiences Sessions by Country
export const getTodaySessionData = () => api.get(url.GET_TODAYSESSION_DATA);
export const getLastWeekSessionData = () =>
  api.get(url.GET_LASTWEEKSESSION_DATA);
export const getLastMonthSessionData = () =>
  api.get(url.GET_LASTMONTHSESSION_DATA);
export const getCurrentYearSessionData = () =>
  api.get(url.GET_CURRENTYEARSESSION_DATA);

// Dashboard CRM

// Balance Overview
export const getTodayBalanceData = () => api.get(url.GET_TODAYBALANCE_DATA);
export const getLastWeekBalanceData = () =>
  api.get(url.GET_LASTWEEKBALANCE_DATA);
export const getLastMonthBalanceData = () =>
  api.get(url.GET_LASTMONTHBALANCE_DATA);
export const getCurrentYearBalanceData = () =>
  api.get(url.GET_CURRENTYEARBALANCE_DATA);

// Dial Type
export const getTodayDealData = () => api.get(url.GET_TODAYDEAL_DATA);
export const getWeeklyDealData = () => api.get(url.GET_WEEKLYDEAL_DATA);
export const getMonthlyDealData = () => api.get(url.GET_MONTHLYDEAL_DATA);
export const getYearlyDealData = () => api.get(url.GET_YEARLYDEAL_DATA);

// Sales Forecast
export const getOctSalesData = () => api.get(url.GET_OCTSALES_DATA);
export const getNovSalesData = () => api.get(url.GET_NOVSALES_DATA);
export const getDecSalesData = () => api.get(url.GET_DECSALES_DATA);
export const getJanSalesData = () => api.get(url.GET_JANSALES_DATA);

// Dashboard Ecommerce
// Revenue
export const getAllRevenueData = () => api.get(url.GET_ALLREVENUE_DATA);
export const getMonthRevenueData = () => api.get(url.GET_MONTHREVENUE_DATA);
export const getHalfYearRevenueData = () =>
  api.get(url.GET_HALFYEARREVENUE_DATA);
export const getYearRevenueData = () => api.get(url.GET_YEARREVENUE_DATA);

// Dashboard Crypto
// Portfolio
export const getBtcPortfolioData = () => api.get(url.GET_BTCPORTFOLIO_DATA);
export const getUsdPortfolioData = () => api.get(url.GET_USDPORTFOLIO_DATA);
export const getEuroPortfolioData = () => api.get(url.GET_EUROPORTFOLIO_DATA);

// Market Graph
export const getAllMarketData = () => api.get(url.GET_ALLMARKETDATA_DATA);
export const getYearMarketData = () => api.get(url.GET_YEARMARKET_DATA);
export const getMonthMarketData = () => api.get(url.GET_MONTHMARKET_DATA);
export const getWeekMarketData = () => api.get(url.GET_WEEKMARKET_DATA);
export const getHourMarketData = () => api.get(url.GET_HOURMARKET_DATA);

// Dashboard Project
// Project Overview
export const getAllProjectData = () => api.get(url.GET_ALLPROJECT_DATA);
export const getMonthProjectData = () => api.get(url.GET_MONTHPROJECT_DATA);
export const gethalfYearProjectData = () =>
  api.get(url.GET_HALFYEARPROJECT_DATA);
export const getYearProjectData = () => api.get(url.GET_YEARPROJECT_DATA);

// Project Status
export const getAllProjectStatusData = () =>
  api.get(url.GET_ALLPROJECTSTATUS_DATA);
export const getWeekProjectStatusData = () =>
  api.get(url.GET_WEEKPROJECTSTATUS_DATA);
export const getMonthProjectStatusData = () =>
  api.get(url.GET_MONTHPROJECTSTATUS_DATA);
export const getQuarterProjectStatusData = () =>
  api.get(url.GET_QUARTERPROJECTSTATUS_DATA);

// Dashboard NFT
// Marketplace
export const getAllMarketplaceData = () => api.get(url.GET_ALLMARKETPLACE_DATA);
export const getMonthMarketplaceData = () =>
  api.get(url.GET_MONTHMARKETPLACE_DATA);
export const gethalfYearMarketplaceData = () =>
  api.get(url.GET_HALFYEARMARKETPLACE_DATA);
export const getYearMarketplaceData = () =>
  api.get(url.GET_YEARMARKETPLACE_DATA);

// Project
export const addProjectList = (project) =>
  api.create(url.ADD_NEW_PROJECT, project);
export const updateProjectList = (project) =>
  api.put(url.UPDATE_PROJECT, project);
export const deleteProjectList = (project) =>
  api.delete(url.DELETE_PROJECT, { headers: { project } });

// Pages > Team
export const getTeamData = (team) => api.get(url.GET_TEAMDATA, team);
export const deleteTeamData = (team) =>
  api.delete(url.DELETE_TEAMDATA, { headers: { team } });
export const addTeamData = (team) => api.create(url.ADD_NEW_TEAMDATA, team);
export const updateTeamData = (team) => api.put(url.UPDATE_TEAMDATA, team);

// File Manager

// Folder
export const getFolders = (folder) => api.get(url.GET_FOLDERS, folder);
export const deleteFolder = (folder) =>
  api.delete(url.DELETE_FOLDER, { headers: { folder } });
export const addNewFolder = (folder) => api.create(url.ADD_NEW_FOLDER, folder);
export const updateFolder = (folder) => api.put(url.UPDATE_FOLDER, folder);

// File
export const getFiles = (file) => api.get(url.GET_FILES, file);
export const deleteFile = (file) =>
  api.delete(url.DELETE_FILE, { headers: { file } });
export const addNewFile = (file) => api.create(url.ADD_NEW_FILE, file);
export const updateFile = (file) => api.put(url.UPDATE_FILE, file);

// To Do
export const getTodos = (todo) => api.get(url.GET_TODOS, todo);
export const deleteTodo = (todo) =>
  api.delete(url.DELETE_TODO, { headers: { todo } });
export const addNewTodo = (todo) => api.create(url.ADD_NEW_TODO, todo);
export const updateTodo = (todo) => api.put(url.UPDATE_TODO, todo);

// To do Project
export const getProjects = (project) => api.get(url.GET_PROJECTS, project);
export const addNewProject = (project) =>
  api.create(url.ADD_NEW_TODO_PROJECT, project);

//Job Application
export const getJobApplicationList = () => api.get(url.GET_APPLICATION_LIST);

//API Key
export const getAPIKey = () => api.get(url.GET_API_KEY);

//test login
export const testLoginURL = (user) => api.create(url.TEST_LOGIN, user);
//text verify
export const testVerifyURL = () => api.get(url.TEST_VERIFY);

//jobsinGhanaURLS
export const loginURL = (data) => api.create(url.LOGIN, data);
export const verifyTokenURL = () => api.create(url.VERIFYTOKEN);

//jobalert
export const viewJobAlertsURL = (data) => api.create(url.VIEW_JOB_ALERTS, data);
export const createJobAlertURL = (data) =>
  api.create(url.CREATE_JOB_ALERT, data);
export const updateJobAlertURL = (data) =>
  api.create(url.UPDATE_JOB_ALERT, data);

//resume and coverletters
export const viewResumeURL = (data) => api.create(url.VIEW_RESUME, data);
export const createResumeURL = (data) => api.create(url.CREATE_RESUME, data);
export const updateResumeURL = (data) => api.create(url.UPDATE_RESUME, data);
export const createCvURL = (data) => api.create(url.CREATE_CV, data);
export const viewCvURL = (data) => api.create(url.VIEW_CV, data);
export const updateCvURL = (data) => api.create(url.UPDATE_CV, data);
export const viewSavedJobsURL = (data) => api.create(url.VIEW_SAVED_JOBS, data);

export const updateProfileURL = (data) => api.create(url.UPDATE_PROFILE, data);
//export const changePasswordURL = (data) => api.create(url.CHANGE_PASSWORD, data)

export const createJobURL = (data) => api.create(url.CREATE_JOB, data);
export const updateJobURL = (data) => api.create(url.UPDATE_JOB, data);
export const jobsURL = (data) => api.create(url.JOBS, data);
export const approveJobURL = (data) => api.create(url.APPROVE_JOBS, data);
export const createjobStatusURL = (data) =>
  api.create(url.CREATE_JOB_STATUS, data);
export const jobStatusURL = (data) => api.create(url.JOB_STATUS, data);
export const updateJobStatusURL = (data) =>
  api.create(url.UPDATE_JOB_STATUS, data);

export const updateUserProfileURL = (data) =>
  api.create(url.UPDATE_USER_PROFILE, data);
export const jobseekersURL = (data) => api.create(url.JOBSEEKERS, data);
export const employersURL = (data) => api.create(url.EMPLOYERS, data);

export const industryURL = (data) => api.create(url.INDUSTRY, data);
export const createIndustryURL = (data) =>
  api.create(url.CREATE_INDUSTRY, data);
export const updateIndustryURL = (data) =>
  api.create(url.UPDATE_INDUSTRY, data);

export const categoryURL = (data) => api.create(url.CATEGORY, data);
export const createCategoryURL = (data) =>
  api.create(url.CREATE_CATEGORY, data);
export const updateCategoryURL = (data) =>
  api.create(url.UPDATE_CATEGORY, data);

export const createQuestionURL = (data) =>
  api.create(url.CREATE_QUESTION, data);
export const linkJobQuestionURL = (data) =>
  api.create(url.LINK_QUESTIOSN, data);
export const unlinkJobQuestionURL = (data) =>
  api.create(url.UNLINK_QUESTIOSN, data);
export const createBulkQuestionURL = (data) =>
  api.create(url.CREATE_BULK_QUESTION, data);

export const viewMyQuestions = (data) => api.create(url.VIEW_QUESTIONS, data);

export const SignUpURL = (data) => api.create(url.SIGN_UP, data);

export const rateCardURL = (data) => api.create(url.RATE_CARD, data);
export const updateRatecardURL = (data) =>
  api.create(url.UPDATE_RATE_CARD, data);
export const approveRateCardURL = (data) =>
  api.create(url.APPROVE_RATE_CARD, data);
export const createRateCardURL = (data) =>
  api.create(url.CREATE_RATE_CARD, data);

export const courseContentURL = (data) => api.create(url.COURSE_CONTENT, data);
export const saveCourseContetntURL = (data) =>
  api.create(url.SAVE_COURSE_CONTENT, data);
export const updateCourseContentURL = (data) =>
  api.create(url.UPDATE_COURSE_CONTENT, data);

export const coursePartnershipURL = (data) =>
  api.create(url.COURSE_PARTNERSHIP, data);
export const updateCoursePartnershipURL = (data) =>
  api.create(url.UPDATE_COURSE_PARTNERSHIP, data);
export const saveCoursePartnershipURL = (data) =>
  api.create(url.SAVE_COURSE_PARTNERSHIP, data);

export const courseScheduleURL = (data) =>
  api.create(url.COURSE_SCHEDULE, data);
export const saveCourseScheduleURL = (data) =>
  api.create(url.SAVE_COURSE_SCHEDULE, data);
export const updateCourseScheduleURL = (data) =>
  api.create(url.UPDATE_COURSE_SCHEDULE, data);

export const courseURL = (data) => api.create(url.COURSE, data);
export const updateCourseURL = (data) => api.create(url.UPDATE_COURSE, data);
export const approveCourseURL = (data) => api.create(url.APPROVE_COURSE, data);
export const saveCourseURL = (data) => api.create(url.SAVE_COURSE, data);

export const paymentURL = (data) => api.create(url.PAYMENT, data);

export const resetCodeURL = (data) => api.create(url.RESET_CODE, data);
export const changePasswordURL = (data) =>
  api.create(url.CHANGE_PASSWORD, data);

export const logoutURL = () => api.create(url.LOGOUT);

export const activateUserURL = (data) => api.create(url.ACTIVATE_USER, data);

export const resendActivationCode = (data) =>
  api.create(url.RESEND_ACTIVATION_CODE, data);

export const saveJobURL = (data) => api.create(url.SAVE_JOB, data);
export const updateSavedJobsURL = (data) =>
  api.create(url.UPDATE_SAVED_JOBS, data);

export const fullJobDetailsURL = (data) =>
  api.create(url.FULL_JOB_DETAILS, data);
export const applyForJobURL = (data) => api.create(url.APPLY_FOR_JOB, data);

export const jobSeekerApplicationsURL = (data) =>
  api.create(url.JOBSEEKER_APPLICATIONS, data);
export const approveApplicationsURL = (data) =>
  api.create(url.APPROVE_APPLICATIONS, data);
export const employerShortlistApplicationsURL = (data) =>
  api.create(url.EMPLOYER_SHORTLIST_APPLICATIONS, data);
export const employerApplicationsURL = (data) =>
  api.create(url.EMPLOYER_APPLICATIONS, data);
export const updateLogoURL = (data) => api.create(url.UPDATE_LOGO, data);

export const updateProfileImageURL = (data) =>
  api.create(url.UPDATE_PROFILE_IMAGE, data);

export const passwordCodeURL = (data) => api.create(url.PASSWORD_CODE, data);
export const changePassURL = (data) => api.create(url.CHANGE_PASS, data);

export const transactionsURL = (data) => api.create(url.TRANSACTIONS, data);
export const generalJobsURL = (data) => api.create(url.GENERAL_JOBS, data);

export const invoiceURL = (data) => api.create(url.INVOICES, data);
export const payInvoiceURL = (data) => api.create(url.PAY_INVOICE, data);

export const sendServiceURL = (data) => api.create(url.SERVICE, data);

export const myProfileURL = (data) => api.create(url.VIEW_PROFILE, data);

export const confirmPay = (data) => api.create(url.CONFIRM_PAY, data);

export const homeCoursesURL = (data) => api.create(url.HOME_COURSE, data);
export const fetchNewsURL = (data) => api.create(url.FETCH_NEWS, data);

export const saveUserFeedsURL = (data) => api.create(url.SAVE_USER_FEEDS, data);
export const saveFeedsURL = (data) => api.create(url.SAVE_FEEDS, data);
export const updateFeedsURL = (data) => api.create(url.UPDATE_FEEDS, data);
export const feedsURL = (data) => api.create(url.FEEDS, data);
export const approveFeedsURL = (data) => api.create(url.APPROVE_FEEDS, data);
export const myfeedsURL = (data) => api.create(url.MY_FEEDS, data);
export const findJobURL = (data) => api.create(url.FIND_JOB, data);

export const updateUserFeedURL = (data) =>
  api.create(url.UPDATE_USER_FEEDS, data);

export const generalIndustriesURL = (data) =>
  api.create(url.GENERAL_INDUSTRIES, data);

export const generalCategoriesURL = (data) =>
  api.create(url.GENERAL_CATEGORIES, data);


  export const updateQuestionURL = (data) => api.create(url.UPDATE_QUESTION, data);