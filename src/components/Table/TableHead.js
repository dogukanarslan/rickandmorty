const TableHead = ({className, headers}) => (
  <thead className={className}>
  <tr>
    {
      headers.map(header => <th key={header}>{header}</th>)
    }
  </tr>
  </thead>
);

export default TableHead;
