const StudentDetails = (props) => {
  const { first_name, last_name, phone, address, postal_code, city } =
    props.student;
  return (
    <article>
      <h3>
        {first_name} {last_name}
      </h3>
      <p>{phone}</p>
      <p>{address}</p>
      <p>{postal_code}</p>
      <p>{city}</p>
    </article>
  );
};
export default StudentDetails;
