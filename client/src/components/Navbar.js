import React, {useContext, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {Toolbar} from "./toolbar/Toolbar";
import {Backdrop} from "./toolbar/backdrop/BackDrop";
import {SideDrawer} from "./toolbar/sideDrawer/SideDrawer";
import './styles.scss'
export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const [sideDrawer, setSideDrawer] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawer(!sideDrawer)
    };

    const backdropClickHandler = () => {
        setSideDrawer(false)
    };

    const closeAfterClick = () => {
        setSideDrawer(false)
    };

    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout();
        history.push('/')
    };

    let backdrop;
    if (sideDrawer) {
        backdrop = <Backdrop click={backdropClickHandler.bind(this)}/>
            }
            return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-between">
                <p className="navbar-brand pb-0"
                   onClick={() => {
                       history.push('/create')
                   }}
                   style={{cursor: 'pointer'}}
                >
                    <svg className="bi bi-link" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.354 5.5H4a3 3 0 000 6h3a3 3 0 002.83-4H9c-.086 0-.17.01-.25.031A2 2 0 017 10.5H4a2 2 0 110-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path
                            d="M6.764 6.5H7c.364 0 .706.097 1 .268A1.99 1.99 0 019 6.5h.236A3.004 3.004 0 008 5.67a3 3 0 00-1.236.83z"/>
                        <path
                            d="M9 5.5a3 3 0 00-2.83 4h1.098A2 2 0 019 6.5h3a2 2 0 110 4h-1.535a4.02 4.02 0 01-.82 1H12a3 3 0 100-6H9z"/>
                        <path
                            d="M8 11.33a3.01 3.01 0 001.236-.83H9a1.99 1.99 0 01-1-.268 1.99 1.99 0 01-1 .268h-.236c.332.371.756.66 1.236.83z"/>
                    </svg>
                </p>
                <div className="justify-content-start" id="navbarNav">
                    <Toolbar logoutHandler={logoutHandler.bind(this)}
                             drawerClickHandler={drawerToggleClickHandler.bind(this)}/>
                    <SideDrawer show={sideDrawer} closeAfterClick={closeAfterClick.bind(this)}/>

                    {backdrop}
                </div>
            </nav>

   )
};