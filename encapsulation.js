function stopWatch(){
    let count = 0;
    return function(){
        const about = {
            overview: [
                {Job: "Former senior data entry operator"},
                {Education: "Studies Computer Science and engineering"},
                {Home: "Lives in Chittagong"},
                {City: "From Chittagong"}
            ]
        }
        const student = [
            {id: 1, name: "arif"},
            {id: 2, name: "Selim"},
            {id: 3, name: "Karim"},
            {id: 4, name: "Mofiz"}
        ]
        console.log(student)
        return about;
    }
}

const clock = stopWatch();
console.log(clock())
