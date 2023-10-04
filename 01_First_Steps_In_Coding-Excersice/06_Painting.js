function Painting(input) {
    let nailon = (Number(input[0]) + 2) * 1.50;
    let boq = (Number(input[1]) * 1.1) * 14.50;
    let razreditel = Number(input[2]) * 5.00;
    let time = Number(input[3]);
    let torbichki = 0.40;

    let sum = (nailon + boq + razreditel + torbichki)
    let obshto = (sum * 0.3) * time + sum

    console.log(obshto)
}

Painting([10, 11, 4, 8])