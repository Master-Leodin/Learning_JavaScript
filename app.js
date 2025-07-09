console.log("First type of funktion");
function checkPerson(name, age, openToWork){
    return {name, age, openToWork: openToWork ? "Yes" : "No"
}};
const person = checkPerson("Leon", 43, true);
console.log(`The person "${person.name}" have ${person.age} years.\n\nIs open to work?\n${person.openToWork}\n`);

console.log("Second type of function");
const projects = function(link){
    return link;
};
const gitHub = projects("https://github.com/Master-Leodin/Learning_JavaScript");
console.log(`You can see this projects at: ${gitHub}\n`);

console.log("Third type of function");
const job = (typeOfJob) => typeOfJob;
console.log(job("Looking for a sponsored visa\n"));

console.log("Loop for");
for(let x = 1; x <= 6; x++){
    if(x === 1){
        console.log(`${x} year of training`)
    }else{
    console.log(`${x} years of training`);
};};
console.log("");

console.log("Array");
const arrayNumbers = [1, 2, 3, 4, 5, 6];
console.log(`My array is: ${arrayNumbers}`);
arrayNumbers.push(8);
console.log(`Now, my array have one more number, see: ${arrayNumbers}`);
arrayNumbers.pop();
console.log(`And I remove the number 8: ${arrayNumbers}`);

const double = arrayNumbers.map(num => num * 2);
console.log(`If you want to double the numbers, I do this for you: ${double}`);

const filterNumbers = arrayNumbers.filter(num => num >= 5);
const totalFilterNumbers = filterNumbers.reduce((acc, num) => acc + num);
const totalNumbers = arrayNumbers.reduce((acc, num) => acc + num);
console.log(`I can filter the numbers who are bigger than 4: ${filterNumbers} and add only I filter: ${totalFilterNumbers}`);
console.log(`Can add the totally of all numbers of the original array: ${totalNumbers}`);

