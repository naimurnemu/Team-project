import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTeacher from "./context/AddTeacher/AddTeacher";
import AddEvent from "./pages/Dashboard/AddEvent/AddEvent";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyPost from "./pages/Dashboard/MyPost/MyPost";
import PendingPost from "./pages/Dashboard/PendingPost/PendingPost";
import TeachersInfo from "./pages/Dashboard/TeachersInfo/TeachersInfo";
import UpdatePost from "./pages/Dashboard/UpdatePost.js/UpdatePost";
import Events from "./pages/Events/Events/Events";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Registration/Login/Login";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Teachers from "./pages/Teachers/Teachers/Teachers";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="teachers" element={<Teachers />} />
                    <Route path="events" element={<Events />} />
                    <Route path="Dashboard" element={<Dashboard />}>
                        <Route path="pendingPost" element={<PendingPost />} />
                        <Route path="addEvent" element={<AddEvent />} />
                        <Route path={`addTeacher`} element={<AddTeacher />} />
                        <Route path="teachersInfo" element={<TeachersInfo />} />
                        {/* <Route path="myPosts" element={<MyPost />}>
                            <Route path="updatePost" element={<UpdatePost />} />
                        </Route> */}
                    </Route>
                    
                    <Route path="login" element={<Login />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
