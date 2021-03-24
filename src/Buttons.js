import React from 'react'
import Button from '@material-ui/core/Button';
import './App.css';
function Buttons() {
    return (
        <div classname="navbarBottom">
            <button className="buttoninline">All</button>
            {/* <Button className="buttoninline" variant="outlined">All</Button> */}
            <button className="buttoninline">Science-fiction</button>
            <button className="buttoninline">Web Series</button>
            <button className="buttoninline">Python</button>
            <button className="buttoninline">React</button>
            <button className="buttoninline">Gaana</button>
            <button className="buttoninline">Live</button>
        </div>
    )
}

export default Buttons
