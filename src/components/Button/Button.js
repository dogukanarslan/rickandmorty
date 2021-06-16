const Button = ({ className, label, onClick, ...props }) => (
  <button onClick={onClick} className={className} {...props}>
    {label}
  </button>
);

Button.defaultProps = {
  dark: true,
  label: 'Button',
};

export default Button;
