const developer = {
  salary: 120000,
  income: 97000,
  expenses: 45000,
  experiance: 6,
  lookingForWork: true,
  Educationa: "National Diploma",
  techstack: ["Vue", "PHP", "HTML", "CSS", "Mysql", "Apache"],
  doublesalary() {
    this.salary = this.salary * 1.6;
    this.lookingForWork = false;
  },
};
console.warn("Current status");
console.log("looking for a new Job", developer.lookingForWork);
console.log("Salary", developer.salary);

developer.doublesalary();
console.warn("Got a new Job");
console.log("looking for a new Job", developer.lookingForWork);
console.log("Salary", developer.salary);
