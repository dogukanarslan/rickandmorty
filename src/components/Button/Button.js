const Button = ({ className, label, onClick }) => (
  <button onClick={onClick} className={className}>
    {label}
  </button>
);

Button.defaultProps = {
  dark: true,
  label: 'Button',
};

export default Button;
