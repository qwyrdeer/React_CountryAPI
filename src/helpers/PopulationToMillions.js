
function PopulationCalculator(population) {
    let millionStart = 0;
    millionStart = population / 1000000;
    if (millionStart >= 1.0) {
        return millionStart.toFixed(1)
    } else if (millionStart >= 0.001) {
    return millionStart.toFixed(3)
    } else {
        return millionStart.toFixed(6)
    }
}

export default PopulationCalculator;
