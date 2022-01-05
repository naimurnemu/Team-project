import React, { useEffect, useState } from 'react';

const GetTeachers = () => {
    const [fresh,setFresh]=useState(false)
    const [teachers, setTeachers]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allTeachers')
        .then(res=>res.json())
        .then(data=>{
            setTeachers(data);
            if(data){
                setFresh(true)
            }
        })
      },[fresh])

    
    return (
        <div>
            <h2>chilll mamma ami asi toumi kono chinta koro na to </h2>

            {
                teachers.map(info=>
                    <div key={info._id}>
                        <h2>{info.name}</h2>
                        <h2>{info.education}</h2>
                        <h3>{info.subject}</h3>
                        <h3>{info.phone}</h3>
                        <h3>{info.about}</h3>
                        <img src={`data:image/*;base64,${info.image}`} alt="" />
                    </div>
                )
            }

      
        </div>
    );
};

export default GetTeachers;