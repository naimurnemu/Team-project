import React from "react";
import { Card } from "react-bootstrap";

const Post = ({ post: postdata }) => {
    const { image, date, post, title, user } = postdata || {};
    console.log(image)
    return (
        <div className="m-3">
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p className="m-0">
                        <i className="fas fa-user-circle" />
                        &nbsp;<small>{user}</small> <br />
                        <small>At {date}</small>
                    </p>

                    <Card.Text>{post}</Card.Text>
                </Card.Body>
                <Card.Img alt={title} variant="bottom"  src={`data:image/*;base64,${image}`} />
            </Card>
        </div>
    );
};

export default Post;
