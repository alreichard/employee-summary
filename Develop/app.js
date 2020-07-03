const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
var employees = []

function manager(){

    inquirer.prompt([
    {
    message: "What is your manager's name?",
    name: "name",
    type: "input"
},
{
    message: "What is your manager's id?",
    name: "id",
    type: "input"
},
{
    message: "What is your manager's email?",
    name: "email",
    type: "input"
},
{
    message: "What is your manager's office number?",
    name: "officeNum",
    type: "input"
}
    ]).then(function (answers){
     var managerInfo = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
     employees.push(managerInfo)
     moreEmployees()
 })
}
 function moreEmployees(){
     
     inquirer.prompt({
        message: "Choose employee job.",
        name: "jobType",
        type: "list",
        choices: ["Engineer", "Intern","There are no other employees to add"]
    }).then(function(whichOne){
         if (whichOne.jobType == "Engineer"){
            inquirer.prompt([
                {
                message: "What is your engineer's name?",
                name: "name",
                type: "input"
            },
            {
                message: "What is your engineer's id?",
                name: "id",
                type: "input"
            },
            {
                message: "What is your engineer's email?",
                name: "email",
                type: "input"
            },
            {
                message: "What is your engineer's gitHub?",
                name: "gitHub",
                type: "input"
            },
        ]).then(function (answers){
                 var engineerInfo = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
                 employees.push(engineerInfo)
                 moreEmployees()
             })
         
         } else if (whichOne.jobType == "Intern"){
            inquirer.prompt([
                {
                message: "What is your intern's name?",
                name: "name",
                type: "input"
            },
            {
                message: "What is your intern's id?",
                name: "id",
                type: "input"
            },
            {
                message: "What is your intern's email?",
                name: "email",
                type: "input"
            },
            {
                message: "What is your intern's college alma mater?",
                name: "college",
                type: "input"
            },
        ]).then(function (answers){
                 var internInfo = new Intern(answers.name, answers.id, answers.email, answers.college)
                 employees.push(internInfo)
                 moreEmployees()
             })
            
            } else { const result = render(employees)
                fs.writeFile(outputPath, result, function (err) {

                    if (err) {
                        console.log("errorMessage")
                        console.log(err);
                    }
                    else {
                        console.log("Employee summary created");
                    }
                })
           
                }
     })
     
 }

 
 

 manager()







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
