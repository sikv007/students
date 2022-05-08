const Button = (props) => {
  const className = `btn ${props.mode ? 'btn--' + props.mode : ''} ${
    props.small ? 'btn--small' : ''
  }`;

  const clickHandler = () => {
    if (!props.onClick) return;
    props.onClick();
  };

  return (
    <button className={className} onClick={clickHandler} type={props.type}>
      {props.title}
    </button>
  );
};
export default Button;
