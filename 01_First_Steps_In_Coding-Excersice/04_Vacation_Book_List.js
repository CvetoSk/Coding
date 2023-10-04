function lit(input) {
    let numpages = Number(input[0]);
    let pph = Number(input[1]);
    let time = Number(input[2]);
    let hours = numpages / pph / time;
    
    console.log(hours)
}

lit([432, 15, 4])