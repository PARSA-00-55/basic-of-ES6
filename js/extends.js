//common class ... takeing the common information of the class
class TeamMember {
  name;
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}
// calling the commmon class by useing "extends" and then the common class name
class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  //calling the common class valu by useing "super"
  constructor(name, location) {
    super(name, location);
  }
  startSupportSessioon(time) {
    console.log(`start the support session at ${time}`);
  }
  creatQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}


class Developer extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  tech;
  //like a function update data dynamicly
  constructor(name, location, tech) {
    super(name, location)
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  release(version) {
    console.log(`please release the ${version}`);
  }
}

const Parsa = new Developer(`Parsa`, `Dhaka`, `React`);
console.log(Parsa);
