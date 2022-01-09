import React from "react";
import Football from "../../../Image/football-Playing-Program.jpg";
import Cricket from "../../../Image/cricket-culture-program.jpg";
import Annual from "../../../Image/annual.jpg";
import Music from "../../../Image/music-program.jpg";
import Picnic from "../../../Image/picnic.jpg";
import { Button, Card } from "react-bootstrap";
import "./CulturalProgram.css";
import { Link } from "react-router-dom";

const CulturalProgram = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <h1 className="text-primary fw-bold mt-4">Cultural Events</h1>
                <div className="row border-top align-items-center my-2 py-3">
                    <div className="col-12 col-md-6">
                        <Card className="bg-dark text-light m-3">
                            <Card.Img
                                src={Football}
                                alt="Card image"
                                className="img-fluid rounded-3"
                            />
                            <Card.ImgOverlay>
                                <div className="text-overlay">
                                    <Card.Title>
                                        Football Match Program
                                    </Card.Title>
                                    <Card.Text>
                                        The academy's intensive training
                                        programme has been designed to enhance
                                        every individuals game. Our training
                                        sessions and matches are lead by
                                        teacher.
                                    </Card.Text>
                                    <Card.Text>Three times Year</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-light m-3">
                            <Card.Img
                                src={Cricket}
                                alt="Card image"
                                className="img-fluid rounded-3"
                            />
                            <Card.ImgOverlay className="text-overlay">
                                <div className="text-overlay">
                                    <Card.Title>
                                        Cricket Match Program
                                    </Card.Title>
                                    <Card.Text>
                                        Cricket Program At The Sports School ·
                                        The amount of training is assigned as
                                        per the skills and fitness level of the
                                        student.
                                    </Card.Text>
                                    <Card.Text>Three times Year</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <Link to="/events">
                            <Button variant="dark">View All Events</Button>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="bg-dark text-light m-3">
                            <Card.Img
                                src={Annual}
                                alt="Card image"
                                className="img-fluid rounded-3"
                            />
                            <Card.ImgOverlay className="text-overlay">
                                <div className="text-overlay">
                                    <Card.Title>
                                        Annual Cultural Program
                                    </Card.Title>
                                    <Card.Text>
                                        The Annual Cultural Program gives an
                                        opportunity for students to present
                                        their talents in music, dance and drama
                                    </Card.Text>
                                    <Card.Text>One times Year</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-dark text-light m-3">
                            <Card.Img
                                src={Picnic}
                                alt="Card image"
                                className="img-fluid rounded-3"
                            />
                            <Card.ImgOverlay className="text-overlay">
                                <div className="text-overlay">
                                    <Card.Title>
                                        Annual Picnic Program
                                    </Card.Title>
                                    <Card.Text>
                                        Picnic is one of the best ways to reach
                                        close to nature, relief stress and
                                        anxiety ... College organizes annual
                                        picnic for the students, teachers &
                                        staffs.
                                    </Card.Text>
                                    <Card.Text>One times Year</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-light m-3">
                            <Card.Img
                                src={Music}
                                alt="Card image"
                                className="img-fluid rounded-3"
                            />
                            <Card.ImgOverlay className="text-overlay">
                                <div className="text-overlay">
                                    <Card.Title>
                                        {" "}
                                        Annual Music Program
                                    </Card.Title>
                                    <Card.Text>
                                        Shankar Mahadevan Academy's annual
                                        global meet, Sangam, gives children an
                                        opportunity to perform in the presence
                                        of renowned musicians,
                                    </Card.Text>
                                    <Card.Text>One times Year</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default CulturalProgram;
