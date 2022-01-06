import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import NavigationHeader from '../../Shared/NavigationHeader/NavigationHeader';

const Teachers = () => {

    const [fresh,setFresh]=useState(false)
    const [teachers, setTeachers]=useState([])
    console.log(teachers)

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
            <NavigationHeader />
            
         <div className="row container ms-md-5 p-3 ">

            {
                teachers.map(teacher=> 
                <div className="col-md-6 " key={teacher._id}  >

                    <Card className="m-2 p-3" >
                    <Card.Img className="rounded-circle" style={{width: '200px', height: '200px'}} variant="top" src={`data:image/*;base64,${teacher.image}`} />
                    <Card.Body>
                      <h3>{teacher.name}</h3>
                      <h4>{teacher.education}</h4>
                      <h5>{teacher.subject}</h5>
                      <h5>{teacher.phone}</h5>
                      <p className="text-warning">Update coming soon</p>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                    
                  </Card>
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