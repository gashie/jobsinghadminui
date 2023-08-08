import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  //Jobs 
  const [jobs, setJobs] = useState(false)
  

  // Apps
  
  const [isJobs, setIsJobs] = useState(false);
  const [isEmployers, setIsEmployers] = useState(false);
  const [isSeekers, setIsSeekers] = useState(false);
  const [isResumes, setIsResumes] = useState(false);
  const [isNews, setIsNews] = useState(false);
  const [isAdvice, setIsAdvice] = useState(false);
  const [isInvo, setIsInvo] = useState(false);
  const [isCourses, setIsCourses] = useState(false);
  const [isRecep, setIsRecep] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [isJobList, setIsJobList] = useState(false);
  const [isCandidateList, setIsCandidateList] = useState(false);

 

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Jobs") {
      setIsJobs(false);
    }
    if (iscurrentState !== "Advice") {
      setIsAdvice(false);
    }
    if (iscurrentState !== "News") {
      setIsNews(false);
    }
    if (iscurrentState !== "Resumes") {
      setIsResumes(false);
    }
    if (iscurrentState !== "Seekers") {
      setIsSeekers(false);
    }
    if (iscurrentState !== "Employers") {
      setIsEmployers(false);
    }
    if (iscurrentState !== "Courses") {
      setIsCourses(false);
    }
    if (iscurrentState !== "Invoice") {
      setIsInvo(false);
    }
    if (iscurrentState !== "Recep") {
      setIsRecep(false);
    }
    if (iscurrentState !== "Admin") {
      setIsAdmin(false);
    }
    if (iscurrentState !== "Settings") {
      setIsSettings(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
   
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    
  }, [
    history,
    iscurrentState,
    isDashboard,
    isApps,
    isAuth,
    isPages,
    isBaseUi,
    isAdvanceUi,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
    isJobs, 
    
  ]);

  const menuItems = [
    {
      label: "Main",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboards",
      icon: " bx bx-tachometer",
      link: "admin-dashboard",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
      
    },
    // Jobs Start
      {
        label: "Jobs",
        isHeader: true,
      },

    {
      id: "manageJobs",
      label: "Manage Jobs",
      icon: "bx bx-briefcase-alt-2",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsJobs(!isJobs);
        setIscurrentState("Jobs");
        updateIconSidebar(e);
      },
      stateVariables: isJobs,
      subItems: [
        {
          id: "postAJob",
          label: "Post a Job",
          link: "/apps-calendar",
          parentId: "jobs",
        },
        {
          id: "expJobs",
          label: "Expired Jobs",
          link: "/apps-chat",
          parentId: "jobs",
        },
      ],
    },
    {
       id: "interviewQuestions",
       label: "Interview Questions",
       icon: "bx bx-bookmark",
       link : "#"
    },

    {
       label: "Employer", 
       isHeader: 'true'
    },
    {
        id: "emp",
        label: "Manage Employers",
        icon: "bx bxs-group",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsEmployers(!isEmployers);
          setIscurrentState("Employers");
          updateIconSidebar(e);
        },
        stateVariables: isEmployers,
        subItems: [
          {
            id: "disableAnEmployee",
            label: "Disable an Employee",
            link: "/apps-calendar",
            parentId: "emp",
          }
        ],
      },


    {
       label: "Job Seekers", 
       isHeader: 'true'
    },
    {
        id: "manageJobSeekers",
        label: "Manage Job Seekers",
        icon: "bx bx-layer",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsApps(!isApps);
          setIscurrentState("Apps");
          updateIconSidebar(e);
        },
        stateVariables: isApps,
        subItems: [
          {
            id: "disableAJobSeeker",
            label: "Disable a Job Seeker",
            link: "/apps-calendar",
            parentId: "",
          }
        ],
      },
    {
        id: "res",
        label: "Resumes",
        icon: "bx bx-book-open",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsResumes(!isResumes);
          setIscurrentState("Resumes");
          updateIconSidebar(e);
        },
        stateVariables: isResumes,
        subItems: [
          {
            id: "addRemoveResume",
            label: "Add / Remove Resumes",
            link: "/apps-calendar",
            parentId: "res",
          }
        ],
      }, 
      {
        id: "applicants",
        label: "Applicants",
        icon: "bx bx-user-plus",
        link : "#"
      },
      {
        id: "manageAlerts",
        label: "Manage Alerts",
        icon: "bx bx-mail-send",
        link : "#"
      },


     {
         label: "Career Services",
         isHeader: true
     },
     {
        id: "ne",
        label: "HR News",
        icon: "bx bx-book-content",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsNews(!isNews);
          setIscurrentState("News");
          updateIconSidebar(e);
        },
        stateVariables: isNews,
        subItems: [
          {
            id: "manageArticles",
            label: "Manage Articles",
            link: "/apps-calendar",
            parentId: "ne",
          },
          {
            id: "approveArticles",
            label: "Approve Articles",
            link: "/apps-calendar",
            parentId: "ne",
          },
          {
            id: "manageRssFeed",
            label: "Manage RSS Feeds",
            link: "/apps-calendar",
            parentId: "ne",
          }
        ],
      }, 
     {
        id: "ad",
        label: "Career Advice",
        icon: "bx bx-book-reader",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsAdvice(!isAdvice);
          setIscurrentState("Advice");
          updateIconSidebar(e);
        },
        stateVariables: isAdvice,
        subItems: [
          {
            id: "manageArticles",
            label: "Manage Articles",
            link: "/apps-calendar",
            parentId: "ad",
          },
          {
            id: "postArticles",
            label: "Post Articles",
            link: "/apps-calendar",
            parentId: "ad",
          },
        ],
      }, 
     {
        id: "co",
        label: "Courses",
        icon: "bx bx-table",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsCourses(!isCourses);
          setIscurrentState("Courses");
          updateIconSidebar(e);
        },
        stateVariables: isCourses,
        subItems: [
          {
            id: "manageCourses",
            label: "Manage Courses",
            link: "/apps-calendar",
            parentId: "co",
          },
          {
            id: "postCourses",
            label: "Post Courses",
            link: "/apps-calendar",
            parentId: "co",
          },
        ],
      }, 
      {
        label: "Banners and Logos",
        isHeader: true
      },
      {
        id: "manageLogos",
        label: "Manage Logos",
        icon: "bx bx-layer",
        link : "#"
      },
      {
        id: "updateLogos",
        label: "Update Logos",
        icon: "bx bx-layer",
        link : "#"
      },

      {
        label: "Social",
        isHeader: true
      },

      {
        id: "linkedIn",
        label: "LinkedIn",
        icon: "bx bxl-linkedin",
        link : "#"
      },
      {
        id: "twitter",
        label: "Twitter",
        icon: "bx bxl-twitter",
        link : "#"
      },
      {
        id: "threads",
        label: "Threads",
        icon: "bx bx-user-plus",
        link : "#"
      },

      {
        label: "Onvoices & Payments",
        isHeader: true
      },
      {
        id: "in",
        label: "Manage Invoices",
        icon: "bx bx-dollar",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsInvo(!isInvo);
          setIscurrentState("Invoice");
          updateIconSidebar(e);
        },
        stateVariables: isInvo,
        subItems: [
          {
            id: "generateInvoice",
            label: "Generate Invoice",
            link: "/apps-calendar",
            parentId: "in",
          },
          {
            id: "editAnInvoice",
            label: "Edit an Invoice",
            link: "/apps-calendar",
            parentId: "in",
          },
        ],
      }, 
      {
        id: "payments",
        label: "Manage Payment",
        icon: "bx bx-dollar",
        link: "#"
      },
      {
        id: "re",
        label: "Receipts",
        icon: "bx bx-layout",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsRecep(!isRecep);
          setIscurrentState("Recep");
          updateIconSidebar(e);
        },
        stateVariables: isRecep,
        subItems: [
          {
            id: "generateAReceipt",
            label: "Generate a Receipt",
            link: "/apps-calendar",
            parentId: "re",
          },
        ],
      }, 

      {
        label: "Settings",
        isHeader: true
      },
      {
        id: "ad",
        label: "Administrator",
        icon: "bx bx-book-reader",
        link: "/#",
        click: function (e) {
          e.preventDefault();
          setIsAdmin(!isAdmin);
          setIscurrentState("Admin");
          updateIconSidebar(e);
        },
        stateVariables: isAdmin,
        subItems: [
          {
            id: "addRemoveUser",
            label: "Add / Remove User",
            link: "/apps-calendar",
            parentId: "ad",
          },
        ],
      },

      {
      id: "set",
      label: "Manage Job Posting Settings",
      icon: "bx bxs-briefcase-alt-2",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsSettings(!isSettings);
        setIscurrentState("Settings");
        updateIconSidebar(e);
      },
      stateVariables: isSettings,
      subItems: [
        {
            id: "addEditCategory",
            label: "Add / Edit Category",
            link: "/apps-calendar",
            parentId: "set",
          },
          {
            id: "addEditIndustries",
            label: "Add / Edit User",
            link: "/apps-calendar",
            parentId: "set",
          },
          {
            id: "addEditFunctions",
            label: "Add / Edit Functions",
            link: "/apps-calendar",
            parentId: "set",
          },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
