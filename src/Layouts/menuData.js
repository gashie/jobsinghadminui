import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  const [currentState, setCurrentState] = useState("Dashboard");

  useEffect(() => {
    if (currentState === "Widgets") {
      history("/widgets");
    }
  }, [currentState, history]);


  const menuItems = [
    {
      id: "Home",
      label: "Home",
      icon: "bx bx-tachometer",
      link: "/job-seeker-dashboard",
      stateVariables: currentState === "Dashboard",
      click: () => handleItemClick("Dashboard"),
    },
    {
      id: "profile",
      label: "Profile",
      icon: "bx bx-briefcase-alt-2",
      link: "/job-seeker-profile",
      click: () => handleItemClick("Profile"),
    },
    {
      id: "emp",
      label: "Manage Employers",
      icon: "bx bxs-group",
      link: "/#",
      click: () => handleItemClick("Employers"),
      stateVariables: currentState === "Employers",
    },
    {
      id: "cv/resume",
      label: "CV/Resume",
      icon: "bx bx-layer",
      link: "/job-seeker-resume",
      click: () => handleItemClick("Apps"),
      stateVariables: currentState === "Apps",
    },
    {
      id: "applications",
      label: "Applications",
      icon: "bx bx-book-open",
      link: "/#",
    },
    {
      id: "alerts",
      label: "Alerts",
      icon: "bx bx-mail-send",
      link: "#",
    },
    {
      id: "savedjobs",
      label: "Saved Jobs",
      icon: "bx bx-book-content",
      link: "/#",
    },
    {
      id: "accountSettings",
      label: "Account Settings",
      icon: "bx bx-book-reader",
      link: "/#",
    },
    {
      id: "logout",
      label: "Logout",
      icon: "bx bx-table",
      link: "/#",
    },
  ];

  const handleItemClick = (item) => {
    history("/" + item.toLowerCase());
    setCurrentState(item);
  };

  useEffect(() => {
    if (currentState === "Widgets") {
      history("/widgets");
    }
  }, [currentState, history]);

  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          <a
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              item.click();
            }}
          >
            <i className={item.icon}></i> <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navdata;
