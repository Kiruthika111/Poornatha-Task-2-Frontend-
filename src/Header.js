import React from 'react'
import './App.css';
import Logo from './YouTube-Logo.jpg'
import User from './user-icon.png'
//import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className="Navbar">
            
            <div className="leftSide" >  
            <a className="cursor-func"><MenuIcon />
            
            </a>
            <a className="cursor-func"><img src={Logo} height={56} width={150} />  </a>
            </div>
            <div className="middle">
                <input type="text" placeholder="Search" />
                <button > <SearchIcon /></button>  
                <a className="icon margin-left"><MicIcon /></a>
            </div>


            <div className="rightSide">
                <div className="icon margin-right">
                    <a className="icon margin-right"><VideoIcon /></a>
                    
                    <a className="icon margin-right"><NotificationsIcon /></a>
                    
                    <a><AppsIcon /></a>
                    
                    </div>
                    <div className="largeIcon pull-right">
                        {/* <IconButton iconStyle="largeIcon">  */}
                        <img src={User} height={35} width={35} borderRadius={400/2} className="cursor-func"/>
                        {/* </IconButton> */}
                    
                    
                </div>  
            </div>
        </div>
    )
}

export default Header
