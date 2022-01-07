import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { googleSignIn, user, isLoading } = useAuth();

    return (
        <div className="" container-fluid>
            <img
                alt="login_banner"
                ClassName="wave"
                src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
            />
            <div ClassName="row">
                <div className="col-12 col-md-6">
                    <img
                        ClassName="img-fluid"
                        alt=""
                        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <form action="index.html">
                        <img
                            alt="avater"
                            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg"
                        />
                        <h2 ClassName="title">Welcome</h2>
                        <div ClassName="input-div one">
                            <div ClassName="i">
                                <i ClassName="fas fa-user"></i>
                            </div>
                            <div ClassName="div">
                                <h5>Username</h5>
                                <input type="text" ClassName="input" />
                            </div>
                        </div>
                        <div ClassName="input-div pass">
                            <div ClassName="i">
                                <i ClassName="fas fa-lock"></i>
                            </div>
                            <div ClassName="div">
                                <h5>Password</h5>
                                <input type="password" ClassName="input" />
                            </div>
                        </div>
                        {/* <a href="#">Forgot Password?</a> */}
                        <input type="submit" ClassName="btn" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
