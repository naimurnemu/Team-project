import React, { useState } from "react";
import "./Dashboard.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const { user, logOut, admin } = useAuth();

    return (
        <div>
            <div className="navbarDash d-flex justify-content-between">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className="d-flex gap-3 me-5">
                    <span className="text-light fs-5">
                        <img
                            className="img-fluid rounded-circle"
                            title={user.email}
                            width="50"
                            height="50"
                            src={user.photoURL}
                            alt="User_info"
                        />
                    </span>
                    <Link to="/" className="text-white text-decoration-none">
                        <Button onClick={logOut}>
                            <i className="fas fa-sign-out-alt" />
                            Logout
                        </Button>
                    </Link>
                </div>
            </div>
            <nav
                id="dash-nav"
                className={sidebar ? "nav-menu active" : "nav-menu"}
            >
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbarDash-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>

                    <div className="my-3 mx-auto ">
                        <div>
                            {admin && (
                                <>
                                    <p>
                                        <Link
                                            to={`/dashboard/addTeacher`}
                                            className="text-decoration-none mb-3 text-white  fw-bold"
                                        >
                                            <i className="fas fa-plus-circle" />{" "}
                                            &nbsp; Add Teachers
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            to={`/dashboard/manageTeacher`}
                                            className="text-decoration-none mb-3 text-white fw-bold"
                                        >
                                            <i className="fas fa-tasks" />
                                            &nbsp; Manage Teacher
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            to={`/dashboard/addEvent`}
                                            className="text-decoration-none mb-3 text-white fw-bold"
                                        >
                                            <i className="fas fa-plus-circle" />
                                            &nbsp; Add Event
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            to={`/dashboard/manageEvent`}
                                            className="text-decoration-none mb-3 text-white fw-bold"
                                        >
                                            <i className="fas fa-tasks" />
                                            &nbsp; Manage Event
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            to={`/dashboard/makeAdmin`}
                                            className="text-decoration-none mb-3 text-white fw-bold"
                                        >
                                            <i className="fas fa-plus-circle" />
                                            &nbsp; Add New Admin
                                        </Link>
                                    </p>
                                </>
                            )}

                            <p>
                                <Link
                                    to={`/dashboard`}
                                    className="text-decoration-none mb-3 text-white fw-bold"
                                >
                                    <i className="fas fa-plus-circle" />
                                    &nbsp; New Post
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to={`/dashboard/pendingPosts`}
                                    className="text-decoration-none mb-3 text-white fw-bold"
                                >
                                    <i className="fas fa-plus-circle" />
                                    &nbsp; Pending Posts
                                </Link>
                            </p>
                        </div>

                        <Link
                            to="/"
                            className="text-white text-decoration-none"
                        >
                            <Button
                                className="d-block mb-3 w-75"
                                variant="secondary"
                            >
                                <i className="fas fa-home" />
                                Home
                            </Button>
                        </Link>
                        <Link
                            to="/"
                            className="text-white text-decoration-none"
                        >
                            <Button className="d-block w-75" onClick={logOut}>
                                <i className="fas fa-sign-out-alt" />
                                Logout
                            </Button>
                        </Link>
                    </div>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Dashboard;
