import React, { useEffect, useState } from 'react';

const TeachersInfo = () => {

    const [teachers, setTeachers] = useState([])
    const [fresh, setFresh] = useState(false)


    useEffect(() => {
        fetch('http://localhost:5000/getTeachersInfo')
            .then(res => res.json())
            .then(data => {
                setTeachers(data)

            })
    }, [fresh])


    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? delete for this Event")
        if(proceed){
            fetch(`http://localhost:5000/deleteTeacher/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
    
                    setFresh(data)
                })
        }
       
    }

    if (!teachers.length) {
        return <div className="spinner-border text-primary mx-auto d-block my-4" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    }



    return (
        <div className="bg-dark container-fluid  ">


            <h2>This is teacher info</h2>
            <div className="row">

                <div className="col-md-8">
                    <div className="row">

                        {
                            teachers.map((teacher, index) =>
                                <div className="col-md-6 d-flex justify-content-center" key={teacher._id}>
                                    <div className="bg-light m-3  p-2 " style={{ height: '370px', width: '250px' }}>
                                        <div className="d-flex justify-content-center">
                                            <img className="rounded-3 mb-3" style={{ width: '150px', height: "150px" }} src={`data:image/*;base64,${teacher.image}`} alt="" />
                                        </div>
                                        <small className="text-success fw-bold">{index + 1}</small>
                                        <h5>{teacher.name}</h5>
                                        <h6>Edu: {teacher.education}</h6>
                                        <h6>Pho: {teacher.phone}</h6>
                                        <h6>About: {teacher.about}</h6>
                                        <button onClick={() => handleDelete(teacher._id)} className="btn btn-info">Delete</button>
                                    </div>
                                </div>)
                        }

                    </div>




                </div>

                <div className="col-md-4">
                    <img className="position-fixed img-fluid  pe-5" src="https://i.ibb.co/B3VXc0Y/587-5872482-school-vector-teacher-illustration-hd-png-download-removebg-preview.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default TeachersInfo;