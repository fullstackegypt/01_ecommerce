import React from'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
import Footer from '../Footer/Footer'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <NavigateButtons></NavigateButtons>
            <Footer></Footer>
        </div>
    );
}

export default Main;