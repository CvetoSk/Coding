function areaoffigures(input) {
    let type = input[0]
    let a = Number(input[1])
    let b = Number(input[2])
    let area;
    if (type == 'square') {
        b = a
        area = a * a;
    }   if (type == 'circle') {
        b = a
        area = a * a * Math.PI;
    }   if (type == 'rectangle') {
        area = a * b
    }   if (type == 'triangle') {
        area = (a * b) / 2
    }
    
    console.log(area.toFixed(3))
}

areaoffigures(['rectangle', 7, 2.5])