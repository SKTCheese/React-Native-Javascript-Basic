// Import va destructuring du lieu sinh vien

import student from "./student.js";

const { name, class: studentClass, major, year } = student;

console.log("Ho ten:", name);
console.log("Lop:", studentClass);
console.log("Nganh:", major);
console.log("Nam hoc:", year);
