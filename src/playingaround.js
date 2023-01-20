const ZakOBJ = {
  fullName: 'Isaac Zak Tsienyane',
  salary: 50000,
  age: 31,
  sex: 'Male',
  children: true,
  Job: 'Front-end Developer',
  experiance: '5 years',
  techStack: ['Vue', 'Php', 'CSS', 'Mysql', 'Python', 'javascript'],
  lookingForWork: true,
  increaseSalary() {
    this.salary = this.salary * 1.7
    this.lookingForWork = false
  },
}

console.log('My current salary per month is  ' + ZakOBJ.salary)
console.log('Am I looking for work? ' + ZakOBJ.lookingForWork)

ZakOBJ.increaseSalary()

console.log('My new salary per month is  ' + ZakOBJ.salary)
console.log('Am I looking for work? ' + ZakOBJ.lookingForWork)
