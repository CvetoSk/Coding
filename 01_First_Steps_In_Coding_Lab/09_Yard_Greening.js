function YardGreening(input) {
    let kvmetri = input[0];
    let cena = 7.61;
    let bezdiscount = kvmetri * cena;
    let discount = bezdiscount * 0.18;
    let finalprice = bezdiscount - discount;

    console.log(`The final price is: ${finalprice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

YardGreening([550])