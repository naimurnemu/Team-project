import React, { useEffect, useState } from "react";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";
import Event from "../Event/Event";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://floating-cliffs-11080.herokuapp.com/getEvent")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
            });
    }, []);

   
    return (
        <div>
            <NavigationHeader />
            <div className="bg-light text-center container">
                <h1 className="text-primary py-3">Up coming School Events</h1>

                <div className="overflow-scroll row row-cols-12">
                    {events.map((event) => (
                        <Event key={event._id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
