import React, { useEffect, useState } from "react";

//import Scss
import "./assets/scss/themes.scss";

//imoprt Route
import Route from "./Routes";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend
import fakeBackend from "./helpers/AuthType/fakeBackend";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./store/actions";
import Loading from "./pages/Pages/Front/Loading";

// Activating fake backend
// fakeBackend();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false)

  // const { loading, error } = useSelector((state) => ({
  //   loading: state.Login.loading,
  // }));


  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  

  return (
    <React.Fragment>
      <ToastContainer />
      <Route />
    </React.Fragment>
  );
}

export default App;
