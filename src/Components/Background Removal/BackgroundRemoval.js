import React from 'react'
import './BackgroundRemoval.css'

const BackgroundRemoval = () => {
    return (
        <div className="assets_section">
            <div className="admin_assets">
                <h5>Admin Backgrounds</h5>
                <div className="assets_scroll">  
                    <img src="Assets/Images/background-2.png" alt="" />
                    <img src="Assets/Images/backround-1.png" alt="" />
                    <img src="Assets/Images/background-2.png" alt="" />
                    <img src="Assets/Images/background-3.png" alt="" />
                </div>
            </div>    
            <div className="user-assets">
                <h5>Users Uploaded Backgrounds</h5>
                <div className="assets_scroll">
                    <img src="Assets/Images/background-3.png" alt="" />
                    <img src="Assets/Images/background-2.png" alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default BackgroundRemoval
