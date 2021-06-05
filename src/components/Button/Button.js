const Button = ({ className, label, onClick }) => (
  <button onClick={onClick} className={className}>
    {label}
  </button>
);

export default Button;
