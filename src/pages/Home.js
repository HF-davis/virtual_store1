import React from "react";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";
import Category from "../components/Category";
//import Modal from "../components/Modal";
//import SubCategory from "../components/SubCategory";
const Home=()=>{

    return(
        <div>
            <Hero/>
            <HeadlineCards/>
            <Food/>
            <Category/>
           {/**
            <Modal/>
            <SubCategory/>
            */} 
        </div>
    );

}

export default Home;