import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AddEvent from "./pages/Dashboard/AddEvent/AddEvent";
import AddTeacher from "./pages/Dashboard/AddTeacher/AddTeacher";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyPost from "./pages/Dashboard/MyPost/MyPost";
import TeachersInfo from "./pages/Dashboard/TeachersInfo/TeachersInfo";
import Events from "./pages/Events/Events/Events";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Registration/Login/Login";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Teachers from "./pages/Teachers/Teachers/Teachers";
import "./App.css";
import ManageEvents from "./pages/Dashboard/ManageEvents/ManageEvents";
import Posts from "./pages/Posts/Posts/Posts";
import AddPost from "./pages/Dashboard/AddPost/AddPost";
import PendingPosts from "./pages/Dashboard/PendingPosts/PendingPosts";
import PrivateRoute from "./pages/Registration/ProtectedRoute/PrivateRoute";
import AdminRoute from "./pages/Registration/ProtectedRoute/AdminRoute";
import MakeAdmin from "./pages/MakeAdmin/MakeAdmin";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="teachers"
                            element={
                                <PrivateRoute>
                                    <Teachers />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="events"
                            element={
                                <PrivateRoute>
                                    <Events />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="magazine"
                            element={
                                <PrivateRoute>
                                    <Posts />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        >
                            <Route
                                path="addTeacher"
                                element={
                                    <AdminRoute>
                                        <AddTeacher />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="addEvent"
                                element={
                                    <AdminRoute>
                                        <AddEvent />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="makeAdmin"
                                element={
                                    <AdminRoute>
                                        <MakeAdmin />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="manageEvent"
                                element={
                                    <AdminRoute>
                                        <ManageEvents />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="manageTeacher"
                                element={
                                    <AdminRoute>
                                        <TeachersInfo />
                                    </AdminRoute>
                                }
                            />

                            <Route
                                path="pendingPosts"
                                element={
                                    <AdminRoute>
                                        <PendingPosts />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="/dashboard/"
                                element={
                                    <PrivateRoute>
                                        <AddPost />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="myPosts"
                                element={
                                    <PrivateRoute>
                                        <MyPost />
                                    </PrivateRoute>
                                }
                            ></Route>
                        </Route>

                        <Route path="login" element={<Login />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
