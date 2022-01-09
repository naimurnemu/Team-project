import React from "react";
import Naim from "../../../Image/naime.png";
import Saleh from "../../../Image/rsz_saleh1.jpg";
import Minhaz from "../../../Image/rsz_minhaz.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="my-4">
            {/* <h2 className="text-info text-center bg-dark py-2">
                KNOW ABOUT US
            </h2> */}

            <div className="container-fluid">
                <h2 className="text-danger">ABOUT</h2>
                <div className="text-secondary container border-secondary border-start border-2 px-3">
                    <p className="fs-5" style={{ textAlign: "justify" }}>
                        We are committed to knowing each student personally,
                        strengthening them socially and emotionally, and helping
                        them become passionate young people who are connected to
                        their faith, their school, and one another for life.{" "}
                        <br />
                        Divine Child High School students will grow in many
                        waysthroughout their four years. A major part of this
                        growth process is due to the opportunity to discover
                        one’s values, skills and strengths in a co-ed setting,
                        where all students can learn from one another.
                        Collaborating together allows each gender to better
                        understand and work with each other. It helps break down
                        gender stereotypes and creates unity among our students.{" "}
                        <br /> Our family atmosphere allows young men and women
                        to learn together, pray together, celebrate together,
                        compete together, and serve together. They can
                        experience the joys of life and offer support to each
                        other during their high school years and beyond. It’s
                        why our students and graduates say:
                        <br />
                    </p>
                    <p className="text-center fs-5 text-dark">
                        "Once A Falcon, Always A Falcon"
                    </p>
                </div>
            </div>

            <div className="container my-5 py-3">
                <h3 className="Text-primary">Meet our Leadership Team</h3>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 text-center p-4">
                        <img
                            alt=""
                            src={Saleh}
                            className=" img-fluid rounded-circle border-3 shadow-lg mx-3"
                        />
                        <h4 className="text-dark mt-2">Yea Saleh</h4>
                        <h6 className="text-secondary">President</h6>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 text-center p-4">
                        <img
                            alt=""
                            src={Naim}
                            className=" img-fluid rounded-circle border-3 shadow-lg mx-3"
                        />
                        <h4 className="text-dark mt-2">Naimur Rahman</h4>
                        <h6 className="text-secondary">Head Teacher</h6>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 text-center p-4">
                        <img
                            alt=""
                            src={Minhaz}
                            className=" img-fluid rounded-circle border-3 shadow-lg mx-3"
                        />
                        <h4 className="text-dark mt-2"> Minhaz Moyna</h4>
                        <h6 className="text-secondary">
                            Assistant Head Teacher
                        </h6>
                    </div>
                </div>
            </div>
            <div className="text-center mb-5">
                <Link to="teachers">
                    <Button variant="info">Know All Teachers</Button>
                </Link>
            </div>
            <br />
        </div>
    );
};

export default About;
