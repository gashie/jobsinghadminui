import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../store/actions';

function TriggerRoute() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
  
    // Listen for the successful login action or another appropriate action
    const isLoggedIn = useSelector((state) => state.Login.isloggedIn);
    const userInfo = useSelector((state)=> state.Login.userInfo)
  
    console.log('trigger')
  
    useEffect(() => {
      if (isLoggedIn && userInfo?.userInfo?.roleid === 3) {
        // Dispatch the getMe action when the user is logged in
        dispatch(getMe());
  
        console.log('nav')
  
        // Perform redirection or other actions when the user is logged in
        navigate("/employer-dashboard");
      }
  
      if (isLoggedIn && userInfo?.userInfo?.roleid === 2) {
        // Dispatch the getMe action when the user is logged in
        dispatch(getMe());
  
        console.log('nav')
  
        // Perform redirection or other actions when the user is logged in
        navigate("/job-seeker-dashboard");
      }
    }, [dispatch, navigate, isLoggedIn,  userInfo?.userInfo?.roleid]);

  return (
    <>
    </>
  )
}

export default TriggerRoute