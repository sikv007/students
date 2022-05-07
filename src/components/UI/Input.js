const Input = (props) => {
  
  const onChangeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type='text' onChange={onChangeHandler} />
    </div>
  );
};
export default Input;
