const generateManager = function (manager) {
    return `
    <div class="card">
        <div class="container">
            <div>
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="container">
            <div>
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="card">
        <div class="container">
            <div>
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {
    pageArray = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav>
              <span>Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="card">
              <div class="container">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML;