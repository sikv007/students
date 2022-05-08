const Input = (props) => {
  
  const onChangeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="form-control">
      <label htmlFor={props.id}>{props.label}</label>
      <input type='text' id={props.id} onChange={onChangeHandler} required={props.required} />
    </div>
  );
};
export default Input;
