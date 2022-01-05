
import "./App.css";
import AddTeacher from "./context/AddTeacher/AddTeacher";
import GetTeachers from "./context/GetTeachers/GetTeachers";
import Dashboard from "./Dashboard/Dashboard";
import EventPost from "./EventPost/EventPost";
import Login from "./pages/Registration/Login/Login";


function App() {
    return (
        <div className="App">
            <Login />
            <AddTeacher></AddTeacher>
            <GetTeachers></GetTeachers>

            <Dashboard></Dashboard>



            <br/>

            <EventPost></EventPost>
            
        </div>
    );
}

export default App;
