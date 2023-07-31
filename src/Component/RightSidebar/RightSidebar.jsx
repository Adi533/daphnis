import React from 'react';
import "./RightSidebar.css";
import TabIcon from '@mui/icons-material/Tab';
import Bar from '../Bar/Bar';
import SpecialBar from '../SpecialBar/SpecialBar';
const RightSidebar = () => {
    return(
        <div className='bar-main'>
            <SpecialBar title="Component" />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
            <Bar title="Component" Icon={TabIcon} />
        </div>
    )
}

export default RightSidebar;