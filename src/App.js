import React, { useEffect } from 'react';
import "./assets/scss/themes.scss";
import Route from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getMe } from "./store/actions";
import Loading from "./pages/Pages/Front/Loading";

function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <React.Fragment>
      <ToastContainer />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Route />
    </React.Fragment>
  );
}

export default App;
