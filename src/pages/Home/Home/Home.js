import React from "react";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";
import Banner from "../Banner/Banner";
import Controls from "../Controls/Controls";
import Footer from "../Footer/Footer";


const Home = () => {

   
    
    return (
        <div>
            <NavigationHeader />
            <Banner></Banner>
            
            <Controls></Controls>
            <Footer/>
            
        </div>
    );
};

export default Home;
