class teamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends teamMember{
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
};

class Developer extends teamMember{
    tech;
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`start the support session at ${feature}`)
    }
    release(version){
        console.log(`create quiz for module ${version}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
};

class JopPlacement extends teamMember{
    region;
    designation = 'Job placement Commands'
    team = 'Job placement'
    constructor(name, location, region){
        super(name, location)
        this.region = region;
    }
    developFeature(feature){
        console.log(`start the support session at ${feature}`)
    }
    release(version){
        console.log(`create quiz for module ${version}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
};

const alia = new Developer('Alia bhaat', 'Mumbai', 'React')
console.log(alia);
alia.provideFeedback();

const bipasha = new JopPlacement('Bipasha', 'Kolkata', 'India');
console.log(bipasha)
bipasha.provideFeedback();