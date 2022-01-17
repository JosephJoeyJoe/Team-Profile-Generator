const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([ 
    {
        type: 'input', 
        name: 'manager',
        message: 'Enter Manager name.'
    },
    {
        type: 'input', 
        name: 'id',
        message: 'Enter ID number.'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Enter email address.'
    },
    {
        type: 'input', 
        name: 'number',
        message: 'Enter Office Number.'
    }

]).then(function addMembers() {
    inquirer.prompt([

        {
            type: 'list',
            choices: [Yes, No],
            name: 'Team Members',
            message: 'Do you want to add a new team member?'
        }

    ]).then(() => {

        if(yes) {
            inquirer.prompt([
                {
                    type: 'list',
                    choices: [Engineer, Intern],
                    name: 'members',
                    message: 'Please pick one.'
                }, 
            ]);
        } else {
            geneterateHTML();
        }
    })
    .then(() => {
        if(engineer) {
            inquirer.prompt([
                {
                    type: 'input', 
                    name: 'engineers',
                    message: 'Enter engineer name.'
                },
                {
                    type: 'input', 
                    name: 'id',
                    message: 'Enter engineer ID.'
                },
                {
                    type: 'input', 
                    name: 'email',
                    message: 'Enter engineer email.'
                },
                {
                    type: 'input', 
                    name: 'github',
                    message: 'Enter engineer Git-Hub ID.'
                }

            ]).then(() => {
                engineerHTML();
            });
        } else if (intern) {
            inquirer.prompt([
                {
                    type: 'input', 
                    name: 'name',
                    message: 'Enter intern name.'
                },
                {
                    type: 'input', 
                    name: 'id',
                    message: 'Enter intern ID.'
                },
                {
                    type: 'input', 
                    name: 'email',
                    message: 'Enter intern email.'
                },
                {
                    type: 'input', 
                    name: 'school',
                    message: 'Enter intern school.'
                },
            ])
        }
    })

});
        addMember()
    
