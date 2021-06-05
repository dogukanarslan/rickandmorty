import { SelectInputWrapper, StyledLabel } from './Input.styles';

const SelectInput = ({ className, label, options, onChange }) => (
  <SelectInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <select className={className} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  </SelectInputWrapper>
);

export default SelectInput;
