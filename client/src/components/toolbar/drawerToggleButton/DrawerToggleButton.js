import React from 'react'
import '../../styles.scss'

export const DrawerToggleButton = props => (
    <button className='toggleButton' onClick={props.click}>
        <div className='toggleButtonLine'/>
        <div className='toggleButtonLine'/>
        <div className='toggleButtonLine'/>
    </button>
);
