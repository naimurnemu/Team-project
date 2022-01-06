import React, { useState } from 'react';
import {  Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EventPost = () => {

  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{

    fetch('http://localhost:5000/createPost', {
      method: "POST",
      headers: {
          "content-type":"application/json"
      },
      body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data=>{
      if(data){
        reset()
        handleClose()

      }
  })
  }

     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
         <input className="w-100" onClick={handleShow} type="text" placeholder="What is on your mind?" />

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
       
       <form onSubmit={handleSubmit(onSubmit)}>
        <textarea style={{height: '200px', margin: '20px', width: '90%'}} type="text" placeholder="what is on your mind?" {...register("subject")} required    />
        <input className="w-75 my-2 bg-info ms-5 " type="submit" value="Post" />
        </form>
        
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        
      </Modal>

        </div>
    );
};

export default EventPost;