import { StyledButton } from './Button.styles';

export const LightButton = () => <StyledButton label="Button" />;

export const DarkButton = () => <StyledButton dark label="Button" />;

export default {
  title: 'components/Button',
  component: StyledButton,
};
