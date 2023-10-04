function ft (input) {
    let duljina = Number(input[0]);
    let shirochina = Number(input[1]);
    let visochina = Number(input[2]);
    let procent = Number(input[3]) / 100;

    let voda = ((duljina * shirochina * visochina) / 1000) * (1 - procent)

    console.log(voda)

}

ft([85, 75, 47, 17]);