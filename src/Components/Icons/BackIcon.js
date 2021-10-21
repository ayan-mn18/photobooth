import React from 'react'

const BackIcon = (props) => {
    return (
        <a onClick={props.State_to_pts}>
            <img className="back_btn" src="Assets/Icons/Back btn.png" alt="Go Back" />
        </a>
    )
}

export default BackIcon
