function toyshop (input) {
    let vacation = Number(input[0]) 
    let puzzles = Number(input[1]) * 2.6
    let dolls = Number(input[2]) * 3
    let bears = Number(input[3]) * 4.1
    let minions = Number(input[4]) * 8.2
    let trucks = Number(input[5]) * 2

    let winnings = puzzles + dolls + bears
    + minions + trucks;
    if (winnings >= 50) {
        winnings = (winnings * 0.75) * 0.90
    } else {
        winnings = winnings * 0.90
    }

    if (winnings - vacation >= 0) {
        console.log (`Yes! ${(winnings - vacation).toFixed(2)} lv left.`)
    } if (winnings - vacation <= 0) {
        console.log (`Not enough money! ${((winnings - vacation) * -1).toFixed(2)} lv needed.`)
    }
}

toyshop(["40.8",
"20",
"25",
"30",
"50",
"10"])
    

