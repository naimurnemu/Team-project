import React from "react";

const Teacher = ({ teacher }) => {
    const { image, name, education, subject, phone } = teacher || {};
    return (
        <div className="col-md-4 " key={teacher._id}>
            <div
                className="m-1 p-3  d-flex rounded-top shadow-lg p-3 mb-5"
                style={{
                    height: "170px",
                    backgroundColor: "#98F7CE",
                }}
            >
                <div>
                    <img
                        className="rounded-3 mx-auto d-block"
                        style={{ width: "100px", height: "100px" }}
                        variant="top"
                        src={`data:image/*;base64,${image}`}
                        alt=""
                    />

                    <div className=" d-flex gap-2">
                        <small>
                            <i className="fab fa-facebook fs-5 text-primary mt-3"></i>
                        </small>
                        <small>
                            <i className="fab fa-linkedin fs-5 text-primary mt-3"></i>
                        </small>
                        <small>
                            <i className="fab fa-twitter fs-5 text-primary mt-3"></i>
                        </small>
                        <small>
                            <i className="fab fa-instagram fs-5 text-primary mt-3"></i>
                        </small>
                    </div>
                </div>

                <div className="ms-3 mt-0">
                    <h6>
                        <small>
                            <i className="fas fa-user me-2"></i>
                        </small>
                        {name}
                    </h6>
                    <h6>
                        <small>
                            <i className="fas fa-medal me-2"></i>
                        </small>
                        {education}
                    </h6>
                    <h6>
                        <small>
                            <i className="fas fa-book-reader me-2"></i>
                        </small>
                        {subject}
                    </h6>
                    <h6>
                        <small>
                            <i className="fas fa-phone me-2"></i>
                        </small>
                        {phone}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Teacher;
