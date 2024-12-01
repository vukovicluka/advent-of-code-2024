import {syncReadFile} from "../utils/syncReadFile.js";

function partOne() {
    const inputArray = syncReadFile("./input.txt");

    const leftList = []
    const rightList = []

    for (let i = 0; i < inputArray.length; i++) {
        const input = inputArray[i];
        const [left, right] = input.split("   ")
        leftList.push(left);
        rightList.push(right);
    }

    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    const differenceNumbers = []
    for (let i = 0; i < leftList.length; i++) {
        const left = leftList[i];
        const right = rightList[i];
        const difference = Math.abs(left - right);
        differenceNumbers.push(difference);
    }

    const sum = differenceNumbers.reduce((sum, number) => sum + number, 0);
    console.log(sum);
}

function partTwo() {
    const inputArray = syncReadFile("./input.txt");

    const leftList = []
    const rightList = []

    for (let i = 0; i < inputArray.length; i++) {
        const input = inputArray[i];
        const [left, right] = input.split("   ")
        leftList.push(left);
        rightList.push(right);
    }

    const score = []
    for (let i = 0; i < leftList.length; i++) {
        const left = leftList[i];
        let leftOccurances = 0
        for (let j = 0; j < rightList.length; j++) {
            const right = rightList[j];
            if (right === left) {
                leftOccurances++
            }
        }

        const similarity = left * leftOccurances
        score.push(similarity);
    }
    const sum = score.reduce((sum, number) => sum + number, 0);
    console.log(sum);
}

partOne();
partTwo()