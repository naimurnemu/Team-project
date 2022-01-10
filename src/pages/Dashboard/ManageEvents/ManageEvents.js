import React, { useEffect, useState } from "react";
// import { Accordion } from "react-bootstrap";
// import AddEvent from "../AddEvent/AddEvent";
import "./ManageEvents.css";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [fresh, setFresh] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/getEvent")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
            });
    }, [fresh]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteEvent/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setFresh(data);
            });
    };
    return (
        <div className="event-bg">
            {/* <div className="mx-auto w-100 w-md-50">
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header className="mx-auto fw-bold fs-4">
                            New Event
                        </Accordion.Header>
                        <Accordion.Body>
                            <AddEvent />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div> */}

            <h1 className="text-primary text-center py-4">
                <span className="text-danger">Manage </span> Previous Events
            </h1>
            <div>
                {
                    // akahane apner moto kore cart use koren,  ami shudhu kalka vabe connect korlam
                    events.map((event) => (
                        <div key={event._id}>
                            <h3>{event.title}</h3>

                            <h3>{event.date}</h3>
                            <h3>{event.description}</h3>
                            <button
                                onClick={() => handleDelete(event._id)}
                                className="btn btn-info"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageEvents;
