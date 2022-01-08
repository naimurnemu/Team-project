import React, { useEffect, useState } from 'react';

const TeachersInfo = () => {

    const [teachers, setTeachers]=useState([])
    const [fresh, setFresh]=useState(false)
    

    useEffect(()=>{
        fetch('http://localhost:5000/getTeachersInfo')
        .then(res=>res.json())
        .then(data=>{
            setTeachers(data)
            
        })
    },[fresh])


   const handleDelete = (id)=>{
        fetch(`http://localhost:5000/deleteTeacher/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            
            setFresh(data)
        })
    }
    return (
        <div>
            
            <h2>This is teacher info</h2>

            {
                teachers.map(teacher=><div key={teacher._id}>
                    <h4>{teacher.name}</h4>
                    <h4>{teacher.education}</h4>
                    <h4>{teacher.about}</h4>
                    <button onClick={()=>handleDelete(teacher._id)} className="btn btn-info">Delete</button>
                </div>)
            }
        </div>
    );
};

export default TeachersInfo;