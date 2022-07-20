`use strict`;
function calcAverageHumanAge(arr) {
    return arr.map((dogAge) => {
        const humanAge = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
        return humanAge;
    }).filter(humanAge => humanAge >= 18)
        .reduce((cum, curr, _, arr) => cum + curr / arr.length, 0);
}
