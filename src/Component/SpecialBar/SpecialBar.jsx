import React from 'react';
import "./SpecialBar.css";
import TabIcon from '@mui/icons-material/Tab';
const SpecialBar = ({ title, Icon }) => {
    return (<>
    <div className='specialbars'>
        <div className='SpecialBar-parts one'>
            <TabIcon className='Specialtab' />
            <p className='SpecialBar-content'>{title}</p>
        </div>
        <div className='SpecialBar-parts two'>

            <TabIcon className='Specialtab' />
            <p className='SpecialBar-content'>{title}</p>
        </div></div></>


        )
}

        export default SpecialBar;