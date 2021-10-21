import React from 'react'
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <section id="home">
        <Header />
        <div className="home_title">
            <h1 className="main_heading">Hello</h1>
            <h2 className="sub_heading">Take a Photo</h2>
        </div>
        <div className="home_image">
            <img src="Assets/Images/doraemon.png" alt="Heading Image Doreamon" />
        </div>
        <div className="cta_home">
            <a href="/ps"> <span className="cta_home-text">Take A Photo </span>  
            <span className="cta_home-arrow"> - </span> </a>
        </div>
        <Footer />
    </section>
    )
}

export default HomeScreen
