import React,{useState} from 'react';
import "./LeftSidebar.css";
import DropdownMenu from '../Dropdown/Dropdown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LeftSidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        
    };




    return (
        <div className="leftsidebar" >
        
        <ArrowBackIcon onClick={toggleDropdown} fontSize='small' className="projecticon projectname"  />
        
      <div>
                <div className='project'>
                    <h1 className='projectname'>Project Name</h1>
                    
                </div>

                <input
                    className="search-input"
                    type="text"
                    placeholder="Search Products..."
                />
            </div>
            <hr className='ruler'></hr>
            <DropdownMenu title="Flows" />
            <hr className='ruler'></hr>
            <DropdownMenu title="Dashboards" />
            <hr className='ruler'></hr>
            <DropdownMenu title="Datasets" />
            <hr className='ruler'></hr>
            <DropdownMenu title="Connectors" />

        </div>
    )
}

export default LeftSidebar;