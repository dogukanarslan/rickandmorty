import {StyledLabel} from './Input.styles';

const SelectInput = ({className, label, filters, onChange}) => (
  <>
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
  </>
);

export default SelectInput;
