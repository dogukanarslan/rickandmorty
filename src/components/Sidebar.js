import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="list-group">
      <Link to="/characters" className="list-group-item list-group-item-action">
        Characters
      </Link>
      <Link to="/locations" className="list-group-item list-group-item-action">
        Locations
      </Link>
      <Link to="/episodes" className="list-group-item list-group-item-action">
        Episodes
      </Link>
    </div>
  );
};

export default Sidebar;
