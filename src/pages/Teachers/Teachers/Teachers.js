import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
    const [fresh, setFresh] = useState(false);
    const [teachers, setTeachers] = useState([]);
 

    useEffect(() => {
        fetch("https://floating-cliffs-11080.herokuapp.com/teachers")
            .then((res) => res.json())
            .then((data) => {
                setTeachers(data);
                if (data) {
                    setFresh(true);
                }
            });
    }, [fresh]);

    return (
        <div>
            <NavigationHeader />
            {!teachers.length && (
                <div
                    className="spinner-border text-primary mx-auto d-block my-4"
                    role="status"
                >
                    <span class="sr-only">Loading...</span>
                </div>
            )}

            <div className="row container ms-md-5 p-3 ">
                {teachers.map((teacher) => (
                    <Teacher key={teacher._id} teacher={teacher} />
                ))}
            </div>
            {!teachers && (
                <Spinner
                    className="text-center"
                    animation="border"
                    role="status"
                >
                    <span className="visually-hidden ">Loading...</span>
                </Spinner>
            )}
        </div>
    );
};

export default Teachers;
