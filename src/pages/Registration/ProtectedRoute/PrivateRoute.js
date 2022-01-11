import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div>
                <br />
                <br />
                <br />
                <Spinner animation="grow" />
            </div>
        );
    } else if (user.email) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} />;
    }
};

export default PrivateRoute;
