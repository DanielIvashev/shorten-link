import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles.scss'

export const SideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <NavLink className="nav-link" to='/create'>Create</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to='/links'>Links</NavLink>
                </li>
                <li>
                    <a className="nav-link"
                       href='/'
                       onClick={props.logoutHandler}
                    >
                        Logout
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
};

