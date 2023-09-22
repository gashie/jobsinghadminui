import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
// import { setAuthorization } from "../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";

import { useProfile } from "../Components/Hooks/UserHooks";

import { logoutUser, testVerify } from "../store/actions";
import TriggerRoute from "./TriggerRoute";

import { getMe } from "../store/auth/login/actions";
import { useNavigate } from "react-router-dom";

const AuthProtectedJobSeeker = (props) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.Login.isloggedIn);
  const userId = useSelector((state) => state.Login.userInfo);
  const userInfo = useSelector((state) => state.Login.userInfo);

  console.log(userId?.userInfo?.roleid);
  console.log(!isLoggedIn && userId?.userInfo?.roleid !== 3);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMe());
    if (isLoggedIn && userInfo?.userInfo?.roleid === 3) {
      // dispatch(getMe());

      navigate("/employer-dashboard");
    }

    // if (isLoggedIn && userInfo?.userInfo?.roleid === 2) {
    //   // dispatch(getMe());

    //   navigate("/job-seeker-dashboard");
    // }
  }, [dispatch, navigate, isLoggedIn, userInfo?.userInfo?.roleid]);

  if (!isLoggedIn) {
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

export { AuthProtectedJobSeeker, AccessRoute };
