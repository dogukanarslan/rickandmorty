const Button = ({ className, label, onClick, ...props }) => (
  <button onClick={onClick} className={className} {...props}>
    {label}
  </button>
);

Button.defaultProps = {
  label: 'Button',
};

export default Button;
