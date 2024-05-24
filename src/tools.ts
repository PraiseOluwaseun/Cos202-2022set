const log = (output: any) => { 
    document.getElementById("output")!.innerHTML = output; 
} 
export default log; 

export class Person{ 
    //declare property types 
    firstName: string; 
    lastName: string; 
    gender: string; 
    height: number; 
    hobbies: string[]; 
    birthday: Date; 
    isAlive: boolean; 
    constructor(firstName: string, lastName: string, gender: string, height: number = -1,  
        hobbies: string[] = [], birthday: Date, isAlive: boolean = true){ 
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.gender = gender; 
        this.height = height; 
        this.hobbies = hobbies; 
        this.birthday = birthday; 
        this.isAlive = isAlive; 
    } 
};