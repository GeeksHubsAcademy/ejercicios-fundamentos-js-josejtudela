let personas = [{
        name: 'Juan',
        age: 25,
    },
    {
        name: 'Pepe',
        age: 22,
    },
    {
        name: 'Masami',
        age: 15,
    },
    {
        name: 'Robe',
        age: 53,
    },
    {
        name: 'Ana',
        age: 40,
    },
    {
        name: 'Alba',
        age: 18,
    },
    {
        name: 'Alberto',
        age: 33,
    }
]

//personas.sort((persona1,persona2)=> persona1.name > persona2.name);
//personas.sort((persona1,persona2)=> persona2.age - persona1.age);
personas.sort((persona1,persona2)=> persona2.name.split("").reverse().join("") < persona1.name.split("").reverse().join(""));

console.log(personas);
