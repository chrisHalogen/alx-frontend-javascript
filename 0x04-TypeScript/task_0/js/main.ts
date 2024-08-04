interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Chris",
  lastName: "Nwikpo",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Prince",
  lastName: "Chuck",
  age: 40,
  location: "Bauchi",
};

const studentsList: Student[] = [student1, student2];

const tableElement = document.createElement("table");
const tableBody = document.createElement("tbody");

tableElement.style.background = "orange";
tableElement.appendChild(tableBody);

studentsList.forEach((student: Student): void => {
  const rowElement = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid orange";
  locationCell.style.border = "1px solid orange";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  rowElement.appendChild(nameCell);
  rowElement.appendChild(locationCell);
  tableBody.appendChild(rowElement);
});

document.body.appendChild(tableElement);
