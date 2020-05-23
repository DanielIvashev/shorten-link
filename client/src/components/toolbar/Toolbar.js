import {NavLink} from "react-router-dom";
import React from "react";
import {DrawerToggleButton} from "./drawerToggleButton/DrawerToggleButton";
import '../styles.scss'

export const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbarNavigation'>
            <div className='toolbarNavigationItems'>
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

            </div>
            <div className='toolbarToggleButton'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
)