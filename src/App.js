import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AddEvent from "./pages/Dashboard/AddEvent/AddEvent";
import AddTeacher from "./pages/Dashboard/AddTeacher/AddTeacher";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyPost from "./pages/Dashboard/MyPost/MyPost";
import Payment from "./pages/Dashboard/Payment/Payment";
import PendingPost from "./pages/Dashboard/PendingPost/PendingPost";
import TeachersInfo from "./pages/Dashboard/TeachersInfo/TeachersInfo";
import UpdatePost from "./pages/Dashboard/UpdatePost.js/UpdatePost";
import Events from "./pages/Events/Events/Events";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Registration/Login/Login";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Teachers from "./pages/Teachers/Teachers/Teachers";
import "./App.css";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="teachers" element={<Teachers />} />
                        <Route path="events" element={<Events />} />
                        <Route path="Dashboard" element={<Dashboard />}>
                            <Route
                                path="pendingPost"
                                element={<PendingPost />}
                            />
                            <Route path="addEvent" element={<AddEvent />} />
                            <Route path="addTeacher" element={<AddTeacher />} />
                            <Route
                                path="manageTeacher"
                                element={<TeachersInfo />}
                            />
                            <Route path="myPosts" element={<MyPost />}></Route>
                            <Route path="updatePost" element={<UpdatePost />} />
                            <Route path="updatePost" element={<UpdatePost />} />
                            <Route path="payment" element={<Payment />} />
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
