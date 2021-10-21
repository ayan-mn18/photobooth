import React from 'react'
import './ShareScreen.css'

const ShareScreen = () => {
    return (
        <section id="photo_type_selection">
        <div className="header">
            <span className="header_text"></span>

            <img src="Assets/Images/logo.png" alt="App Logo" />
        </div>
        <div className="share_image">
            <img src="Assets/Images/camera_picture.jpeg" alt="Image selected to Upload" />
        </div>
        <div className="share_title">
            <h1>Share your photo</h1>
        </div>
        
        <div className="share_icons">
            <a href="#"><img src="Assets/Icons/download_icon.png" alt="" /></a>
            <a href="#"><img src="Assets/Icons/fb_icon.png" alt="" /></a>
            <a href="#"><img src="Assets/Icons/twitter_icon.png" alt="" /></a>
        </div>

        <div className="share_text">
            <span>Once you leave this screen</span>
        </div>

        <div className="custom_link_btn">
            <a href="#">Custom Link</a>
        </div>

    </section>
    )
}

export default ShareScreen
