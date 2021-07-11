const Paginations = ({ className, data, info }) => (
  <span className={className}>
    {data && info && `${data.length} / ${info.count}`}
  </span>
);

export default Paginations;
