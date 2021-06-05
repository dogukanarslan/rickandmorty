import {StyledLabel, TextInputWrapper} from './Input.styles';

const TextInput = ({className, onChange, label, placeholder}) => (
  <TextInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  </TextInputWrapper>
);

export default TextInput;
