const Button = (props) => {
  const clickHandler = () => {
    if (!props.onClick) return;
    props.onClick();
  };

  return <button onClick={clickHandler}>{props.title}</button>;
};
export default Button;
