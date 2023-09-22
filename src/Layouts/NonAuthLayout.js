import React, { useEffect } from 'react';
import withRouter from '../Components/Common/withRouter';
import Navbar from '../pages/Pages/JobSeeker/navbar';
import Footer from '../pages/Pages/JobSeeker/footer'

//redux
import { useSelector } from "react-redux";



const NonAuthLayout = ({ children }) => {





    
    const {
        layoutModeType,
    } = useSelector(state => ({
        layoutModeType: state.Layout.layoutModeType,
    }));

    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
        } else {
            document.body.setAttribute("data-layout-mode", "light");
        }
        return () => {
            document.body.removeAttribute("data-layout-mode")
        }
    }, [layoutModeType]);
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default withRouter(NonAuthLayout);