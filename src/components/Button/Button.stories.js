import { StyledButton } from './Button.styles';

export const DarkButton = (args) => <StyledButton {...args} />;
DarkButton.args = {
  label: 'Dark Button',
  dark: true,
};

export const LightButton = (args) => <StyledButton {...args} />;
LightButton.args = {
  label: 'Light Button',
  dark: false,
};

export default {
  title: 'components/Button',
  component: StyledButton,
};
