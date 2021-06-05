import styled from 'styled-components';
import { black } from '../../GlobalStyles';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

export const SelectInputWrapper = styled.div`
  position: relative;
  width: 350px;
  margin-top: 10px;

  &::after {
    font-size: 24px;
    color: ${black};
    content: '▾';
    position: absolute;
    right: 10px;
    top: 50%;
  }
`;

export const TextInputWrapper = styled.div`
  width: 350px;
`;

export const StyledSelectInput = styled(SelectInput)`
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 100%;
  padding: 8px;
  border: none;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled(TextInput)`
  width: 100%;
  padding: 8px;
`;
