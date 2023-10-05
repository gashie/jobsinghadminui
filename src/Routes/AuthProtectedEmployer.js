import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
// import { setAuthorization } from "../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";
import TriggerRoute from "./TriggerRoute";
import { getMe } from "../store/auth/login/actions";
import { useNavigate } from "react-router-dom";

// import { useProfile } from "../Components/Hooks/UserHooks";

import { logoutUser, testVerify } from "../store/actions";
import { useState } from "react";

const AuthProtectedEmployer = (props) => {
  const dispatch = useDispatch();

 
  

  const inter = useSelector((state) => state.Login.inter);

  const { user, errorMsg, loading, error } = useSelector((state) => ({
    user: state.Account.user,
    errorMsg: state.Login.errorMsg,
    loading: state.Login.loading,
    error: state.Login.error,
  }));

  const isLoggedIn = useSelector((state) => state.Login.isloggedIn);
  const userId = useSelector((state) => state.Login.userInfo);
  const userInfo = useSelector((state) => state.Login.userInfo);


  const navigate = useNavigate();

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    dispatch(getMe());
    // if (isLoggedIn && userInfo?.userInfo?.roleid === 3) {
    //   navigate("/employer-dashboard");
    // }

    if (isLoggedIn && userInfo?.userInfo?.roleid === 2) {
      navigate("/app/job-seeker-dashboard");
    }
  }, [dispatch, navigate, isLoggedIn, userInfo?.userInfo?.roleid]);

  if (inter === true) {
    return (
      <Navigate to={{ pathname: path, state: { from: props.location } }} />
    );
  }

  if (!isLoggedIn || userId?.userInfo?.roleid === 2) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {" "}
            <Component {...props} />{" "}
          </>
        );
      }}
    />
  );
};

export { AuthProtectedEmployer, AccessRoute };
