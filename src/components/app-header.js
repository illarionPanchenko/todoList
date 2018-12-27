import React from "react";
import './app-header.css'

const AppHeader = (props) => {
    return (
        <div className='app-header d-flex'>
            <h1>My todo list</h1>
            <h2> {props.done} done, {props.undone} to do</h2>
        </div>
    )
};


export default AppHeader;