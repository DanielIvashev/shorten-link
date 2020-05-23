import React from "react";
import '../../styles.scss'

export const Backdrop = props => {
    return (
        <div className='backdrop' onClick={props.click}/>
    )
};
