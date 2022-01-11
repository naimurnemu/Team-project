import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
    let location = useLocation();
    const { user, isLoading, admin } = useAuth();
    if (isLoading && admin) {
        return (
            <div>
                <br />
                <br />
                <br />
                <Spinner animation="grow" />
            </div>
        );
    } else if (user.email && admin) {
        return children;
    } else {
        return <Navigate to="/" state={{ from: location }} />;
    }
};

export default AdminRoute;
