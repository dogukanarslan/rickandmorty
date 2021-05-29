import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';

const Sidebar = () => {
  const [selectedGroup, setSelectedGroup] = useState(0);

  const {isLightTheme} = useContext(ThemeContext)

  const isSelected = (index) => {
    return selectedGroup === index;
  };

  return (
    <div className={`${isLightTheme ? 'sidebar-light' : 'sidebar-dark'}`}>
      <div className="sidebar">
        <Link onClick={() => setSelectedGroup(0)} to="/characters"
              className={`sidebar-item  ${isSelected(0) ? 'active' : ''}`}>
          Characters
        </Link>
        <Link onClick={() => setSelectedGroup(1)} to="/locations"
              className={`sidebar-item  ${isSelected(1) ? 'active' : ''}`}>
          Locations
        </Link>
        <Link onClick={() => setSelectedGroup(2)} to="/episodes"
              className={`sidebar-item  ${isSelected(2) ? 'active' : ''}`}>
          Episodes
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
