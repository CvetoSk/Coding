function ProjectCreation (input) {
    let name = input[0];
    let project = input[1];
    let hours = project * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${project} project/s.`);
}

ProjectCreation(['Georgy', 4]);