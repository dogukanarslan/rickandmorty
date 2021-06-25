import { StyledButton } from './Button.styles';
import { darkTheme, lightTheme } from '../Themes';

export const DarkButton = (args) => <StyledButton {...args} />;
DarkButton.args = {
  label: 'Dark Button',
  theme: darkTheme,
};

export const LightButton = (args) => <StyledButton {...args} />;
LightButton.args = {
  label: 'Light Button',
  theme: lightTheme,
};

export default {
  title: 'components/Button',
};
