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
