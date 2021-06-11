import { StyledSelectInput } from './Input.styles';

export const SelectInput = (args) => <StyledSelectInput {...args} />;
SelectInput.args = {
  label: 'Select Input',
  placeholder: 'Input',
  options: [
    {
      value: 'Option 1',
      name: 'Option 1',
    },
    {
      value: 'Option 2',
      name: 'Option 2',
    },
  ],
};

export default {
  title: 'components/SelectInput',
  component: StyledSelectInput,
};
