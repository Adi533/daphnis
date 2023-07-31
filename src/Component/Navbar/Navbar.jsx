import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className='main'>
            <div className='first-part'>
                <ArrowBackIcon className='arrow-back' />
            </div>
            <div className='second-part'>
                <p className='directory'>Projects→Dashboards→2022 Inventory Dashboard</p>
                <h3 className='destination'>2022 Inventory Dashboard</h3>
            </div>
            <div className='third-part'>
                <RotateLeftIcon className='rotate' />
                <RotateRightIcon className='rotate' />
                <p className='discard'>Discard Changes</p>
                <p className='save'>Save</p>
                <MoreHorizIcon className='rotate more' />
            </div>
        </div>
    )
}

export default Navbar;