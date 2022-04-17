const createTeam = (team) => {
    console.log(team);    
    
    const html = [];

    const createManager = manager => {
        console.log(manager);

        let managerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${manager.name} <br/>
                <i class="fas fa-mug-hot"></i>Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}>${manager.email}</a></span></li>
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
            <div class="card-header">
                ${engineer.name} <br/>
                <i class="fas fa-glasses"></i>Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}>${engineer.email}</a></span></li>
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
            <div class="card-header">
                ${intern.name} <br/>
                <i class="fas fa-user-graduate"></i>Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}>${intern.email}</a></span></li>
                <li class="list-group-item"> School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHTML);
    }

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

