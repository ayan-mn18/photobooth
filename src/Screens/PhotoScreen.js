import React, { useState, useRef, useEffect } from 'react'
import { JEELIZVTO, JEELIZVTOWIDGET } from 'jeelizvtowidget'

import { Route } from 'react-router-dom'
import ArSelection from '../Components/AR Selection/ArSelection';
import ArSelection2 from '../Components/AR Selection/ArSelection2';
import BackgroundRemoval from '../Components/Background Removal/BackgroundRemoval';
import CountdownText from '../Components/CountdownText';
import BackIcon from '../Components/Icons/BackIcon';
import CameraIcon from '../Components/Icons/CameraIcon';
import Countdown from '../Components/Icons/Countdown';
import ForwardArrowIcon from '../Components/Icons/ForwardArrowIcon';
import RetakeIcon from '../Components/Icons/RetakeIcon';
import PhotoTypeSelection from '../Components/Photo Type Selection/PhotoTypeSelection';
import './PhotoScreen.css';
import VideoComponent from '../Components/VideoComponent';

const PhotoScreen = () => {


    const [state, setState] = useState('pts');

    return (
        <section id="photo_type_selection">
            <div className="header">
                <span className="header_text"></span>
                {/* <BackIcon /> */}
                {state === 'ar' && (
                     <BackIcon State_to_pts={()=>{
                         setState('pts')
                     }} />
                )}
                <img src="Assets/Images/logo.png" alt="App Logo" />
                
            </div>
            <div className="upload_image">
                {/* <img src="Assets/Images/camera_picture.jpeg" alt="Image selected to Upload" /> */}
                {/* Video Component */}
                     <VideoComponent />

                {/* <CameraIcon /> */}
                {state === 'ar' && (<CameraIcon State_to_br={()=>{
                         setState('br')
                     }}/>)}
                {/* <RetakeIcon />
                <ForwardArrowIcon /> */}
                {state === 'br' && (<RetakeIcon State_to_ar={()=>{
                         setState('ar')
                     }}/>)}
                {state === 'br' && (<ForwardArrowIcon />)}
                {/* <Countdown /> */}
            </div>

            {state === 'pts' && (<PhotoTypeSelection State_to_ar={()=> setState('ar')} />)}
            {state === 'ar' && (<ArSelection />)}
            {state === 'br' && (<BackgroundRemoval />)}

            
            {/* <ArSelection /> */}
            {/* <ArSelection2 /> */}
            {/* <BackgroundRemoval /> */}
            {/* <CountdownText /> */}
        </section>
    )
}

export default PhotoScreen
