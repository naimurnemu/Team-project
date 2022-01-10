        import React, { useEffect, useState } from 'react';

        const ManageEvents = () => {

            const [events, setEvents]=useState([])
            const [fresh,setFresh]=useState(false)

        useEffect(()=>{
            fetch('http://localhost:5000/getEvent')
        .then(res=>res.json())
        .then(data=>{
           
            setEvents(data)
        })
    },[fresh])

    const handleDelete = (id)=>{
        const proceed = window.confirm("Are you sure? delete for this Event")
        if(proceed){
            fetch(`http://localhost:5000/deleteEvent/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setFresh(data)
            
        })

        }
        

    }
    return (
        <div>
            <h2>this is manage events</h2>
            {
                // akahane apner moto kore cart use koren,  ami shudhu kalka vabe connect korlam
                events.map(event=><div key={event._id}>
                    <h3>
                        {event.title}
                    </h3>
                   
                    <h3>
                        {event.date}
                    </h3>
                    <h3>
                        {event.description}
                    </h3>
                    <button onClick={()=>handleDelete(event._id)} className="btn btn-info">Delete</button>
                </div>)
            }

        </div>
    );
};

export default ManageEvents;