import React, { useState } from "react";
import "./Dashboard.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    // const [admin,setAdmin]=useState(false)

    return (
        <div>
            <div className="navbarDash d-flex justify-content-between">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className="d-flex gap-3 me-5">
                    <h6>
                        <Link
                            className="text-white text-decoration-none"
                            to="/"
                        >
                            Home
                        </Link>
                    </h6>
                    <h6>
                        <Link
                            to="/"
                            className="text-white text-decoration-none"
                        >
                            Logout
                        </Link>
                    </h6>
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
                            <h4>
                                <i className="fas fa-shopping-cart text-white me-2"></i>
                                <Link
                                    to={`/dashboard/addTeacher`}
                                    className="text-decoration-none text-white  fw-bold"
                                >
                                    Add Teachers
                                </Link>
                            </h4>

                            <br />

                            <h4>
                                <i className="fas fa-comment text-white me-2"></i>
                                <Link
                                    to={`/dashboard/manageTeacher`}
                                    className="text-decoration-none text-white fw-bold"
                                >
                                    Manage All Post
                                </Link>
                            </h4>
                            <br />
                            <i className="fab fa-cc-amazon-pay text-white me-2"></i>
                            <Link
                                to={`/dashboard/payment`}
                                className="text-decoration-none text-white fw-bold"
                            >
                                Payment
                            </Link>
                            <br />
                        </div>

                        <i className="fas fa-sign-in-alt me-2 text-white"></i>
                        <Link
                            to="/"
                            className="text-decoration-none text-white p-0 border-0 fw-bold"
                        >
                            Logout
                        </Link>
                    </div>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Dashboard;
