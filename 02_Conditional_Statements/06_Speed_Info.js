function test(input) {
    let num = Number(input[0])
    if (num <= 10) {
        console.log("slow")
    } if (num > 10) {
        if (num <= 50) {
            console.log("average")
        }
    } if (num > 50) {
        if (num <= 150) {
            console.log("fast")
        }
    } if (num > 150) {
        if (num <= 1000) {
            console.log("ultra fast")
        }
    } if (num > 1000) {
        console.log("extremely fast")
    }
}