// helper function to create html file using data provided from cl
const createSite = (team) => {
    console.log(team);    
    
    // empty array that will hold the html templates and template literals
    const html = [];

    const createManager = manager => {
        console.log(manager);

        let managerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                ${manager.name} <br/>
                <i class="fas fa-mug-hot"></i>Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHTML);
    }

    const createEngineer = engineer => {
        console.log(engineer);

        let engineerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                ${engineer.name} <br/>
                <i class="fas fa-glasses"></i>Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHTML);
    }
    
    const createIntern = intern => {
        console.log(intern);

        let internHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                ${intern.name} <br/>
                <i class="fas fa-user-graduate"></i>Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item"> School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHTML);
    }

    // for loop goes through the answers provided and assigns them to a function based on their role
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            createManager(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            createEngineer(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            createIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css" integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <header class="col-12 mb-3 team-heading jumbotron bg-info text-white">
                        <h1 class="text-center">My Team</h1>
                    </header>
                </div>

            <main class="container">
                <div class="row">
                    <div class="col-12 team-area d-flex justify-content-center">
                        ${createSite(team)}
                    </div>
                <div>
            <main>
            </div>
        </body>
    </html>
    `;
}