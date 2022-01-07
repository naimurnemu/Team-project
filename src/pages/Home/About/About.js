import React from 'react';
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
                <img alt="" src="https://i.ibb.co/BnLDsD9/147263543-450862592856535-3621934526602806735-n.jpg"  className=" img-fluid h-100 rounded-3"/>                
                  <h2 className="text-light">Yea Saleh</h2>
                  <h5 className="text-white">President</h5>
                </div>

                <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5">
                <img alt="" src="https://aboutnaimur.netlify.app/static/media/protfolio_banner.392addb6.png"  className=" img-fluid h-100 rounded-3"/>                
                  <h2 className="text-light">Naimur Rahman</h2>
                  <h5 className="text-white">Head Teacher</h5>
                </div>

                <div  className="col-sm-12 col-md-12 col-lg-4 mt-5 px-3">
                <img alt="" src="https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/223473066_956020461916476_2387706377006247570_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFhqiV_NfX-IMVrOEuBFjcYwAxe4yqjReHADF7jKqNF4Tt2X8GISUUa7I-drsMwC-M8lhoFszGRdrP6pa6gWG6r&_nc_ohc=Xz1EnCu3gg0AX9J0ccz&_nc_oc=AQnl7TWrmoVTxkfvp6pJdPV6WT16WYDmsEMkeVc_RWFHyTIPPZEY--Fzo9ldA1SnGYQ&_nc_ht=scontent.fdac134-1.fna&oh=00_AT_TORYqnHe2S_Ct4NUDOokL9Al72mg8pPHToRefmAZxrw&oe=61DD363A"  className=" img-fluid h-100  rounded-3 "/>                
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