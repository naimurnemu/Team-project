import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import EventPost from "../../../EventPost/EventPost";

const Event = () => {
    const [posts, setPosts]=useState([])
    const [refresh, setRefresh]=useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/getPost')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
            console.log(data)
            setRefresh(true)
        })
    },[refresh])
    return (
        <div>
            
        <div className="bg-white my-3 position-relative  bg-light ">
            <h4>Your News Feed</h4>
            <EventPost/>

        </div>
        <div className="overflow-scroll " style={{height: '500px'}}>

            {
                posts.map(post=>
                    <Card className="my-3" key={post._id} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        {post.subject}
                      </Card.Text>
                      <Card.Link href="#">Card Links</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>)
            }


        
        </div>
        </div>
    );
};

export default Event;
