import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EventPost = () => {

     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
         <input className="w-50" onClick={handleShow} type="text" placeholder="What is your mind?" />

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
       
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <textarea style={{height: '200px', margin: '20px'}} type="text" placeholder="what is your mind?" />
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    );
};

export default EventPost;