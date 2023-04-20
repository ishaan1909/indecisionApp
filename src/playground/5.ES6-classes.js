
class Person {
    constructor(name="test",age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return "Hi, I am "+this.name+" !";
        return `Hi, I am ${this.name}`;
    }

    getDesciption(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDesciption(){
       let description = super.getDesciption();
       if(this.hasMajor()){
        description +=` their major is ${this.major}`;
       }
       return description
    }
}

class Traveller extends Person{
    constructor(name,age,homelocation)
    {
        super(name,age);
        this.homelocation = homelocation;
    }
    hasHomeLocation(){
        return !!this.homelocation;
    }
    getDesciption(){
        let description=super.getDesciption()
        if(this.hasHomeLocation()){
            return (description+` is visiting from ${this.homelocation}`);
        }
        return description
    }
}

const me = new Traveller("Ishaan",20,"Pune");
const other = new Traveller(undefined,undefined,"nowhere");
console.log(me.getDesciption());
console.log(other.getDesciption());

