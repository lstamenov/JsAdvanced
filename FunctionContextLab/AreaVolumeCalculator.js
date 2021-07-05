function area (){
    return this.x * this.y;
}

function volume() {
    return this.x * this.y * this.z;
}
let input = [
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"},
];

function printVolumeAndArea(area, volume, input) {
    let figures = input.map(fig => {
        return {
            area: area.call(fig),
            volume: volume.call(fig)
        };
    });

    figures.forEach(f => {
        console.log(f);
    });
}

printVolumeAndArea(area, volume, input);