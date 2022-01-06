import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="row container d-flex align-items-center  m-0 ">
                <div className="col-md-6">
              <div className="bannerBackground">
             
                <h3 className="pt-5">Welcome to you, Our Study family!!!</h3>
              </div>
                </div>
                <div className="col-md-6">
                <img style={{width: "100%"}} src="https://i.ibb.co/M25K6ns/online-1-removebg-preview.png" alt="" />
               
                </div>
            </div>

        </div>
    );
};

export default Banner;