import React from 'react'

const RetakeIcon = (props) => {
    return (
        <div className="retake_icon">
               <a onClick={props.State_to_ar}>
                    <img src="Assets/Icons/Undo Cam Icon.png" alt="Retake the Photo" />
               </a> 
        </div>
    )
}

export default RetakeIcon
