// syntactic sugar
class Instructor{
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }
}

const aamir = new Instructor('aamir', 'dhaka');
// console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman Khan', 'Bangladesh');
// console.log(solaiman);