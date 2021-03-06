// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNum;
    }
}
module.exports = Manager;