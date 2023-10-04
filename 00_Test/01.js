function machine(input) {
    //in
    let video = Number(input[0]);
    let prehodnik = Number(input[1]);
    let tok = Number(input[2]);
    let pechalbavideo = Number(input[3]) - tok

    //out
    let harchene;
    let vreme;

    let cenavideo = video * 13
    let cenaprehodnik = prehodnik * 13
    harchene = cenavideo + cenaprehodnik + 1000
    
    pechalba = 13 * pechalbavideo
    vreme = (harchene / pechalba).toFixed(0)
    
    //print
    console.log(harchene, vreme)

}

machine(["700", "15", "0.20", "2" ])