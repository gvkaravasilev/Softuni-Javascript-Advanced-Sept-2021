/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {string} input 
 */

function solve(area, vol, input) {
    const data = JSON.parse(input);
    let result = [];

    for (let cube of data) {

        const cubeArea = area.apply(cube);
        const volArea = vol.apply(cube);

        result.push({
            area : cubeArea,
            volume : volArea
        });

        
    }
    return result;
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));
