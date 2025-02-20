export const Practices = () => {
  const students = [1];

  // let numberOfStudents = null;
  // if (students.length === 0) {
  //   numberOfStudents = "No Students Found";
  // }
  return (
    <div>
      {/* <p>{numberOfStudents}</p> */}
      {/* <p>{students.length === 0 && "No Students Found"}</p> */}
      <p>{!students.length && "No Students Found"}</p>
      <p>Number of students: {students.length}</p>
    </div>
  );
};
