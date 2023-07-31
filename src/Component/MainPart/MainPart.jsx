import React from 'react';
import "./MainPart.css";
import FilterCard from '../Filter/Filter';
const MainPart = () => {
    return(
        <div className='Mainc'>
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
        </div>
    )
}

export default MainPart;