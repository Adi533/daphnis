import React from 'react';
import "./Bar.css";
import TabIcon from '@mui/icons-material/Tab';
const Bar = ({ title, Icon }) => {
    return (
        <div className='Bar-parts'>
            <TabIcon className='tab' />
            <p className='Bar-content'>{title}</p>

        </div>
    )
}

export default Bar;