function BonusScore(input) {
    let nachalen = Number(input[0])
    let bonus;
    let dop;

    if (nachalen <= 100) {
        bonus = 5
    } if (nachalen > 100) {
        bonus = 0.2 * nachalen
    } if (nachalen > 1000) {
        bonus = 0.1 * nachalen
    }

    if (nachalen % 2 == 0) {
        dop = 1
    } if (nachalen % 5 == 0) {
        if (nachalen % 2 == 1) {
            dop = 2
        }
    } else {
        dop = 0
    }

    console.log (bonus + dop)
    console.log ( bonus + dop + nachalen)
}

BonusScore([1500])