const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };

  return <button onClick={clickHandler}>{props.title}</button>;
};
export default Button;
