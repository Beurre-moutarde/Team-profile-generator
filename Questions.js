// Questions for creating team card

//Question for the manager(name, id, email, office number)
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's Id?",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an Id!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (officeNumberInput) => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter an office number!")
                return false;
            }
        }
    },
];

//Question for the engineer(name, id, email, GitHub)
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's Id?",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an Id!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter a github!")
                return false;
            }
        }
    },
];

//Question for the intern(name, id, email, school)
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's Id?",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an Id!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (schoolInput) => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter a school!")
                return false;
            }
        }
    },
];

module.exports = {managerQuestions, engineerQuestions, internQuestions};