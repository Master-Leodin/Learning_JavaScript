//First type of funktion
function checkPerson(name, age, openToWork){
    return {name, age, openToWork: openToWork ? "Yes" : "No"
}};
const person = checkPerson("Leon", 43, true);
console.log(`The person "${person.name}" have ${person.age} years.\nIs open to work? ${person.openToWork}`);

//Second type of function
const projects = function(link){
    return link;
};
const gitHub = projects("https://github.com/Master-Leodin");
console.log(`You can see his projects at: ${gitHub}`);

//Third type of function
const job = (typeOfJob) => typeOfJob;
console.log(job("Looking for a sponsored visa"));

//Loop
for(let x = 1; x <= 6; x++){
    if(x === 1){
        console.log(`${x} year of training`)
    }else{
    console.log(`${x} years of training`);
};};
