// This is function react component, (Two types of components are there, object and function)

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// props are read only (As per the documentation)
export default function Navbar(props) {

    let currentMode = props.mode.currentMode;

    let modeClasses;

    if(currentMode) {
        modeClasses = {
            navBarClass : "navbar fixed-top navbar-expand-lg navbar-light bg-light",
            darkModeIcon : "bi bi-moon-stars-fill",
            outLine : "btn btn-dark"
        }
    }
    else {
        modeClasses = {
            navBarClass : "navbar fixed-top navbar-expand-lg navbar-dark bg-dark",
            darkModeIcon : "bi bi-sun",
            outLine : "btn btn-light"
        }
    }

    const handleModeToggle = (e) => {
        e.preventDefault();
        props.mode.toggleMode(!props.mode.currentMode);
    }

    return (
        <nav className={modeClasses.navBarClass}>
            <div className="container-fluid">
            <Link className="navbar-brand" to ="/">{props.title} </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to ="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to ="/about" >About </Link>
                </li>
                </ul>
                <form className="d-flex">
                    <button className={modeClasses.outLine} onClick={handleModeToggle}>
                        <i className={modeClasses.darkModeIcon}></i>
                    </button>
                </form>
            </div>
            </div>
        </nav>
    )
}

// Fixing the type for various Props, for now only one property is there i.e. title
Navbar.propTypes = {title : PropTypes.string}; // use PropTypes.string.required for make it mandatory

// Default Prop types, when no property passed in component, it will select this one.
Navbar.defaultProps = {title : "Set Navbar Title"};