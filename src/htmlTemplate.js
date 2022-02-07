let team = [];

const generateCards = employees => {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === "Manager") {
            let name = employees[i].name
            let id = employees[i].id;
            let email = employees[i].email;
            let officeNum = employees[i].officeNum;
            const manager = `
            <div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card shadow-md bg-white rounded">
                <div class="card-body">
                    <div class="card-title bg-primary">
                        <h3 class="fs-1">${name}<h3>
                        <h4 class="fs-2">Manager</h4>
                    </div>
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email} target="_blank">${email}</a></li>
                    <li class="list-group-item">Office number: ${officeNum}</li>
                    </ul>
                </div>
                </div>
            </div>
          `;
            team.push(manager)

        } else if (employees[i].getRole() === "Engineer") {
            let name = employees[i].name
            let id = employees[i].id;
            let email = employees[i].email;
            let github = employees[i].github;
            const engineer = `
            <div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card shadow-md bg-white rounded">
                <div class="card-body">
                    <div class="card-title bg-primary">
                        <h3 class="fs-1">${name}<h3>
                        <h4 class="fs-2">Engineer</h4>
                    </div>
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email} target="_blank">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            `;
            team.push(engineer)

        } else if (employees[i].getRole() === "Intern") {
            let name = employees[i].name
            let id = employees[i].id;
            let email = employees[i].email;
            let school = employees[i].school
            const intern = `
            <div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card shadow-md bg-white rounded">
                <div class="card-body">
                    <div class="card-title bg-primary">
                        <h3 class="fs-1">${name}<h3>
                        <h4 class="fs-2">Intern</h4>
                    </div>
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email} target="_blank">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
                </div>
            </div>
            `;
            team.push(intern)
        }
    }
    console.log("Your page has been generated")
    return team.join(' ')
};

module.exports = employees => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body> 
    <header>
        <div class="jumbotron text-center bg-danger">
            <h1>My Team</h1>
        </div>
    </header>
    <main>
        <div class="container-body container-fluid">
            <div class="row">
                ${generateCards(employees)}
            </div>
        </div>
    </main>
    </body>
    </html>
`
};