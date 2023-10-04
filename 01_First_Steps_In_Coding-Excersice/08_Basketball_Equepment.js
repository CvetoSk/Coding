function be (input) {
    let taksa = Number(input[0]);
    let kecove = 0.6 * taksa;
    let ekip = 0.8 * kecove;
    let topka = 0.25 * ekip;
    let aksesoari = 0.2 * topka;

    let sum = taksa + kecove + ekip + aksesoari + topka;

    console.log(sum)
}

be([550])