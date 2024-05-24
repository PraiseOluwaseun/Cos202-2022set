import log, {Person} from './tools'; 

//Accessing object properties 
let firstName = "Tosin"; 
let lastName = "Obisanya"; 
let gender = "female"; 
let height = 1.6; 
let hobbies = ['Reading','Programming']; 
let birthday = new Date(2005,8,5); 
let isAlive = true; 

let person1 = new Person(firstName, lastName, gender, height,  
hobbies, birthday, isAlive) 

log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is $
{person1.birthday.toLocaleDateString()}`); 