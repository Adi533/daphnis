import React, { useState } from 'react';
import './Dropdown.css'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';

const DropdownMenu = ({title}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const dropdownItems = ['Item 1', 'Item 2', 'Item 3']; // Add more items as needed

  return (
    <div className="dropdown" onBlur={closeDropdown}>
      <button className="dropbtn" onClick={toggleDropdown}>
        <ArrowDropDownIcon className='dropicon' />
        <p className='title'>{title}</p>
        <AddIcon className='plus' />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {dropdownItems.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
