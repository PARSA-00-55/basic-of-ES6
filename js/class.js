//syntactic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    startSupportSessioon(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    //like a function update data dynamicly
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}


//updateing the constructor data
//you can not call constructor dirct you have to call the class first
const aamir = new Instructor(`amir`, `mumbai`);//give the value inside the class names parentheses
console.log(aamir);

//dynamicaly update data
aamir.startSupportSessioon('9.00');
aamir.creatQuiz(60);