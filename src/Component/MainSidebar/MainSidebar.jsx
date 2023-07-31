import React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HubIcon from '@mui/icons-material/Hub';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import "./MainSidebar.css";

const MainSidebar = () => {
    return(
        <div className='Main-part'>
            <div className='First-part'>
                <DiamondIcon className='logo' fontSize='large' />
            </div>
            <div className='Second-part'>
                <HomeIcon className='home icon' fontSize='medium' />
                <CalendarMonthIcon className='icon'/>
                <WidgetsIcon className='icon' />
                <HubIcon className='icon' />
                <ShoppingCartIcon className='icon' />
            </div>
            <hr></hr>
            <div className='Third-part'>
                <EmailIcon className='icon' />
                <FullscreenIcon className='icon' />
            </div>
            <div className='Fourth-part'>
                <AccountCircleIcon fontSize='large' className='icon' />
                <LogoutIcon className='icon' />
            </div>
        </div>
    )
}

export default MainSidebar;