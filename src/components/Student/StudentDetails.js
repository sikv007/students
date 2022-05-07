const StudentDetails = (props) => {
  const { first_name, last_name } = props.student;
  return (
    <article>
      <h3>
        {first_name} {last_name}
      </h3>
    </article>
  );
};
export default StudentDetails;
