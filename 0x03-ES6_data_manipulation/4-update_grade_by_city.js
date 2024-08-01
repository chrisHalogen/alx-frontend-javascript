export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades
) {
  const allStudents = listStudents.filter(
    (student) => student.location === city
  );
  for (const student of allStudents) {
    student.grade = "N/A";
  }
  const output = allStudents.map((student) => {
    const single = student;
    for (const g of newGrades) {
      if (single.id === g.studentId) {
        single.grade = g.grade;
      }
    }
    return single;
  });
  return output;
}
