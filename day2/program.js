import {syncReadFile} from "../utils/syncReadFile.js";

function partOne() {
    const inputArray = syncReadFile("./input.txt");

    let safeCount = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const input = inputArray[i];
        let isSafe = true;

        const levelStrings = input.split(" ")
        const levels = levelStrings.map((l) => parseInt(l.trim()));

        for (let j = 0; j < levels.length; j++) {
            const diff = Math.abs(levels[j] - levels[j + 1])
            if (diff > 3 || diff === 0) {
                isSafe = false
            }
            if (levels[j] > levels[j + 1] && levels[j + 1] < levels[j + 2]) {
                isSafe = false;
            }
            if (levels[j] < levels[j + 1] && levels[j + 1] > levels[j + 2]) {
                isSafe = false;
            }
        }
        if (isSafe) {
            safeCount++;
        }
    }
    console.log("How many reports are safe: ", safeCount);
}

function partTwo() {
    const inputArray = syncReadFile("./input.txt");

    let safeCount = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const input = inputArray[i];
        let isSafe = true;

        const levelStrings = input.split(" ")
        const levels = levelStrings.map((l) => parseInt(l.trim()));

        let badLevel
        for (let j = 0; j < levels.length; j++) {
            if (!levels[j + 1]) {
                continue
            }

            const diff = Math.abs(levels[j] - levels[j + 1])
            if (diff > 3 || diff === 0) {
                isSafe = false

                if (diff === 0) {
                    badLevel = levels[j]
                    break
                }


                if (diff > 3) {
                    if (levels[j + 2]) {
                        badLevel = levels[j]
                    } else {
                        badLevel = levels[j + 1]
                    }
                    break
                }

                if (!levels[j + 2]) {
                    break
                }

                const diffOne = Math.abs(levels[j] - levels[j + 2])
                if (diffOne && (diffOne > 3 || diffOne === 0)) {
                    badLevel = levels[j];
                    break
                }
                const diffTwo = Math.abs(levels[j + 1] - levels[j + 2])
                if (diffTwo && (diffTwo > 3 && diffTwo === 0)) {
                    badLevel = levels[j + 1];
                    break
                }
            }
            if (levels[j] > levels[j + 1] && levels[j + 1] < levels[j + 2]) {
                isSafe = false;
                if (levels[j] > levels[j + 2]) {
                    badLevel = levels[j + 1];
                    break
                } else if (levels[j + 1] > levels[j + 2]) {
                    badLevel = levels[j];
                    break
                }
            }
            if (levels[j] < levels[j + 1] && levels[j + 1] > levels[j + 2]) {
                isSafe = false;
                if (levels[j] < levels[j + 2]) {
                    badLevel = levels[j + 1];
                } else if (levels[j + 1] < levels[j + 2]) {
                    badLevel = levels[j];
                }
            }
        }

        if (badLevel) {
            isSafe = true;
            const badLevelIndex = levels.indexOf(badLevel);
            levels.splice(badLevelIndex, 1);
            for (let j = 0; j < levels.length; j++) {
                const diff = Math.abs(levels[j] - levels[j + 1])
                if (diff > 3 || diff === 0) {
                    isSafe = false
                }
                if (levels[j] > levels[j + 1] && levels[j + 1] < levels[j + 2]) {
                    isSafe = false;
                }
                if (levels[j] < levels[j + 1] && levels[j + 1] > levels[j + 2]) {
                    isSafe = false;
                }
            }
        }

        if (isSafe) {
            safeCount++;
        } else {
            console.log("BAD", levels)
        }
    }
    console.log("How many reports are safe: ", safeCount);
}

partTwo();