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


const songBtn = document.getElementById("search-btn");
songBtn.addEventListener("click", function(){
    const searchItem = document.getElementById("search-song").value;
    fetch("https://api.lyrics.ovh/suggest/baby")
    .then(res => res.json())
    .then(data => {
        const title = data.map(s => s.title);
        console.log(title)
    })
    console.log(searchItem)
})
const title = data.data
const name = title.map(s => s.album.title)