import React from 'react';

const Footer = () => {
    return (
        <div>
           <div className='bg-light my-5 py-5 text-center' style={{fontFamily: "'Poppins', sans-serif" }}>
           <div className='container'>
           <div className='row align-items-center'>
            <div className='col-md-3 pe-5 text-start' >
            <img style={{width: '150px'}} src="" alt=""/>
            <div style={{fontFamily: "'Poppins', sans-serif", paddingTop: '2px'  }}>
                <p>We hope you like these collections of MotorCycle Quotes</p>
                <br/>
                <button className='border-0 fw-bold ' style={{color: 'hotpink'}}> Read more <i className="fas fa-arrow-right px-2 "></i> </button>
            </div>
            <div className="d-flex gap-3 mt-2" style={{color: 'hotpink'}}>
             <a target="_blank" href="https://www.facebook.com"><h3><i className="fab fa-facebook"></i></h3></a>
                <a target="_blank" href="https://www.twitter.com"><h3><i className="fab fa-twitter"></i></h3></a>
                <a target="_blank" href="https://www.linkedin.com"><h3><i className="fab fa-linkedin-in"></i></h3></a>
                <a target="_blank" href="https://www.instagram.com"><h3><i className="fab fa-instagram"></i></h3></a>
            </div>
            </div>
            <div className='col-md-3 fw-bold '>
              <h3 className="m-0">Company</h3>
              <div className="mt-5">
                <p className="m-0">About Us</p>
                <p className="m-0">Service</p>
                <p className="m-0">Case Studies</p>
                <p className="m-0">Blog</p>
                <p className="m-0">Contact</p>
              </div>

            </div>
            <div className='col-md-3 text-center'>
            <h3 className="m-0">Contact </h3>
            <div className='d-flex align-items-center gap-3'>
           <h4><i className="far fa-envelope pt-3 text-primary" ></i></h4>
           <p>minhazfr8@gmail.com</p>
           </div>
           <div className='d-flex align-items-center gap-3'>
           <h4><i className="fas fa-phone text-primary" ></i></h4>
           <p>+(642) 342 762 44</p>
           </div>
           <div className='d-flex align-items-center gap-3'>
           <h4><i className="fas fa-map-marker-alt text-primary"></i></h4>
           <p>442 Belle Terre St Floor 7, <br/> San Francisco, AV 4206</p>
           </div>
            </div>
           
           
            </div>
           </div>
        </div>
        </div>
    );
};

export default Footer;