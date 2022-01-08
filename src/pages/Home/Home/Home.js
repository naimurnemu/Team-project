import React from "react";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Controls from "../Controls/Controls";
import CulturalProgram from "../CulturalProgram/CulturalProgram";
import Footer from "../Footer/Footer";


const Home = () => {

   
    
    return (
        <div>
            <NavigationHeader />
            <Banner></Banner>
            <Controls></Controls>
            <CulturalProgram></CulturalProgram>
            <About></About>
            <Contact></Contact>
            <Footer/>
            
        </div>
    );
};

export default Home;
