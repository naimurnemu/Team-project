import React, { useEffect, useState } from 'react';
import NavigationHeader from '../../Shared/NavigationHeader/NavigationHeader';

const Teachers = () => {

    const [fresh, setFresh] = useState(false)
    const [teachers, setTeachers] = useState([])
    console.log(teachers)

    useEffect(() => {
        fetch('http://localhost:5000/allTeachers')
            .then(res => res.json())
            .then(data => {
                setTeachers(data);
                if (data) {
                    setFresh(true)
                }
            })
    }, [fresh])




    return (
        <div >
            <NavigationHeader />
            {!teachers.length && <div className="spinner-border text-primary mx-auto d-block my-4" role="status">
                <span class="sr-only">Loading...</span>
            </div>}

            <div className="row container ms-md-5 p-3 ">

                {
                    teachers.map(teacher =>
                        <div className="col-md-4 " key={teacher._id}  >

                            <div className="m-1 p-3  d-flex rounded-top shadow-lg p-3 mb-5" style={{ height: "170px", backgroundColor: '#98F7CE' }} >

                                <div>

                                    <img className="rounded-3 mx-auto d-block" style={{ width: '100px', height: '100px' }} variant="top" src={`data:image/*;base64,${teacher.image}`} alt="" />

                                    <div className=" d-flex gap-2">
                                        <small><i className="fab fa-facebook fs-5 text-primary mt-3"></i></small>
                                        <small><i className="fab fa-linkedin fs-5 text-primary mt-3"></i></small>
                                        <small><i className="fab fa-twitter fs-5 text-primary mt-3"></i></small>
                                        <small><i className="fab fa-instagram fs-5 text-primary mt-3"></i></small>
                                    </div>
                                </div>

                                <div className="ms-3 mt-0">
                                    <h6><small><i className="fas fa-user me-2"></i></small>{teacher.name}</h6>
                                    <h6><small><i className="fas fa-medal me-2"></i></small>{teacher.education}</h6>
                                    <h6><small><i className="fas fa-book-reader me-2"></i></small>{teacher.subject}</h6>
                                    <h6><small><i className="fas fa-phone me-2"></i></small>{teacher.phone}</h6>






                                </div>


                            </div>

                        </div>)

                }
            </div>
            {/* {!teachers  && <Spinner className="text-center" animation="border" role="status">
  <span className="visually-hidden ">Loading...</span>
</Spinner>} */}
        </div>
    );
};

export default Teachers;