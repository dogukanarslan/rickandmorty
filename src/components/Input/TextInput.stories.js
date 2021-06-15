import { StyledTextInput } from './Input.styles';

export const TextInput = (args) => <StyledTextInput {...args} />;
TextInput.args = {
  label: 'Text Input',
  placeholder: 'Input',
};

export default {
  title: 'components/TextInput',
};
