// Zadanie 1
const tab = [1,2,3,4];
function checkTable(table,x){
    return table.includes(x);
};

console.log(tab);
console.log(checkTable(tab,2));

// Zadanie 2
const tablestring = ["ala ma kota", "test test", "xxx"];

function convertStringToArrays(tablestring, separator){
    let emptytable = [];
    for (let i=0; i<tablestring.length; i++){
        emptytable.push(tablestring[i].split(separator));
    }

    return emptytable;
}
console.log(convertStringToArrays(tablestring, " "));


// Obiekt

const person ={
    name: "Adam",
    surname: "Adamczyk",
    age: 29,
    favouriteMovies: ["Szklana pułapka"," Kevin sam w domu"," Mordercza opona"],
    getFavMovies: function(){
        return person.favouriteMovies;
    },
    getFullName: function(){
        return `${person.name} ${person.surname}`;
    },
    sayHello: function(){
        return `Hello my namis is ${person.getFullName()} I am ${person.age}, and my favorite movies are: ${person.getFavMovies()}`;
    }
};

console.log(person.getFavMovies());
console.log(person.getFullName());
console.log(person.sayHello());
