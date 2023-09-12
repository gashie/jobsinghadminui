import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";

//routes
import { authProtectedRoutes, publicRoutes, jobSeekerRoutes, employerRoutes } from "./allRoutes";
import { AuthProtectedJobSeeker } from './AuthProtectedJobSeeker';
import { AuthProtectedEmployer } from './AuthProtectedEmployer';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <NonAuthLayout>
                                    {route.component}
                                </NonAuthLayout>
                            }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>

    
                <Route>
                    {jobSeekerRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtectedJobSeeker>
                                    <VerticalLayout>{route.component}</VerticalLayout>
                                </AuthProtectedJobSeeker>}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>


                <Route>
                    {employerRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtectedEmployer>
                                    <VerticalLayout>{route.component}</VerticalLayout>
                                </AuthProtectedEmployer>}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default Index;