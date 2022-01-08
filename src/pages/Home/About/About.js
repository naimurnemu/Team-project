import React from 'react';
import Naime from '../../../Image/naime.png';
import Saleh from '../../../Image/rsz_saleh1.jpg';
import Minhaz from '../../../Image/rsz_minhaz.jpg';

const About = () => {
    return (
        <div className="bg-dark">
            
           <div className="container">
           <h2 className="Text-light"> About </h2>

           <div className="row  mt-5">
               <div className="col-sm-12 col-md-12 col-lg-6 text-light pe-5">
                    <h5 className="text-info mb-5 mt-4 ">Welcome To secondary School.</h5>
                    <h2 className="">Nature's Majesty <br/> Awaits You</h2>
                    <p className="pb-5 pt-3 ">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                    <button className="rounded-pill  bg-warning px-5 py-2 mb-4 ">Learn More</button>
               </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                <img alt="" src="https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg"  className=" w-100 h-100 rounded-3 pb-5"/>
               </div>
           </div>
            

            <div className="row my-5 py-3">
               

                <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5">
                <img alt="" src={Saleh}  className=" img-fluid h-100 rounded-3"/>                
                  <h2 className="text-light">Yea Saleh</h2>
                  <h5 className="text-white">President</h5>
                </div>

                <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5">
                <img alt="" src={Naime}  className=" img-fluid h-100 rounded-3"/>                
                  <h2 className="text-light">Naimur Rahman</h2>
                  <h5 className="text-white">Head Teacher</h5>
                </div>

                <div  className="col-sm-12 col-md-12 col-lg-4 py-5 mt-5 px-3">
                <img alt="" src={Minhaz}  className=" img-fluid h-100  rounded-3 "/>                
                  <h2 className="text-light"> Minhaz Moyna</h2> 
                  <h5 className="text-white">Assistant Head Teacher </h5>
                  
                </div>
                
            </div> 
            <br/>
 
            </div>  
            <br/>
             <br/>   
        </div>
    );
};

export default About;