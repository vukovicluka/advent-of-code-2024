import {syncReadFile} from "../utils/syncReadFile.js";

const regExp = /mul\((\d{1,3}),(\d{1,3})\)/g;

function partOne() {
    const [input] = syncReadFile("./input.txt");
    const result = [...input.matchAll(regExp)];

    const muls = result.map((r) => r[1] * r[2])
    const sum = muls.reduce((acc, cur) => acc + cur, 0);

    console.log("Sum: ", sum);
}

const regExp2 = /do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g

function partTwo() {
    const [input] = syncReadFile("./input.txt");
    const result = [...input.matchAll(regExp2)];

    let sum = 0
    let enable = true
    for (let i = 0; i < result.length; i++) {
        if (enable) {
            const element = result[i]
            if (element[0].startsWith("mul")) {
                const calc = element[1] * element[2];
                sum += calc
            } else if (element[0].startsWith("don")) {
                enable = false
            }
        } else {
            const element = result[i]
            if (element[0].startsWith("do(")) {
                enable = true
            }
        }
    }

    console.log("Sum: ", sum);
}

partTwo();