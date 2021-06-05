import {SelectInputWrapper, StyledLabel} from './Input.styles';

const SelectInput = ({className, label, filters, onChange}) => (
  <SelectInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <select className={className} onChange={onChange}>
      {
        filters.statuses.map((status) => {
          return (
            <option key={status.value} value={status.value}>
              {status.name}
            </option>
          );
        })
      }
    </select>
  </SelectInputWrapper>
);

export default SelectInput;
