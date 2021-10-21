import React from 'react'

const CameraIcon = (props) => {
    return (
        <div className="camera_icon" onClick={props.State_to_br}>
                <img src="Assets/Icons/camera_btn.png" alt="Take photo" />
        </div>
    )
}

export default CameraIcon
