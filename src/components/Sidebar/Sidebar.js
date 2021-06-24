import { useState } from 'react';
import { StyledSidebar, SidebarLink } from './Sidebar.styles';

const Sidebar = () => {
  const [selectedGroup, setSelectedGroup] = useState(0);

  const isSelected = (index) => {
    return selectedGroup === index;
  };

  return (
    <StyledSidebar>
      <SidebarLink
        onClick={() => setSelectedGroup(0)}
        to="/characters"
        selected={isSelected(0) ? 1 : 0}
      >
        Characters
      </SidebarLink>
      <SidebarLink
        onClick={() => setSelectedGroup(1)}
        to="/locations"
        selected={isSelected(1) ? 1 : 0}
      >
        Locations
      </SidebarLink>
      <SidebarLink
        onClick={() => setSelectedGroup(2)}
        to="/episodes"
        selected={isSelected(2) ? 1 : 0}
      >
        Episodes
      </SidebarLink>
    </StyledSidebar>
  );
};

export default Sidebar;
