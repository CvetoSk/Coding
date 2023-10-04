function fd(input) {
    let pile = Number(input[0]) * 10.35;
    let riba = Number(input[1]) * 12.40;
    let vegan = Number(input[2]) * 8.15;
    let menuta = pile + riba + vegan
    let desert = menuta * 0.2;
    let dostavka = 2.50
    let sum = menuta + desert + dostavka;

    console.log(sum);
}

fd([2, 4, 3]);