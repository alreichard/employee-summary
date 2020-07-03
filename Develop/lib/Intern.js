// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, college) {
        super(name, id, email);

        this.college = college;
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.college;
    }
}
module.exports = Intern;