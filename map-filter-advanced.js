const student = [
    {id: 1, name: "arif"},
    {id: 2, name: "kamal"},
    {id: 3, name: "selim"},
    {id: 4, name: "munna"},
]
const output = []
// for(let i=0;i<student.length;i++)
// {
//     console.log(student[i].name,i)
//     output.push(student[i].name);
// }
const names = student.map(s => s.name)

console.log(names)