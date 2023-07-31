import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainPart from '../MainPart/MainPart';
import RightSidebar from '../RightSidebar/RightSidebar';
import "./MainComponent.css";

const MainComponent = () => {
    return(
        <div className='component'>
            <LeftSidebar />
            <MainPart />
            <RightSidebar />
        </div>
    )
}

export default MainComponent;