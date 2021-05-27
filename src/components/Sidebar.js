import {useState} from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  const [selectedGroup, setSelectedGroup] = useState(0);

  const isSelected = (index) => {
    return selectedGroup === index;
  };

  return (
    <div className="list-group">
      <Link onClick={() => setSelectedGroup(0)} to="/characters"
            className={`list-group-item list-group-item-action ${isSelected(0) ? 'active' : ''}`}>
        Characters
      </Link>
      <Link onClick={() => setSelectedGroup(1)} to="/locations"
            className={`list-group-item list-group-item-action ${isSelected(1) ? 'active' : ''}`}>
        Locations
      </Link>
      <Link onClick={() => setSelectedGroup(2)} to="/episodes"
            className={`list-group-item list-group-item-action ${isSelected(2) ? 'active' : ''}`}>
        Episodes
      </Link>
    </div>
  );
};

export default Sidebar;
