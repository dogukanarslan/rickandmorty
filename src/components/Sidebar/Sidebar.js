import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledSidebar, SidebarLink } from './Sidebar.styles';

const Sidebar = () => {
  const [selectedGroup, setSelectedGroup] = useState(0);

  const { isLightTheme } = useContext(ThemeContext);

  const isSelected = (index) => {
    return selectedGroup === index;
  };

  return (
    <StyledSidebar dark={isLightTheme ? 1 : 0}>
      <SidebarLink
        onClick={() => setSelectedGroup(0)}
        to="/characters"
        dark={isLightTheme ? 1 : 0}
        selected={isSelected(0) ? 1 : 0}
      >
        Characters
      </SidebarLink>
      <SidebarLink
        onClick={() => setSelectedGroup(1)}
        to="/locations"
        dark={isLightTheme ? 1 : 0}
        selected={isSelected(1) ? 1 : 0}
      >
        Locations
      </SidebarLink>
      <SidebarLink
        onClick={() => setSelectedGroup(2)}
        to="/episodes"
        dark={isLightTheme ? 1 : 0}
        selected={isSelected(2) ? 1 : 0}
      >
        Episodes
      </SidebarLink>
    </StyledSidebar>
  );
};

export default Sidebar;
