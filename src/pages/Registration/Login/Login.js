import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { googleSignIn, user, isLoading } = useAuth();

    // google singin
    const googleSignInhandler = () => {
        googleSignIn(navigate, location);
    };

    return (
        <div className="container-fluid login-container">
            <div className="flex justify-content-center align-items-center ">
                <div className="login-box col-12 bg-light text-center rounded-3">
                    <h2 className="text-primary py-3">
                        Please <span className="text-success"> Sign In</span>
                    </h2>
                    <div className="google-div px-4 pb-4">
                        <h4 className="text-danger">With Google</h4>
                        <Button
                            onClick={googleSignInhandler}
                            variant="primary"
                            className="fw-4"
                        >
                            <i className="fab fa-google" /> Sign in With Google
                        </Button>
                    </div>
                    <div className="m-3 p-3 email-login">
                        <h4 className="text-dark">With Email</h4>
                        <input
                            className="form-control mt-3 w-75 mx-auto"
                            type="email"
                            placeholder="Email Address"
                            disabled
                        />
                        <input
                            className="form-control mt-3 w-75 mx-auto"
                            type="password"
                            placeholder="Password"
                            disabled
                        />
                        <input
                            className="form-control mt-3 w-75 mx-auto"
                            type="submit"
                            disabled
                        />
                        <br />
                        <p className="w-50 mx-auto alart-email">
                            <i className="fas fa-exclamation-triangle" /> &nbsp;
                            Developer works for it!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
