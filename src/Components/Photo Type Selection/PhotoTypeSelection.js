import React from 'react'

const PhotoTypeSelection = (props) => {
    return (
        <div className="cta_pts">
            <div className="cta_icons">
                
                    <div className="cta_icon">
                        <div className="cta_image">
                            <img src="Assets/Icons/selfie.png" alt="Take a Selfie Icon" />
                        </div> 
                        <a onClick={props.State_to_ar}>Selfie</a>
                    </div>
              
                    <div className="cta_icon">
                        <div className="cta_image">
                            <img src="Assets/Icons/boomerang.png" alt="Make a Boomerang Icon" />
                        </div> 
                        <a>Boomerang</a>
                    </div>
                
                    <div className="cta_icon">
                        <div className="cta_image">
                            <img src="Assets/Icons/gif.png" alt="Make a GIF Icon" />
                        </div> 
                        <a href="#">GIF</a>
                    </div>
                
            </div>
            <div className="cta_upload">
                <a href="#">UPLOAD</a>
            </div>
        </div>
    )
}

export default PhotoTypeSelection
