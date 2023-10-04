//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
function calculator (input) { 
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let percentage = Number(input[2])/100;
    let sum = deposit + months * ((deposit * percentage) /12);

    console.log(sum)

}

calculator([2350, 6, 7]);