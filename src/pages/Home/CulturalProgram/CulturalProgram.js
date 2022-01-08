import React from 'react';
import Football from '../../../Image/football-Playing-Program.jpg';
import Cricket from '../../../Image/cricket-culture-program.jpg';
import Annual from '../../../Image/annual.jpg';
import Music from '../../../Image/music-program.jpg';
import Picnic from '../../../Image/picnic.jpg';


const CulturalProgram = () => {
    return (
        <div className="bg-light">
            
        <div className="container">

         <div className="row my-2 py-3">
            

             <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5 my-2">
             <img alt="" src={Annual} className=" w-100 h-100 rounded-3"/>                
               <h4 className="text-primary">Annual Cultural Program </h4>               
             </div>

             <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5 my-2">
             <img alt="" src={Football}  className=" w-100 h-100 rounded-3"/>                
               <h4 className="text-primary">Football Match Program </h4>               
             </div>

             <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5 my-2">
             <img alt="" src={Cricket}  className=" w-100 h-100 rounded-3"/>                
               <h4 className="text-primary">Cricket Match Program </h4>               
             </div>

             <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5 my-2">
             <img alt="" src={Picnic} className=" w-100 h-100 rounded-3"/>                
               <h4 className="text-primary">Annual Picnic Program </h4>               
             </div>

             <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5 my-2">
             <img alt="" src={Music}  className=" w-100 h-100 rounded-3"/>                
               <h4 className="text-primary">Annual Music Program </h4>               
             </div>

         </div> 
         <br/>

         </div>  
     </div>
    );
};

export default CulturalProgram;