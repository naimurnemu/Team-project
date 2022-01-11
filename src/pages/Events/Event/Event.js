import React from "react";
import { Card } from "react-bootstrap";

const Event = ({ event }) => {
    const { date, description, image, location, title } = event || {};
    return (
        <div>
            <Card className="my-3">
                <Card.Img alt={title} variant="top"  src={`data:image/*;base64,${image}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-evenly">
                    <p>
                        <i className="fas fa-clock" /> &nbsp; {date}
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt" /> &nbsp; {location}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Event;
