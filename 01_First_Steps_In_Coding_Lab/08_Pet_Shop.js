function PetShop(input) {
    let dogprice = 2.50
    let catprice = 4.00
    let numdog = input[0]
    let numcat = input[1]
    let together = numdog * dogprice + numcat * catprice

    console.log(`${together} lv.`)
}

PetShop([5, 4])