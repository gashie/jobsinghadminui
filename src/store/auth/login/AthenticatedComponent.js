import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "./redux/actions"; // Import the getMe action

function AuthenticatedComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Listen for the successful login action or another appropriate action
  const isLoggedIn = useSelector((state) => state.Login.isLoggedIn);

  console.log('trigger')

  useEffect(() => {
    if (isLoggedIn) {
      // Dispatch the getMe action when the user is logged in
      dispatch(getMe());

      console.log('nav')

      // Perform redirection or other actions when the user is logged in
      navigate("/job-seeker-dashboard");
    }
  }, [dispatch, navigate, isLoggedIn]);

  // Your component rendering and logic here

  return (
    <div>
      {/* Your component content */}
    </div>
  );
}

export default AuthenticatedComponent;
