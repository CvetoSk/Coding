function school(input) {
    let him = Number(input[0]) * 5.80;
    let mark = Number(input[1]) * 7.20;
    let duska = Number(input[2]) * 1.20;
    let namalenie = 1.00 - (Number(input[3]) / 100);

    let cena = (him + mark + duska) * namalenie
    console.log(cena)
}

    school([2, 3, 4, 25])