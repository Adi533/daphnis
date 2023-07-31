import React, { useState } from 'react';
import "./Filter.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const FilterCard = () => {
    const [locationFilter, setLocationFilter] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [productNameFilter, setProductNameFilter] = useState('');

    const handleLocationFilterChange = (event) => {
        setLocationFilter(event.target.value);
    };

    const handleStateFilterChange = (event) => {
        setStateFilter(event.target.value);
    };

    const handleProductNameFilterChange = (event) => {
        setProductNameFilter(event.target.value);
    };

    return (
        <div className="filter-card">
            <div className='titlediv'>
                <h2 className='title1'>Filter</h2>
                <MoreVertIcon className='vert' />
            </div>
            <div className='dropd'>
                <label className='label' htmlFor="location">Channel or Location:</label>
                <select className='select' id="location" value={locationFilter} onChange={handleLocationFilterChange}>
                    <option value="">Select Location</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    {/* Add more locations as needed */}
                </select>
            </div>
            <div className='dropd'>
                <label className='label' htmlFor="state">Master SKU:</label>
                <select className='select' id="state" value={stateFilter} onChange={handleStateFilterChange}>
                    <option value="">Select State</option>
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                    {/* Add more states as needed */}
                </select>
            </div>
            <div className='dropd'>
                <label className='label' htmlFor="productName">Product Name or description:</label>
                <select className=' end select' id="productName" value={productNameFilter} onChange={handleProductNameFilterChange}>
                    <option value="">Select Product Name</option>
                    <option value="Product A">Product A</option>
                    <option value="Product B">Product B</option>
                    {/* Add more product names as needed */}
                </select>
            </div>
            {/* Render filtered data based on selected filters */}
        </div>
    );
};

export default FilterCard;
