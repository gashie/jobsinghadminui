import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
// import { setAuthorization } from "../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";
import TriggerRoute from "./TriggerRoute";

// import { useProfile } from "../Components/Hooks/UserHooks";

import { logoutUser, testVerify } from "../store/actions";

const AuthProtectedEmployer = (props) => {
  const dispatch = useDispatch();
 
//   const { userProfile, loading, token } = useProfile();
//   useEffect(() => {
//     if (userProfile && !loading && token) {
//       // setAuthorization(token);
//     } else if (!userProfile && loading && !token) {
//       dispatch(logoutUser());
//     }
//   }, [token, userProfile, loading, dispatch]);

  /*
    Navigate is un-auth access protected routes via url
    */

    const { verifyInfo, verifyError, verifyLoading } = useSelector((state) => ({
      verifyInfo: state.Login.verifyInfo,
      verifyError: state.Login.verifyError, 
      verifyLoading: state.Login.verifyLoading
    }));

    console.log()

//   if (!userProfile && loading && !token) {
//     return (
//       <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
//     );
//   }

const { user, errorMsg, loading, error } = useSelector((state) => ({
  user: state.Account.user,
  errorMsg: state.Login.errorMsg,
  loading: state.Login.loading,
  error: state.Login.error,
}));


const isLoggedIn = useSelector((state) => state.Login.isloggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
    }


  
  
  // if (verifyInfo?.role === "Seeker" || verifyInfo?.role === "Employer") {
  //     return (
  //       <Navigate to={{ pathname: "/test-login", state: { from: props.location } }} />
  //     );
  //   }



  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtectedEmployer, AccessRoute };