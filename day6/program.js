import {syncReadFile} from "../utils/syncReadFile.js";

function partOne() {
    const input = syncReadFile("./input.txt");

    let current
    const board = []
    for (let i = 0; i < input.length; i++) {
        const rowElements = input[i].split("");
        board.push(rowElements);
        for (let j = 0; j < rowElements.length; j++) {
            const re = rowElements[j];
            if (re.includes("^")) {
                current = {row: i, column: j, dir: "up"}
                break
            } else if (re.includes(">")) {
                current = {row: i, column: j, dir: "right"}
                break
            } else if (re.includes("v")) {
                current = {row: i, column: j, dir: "down"}
                break
            } else if (re.includes("<")) {
                current = {row: i, column: j, dir: "left"}
                break
            }
        }
    }

    let inside = true
    let counter = 1

    while (inside) {
        if (current.dir === "up") {
            const next = board[current.row - 1]?.[current.column]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "right"}
            } else if (next === ".") {
                current = {row: current.row - 1, column: current.column, dir: "up"}
                counter++
                board[current.row][current.column] = "X"
            } else if (next === "^" || next === "X") {
                current = {row: current.row - 1, column: current.column, dir: "up"}
            }
        } else if (current.dir === "right") {
            const next = board[current.row]?.[current.column + 1]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "down"}
            } else if (next === ".") {
                current = {row: current.row, column: current.column + 1, dir: "right"}
                counter++
                board[current.row][current.column] = "X"
            } else if (next === "^" || next === "X") {
                current = {row: current.row, column: current.column + 1, dir: "right"}
            }
        } else if (current.dir === "down") {
            const next = board[current.row + 1]?.[current.column]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "left"}
            } else if (next === ".") {
                current = {row: current.row + 1, column: current.column, dir: "down"}
                counter++
                board[current.row][current.column] = "X"
            } else if (next === "^" || next === "X") {
                current = {row: current.row + 1, column: current.column, dir: "down"}
            }
        } else if (current.dir === "left") {
            const next = board[current.row]?.[current.column - 1]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "up"}
            } else if (next === ".") {
                current = {row: current.row, column: current.column - 1, dir: "left"}
                counter++
                board[current.row][current.column] = "X"
            } else if (next === "^" || next === "X") {
                current = {row: current.row, column: current.column - 1, dir: "left"}
            }
        }
    }

    console.log("Counter", counter)
}

function partTwo() {
    const input = syncReadFile("./input.txt");

    let current
    const board = []
    for (let i = 0; i < input.length; i++) {
        const rowElements = input[i].split("");
        board.push(rowElements);
        for (let j = 0; j < rowElements.length; j++) {
            const re = rowElements[j];
            if (re.includes("^")) {
                current = {row: i, column: j, dir: "up"}
                break
            } else if (re.includes(">")) {
                current = {row: i, column: j, dir: "right"}
                break
            } else if (re.includes("v")) {
                current = {row: i, column: j, dir: "down"}
                break
            } else if (re.includes("<")) {
                current = {row: i, column: j, dir: "left"}
                break
            }
        }
    }

    let inside = true
    let counter = 1

    while (inside) {
        if (current.dir === "up") {
            const next = board[current.row - 1]?.[current.column]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "right"}
            } else if (next === ".") {
                current = {row: current.row - 1, column: current.column, dir: "up"}
                counter++

                const isRight = board[current.row]?.[current.column + 1] === "X"
                board[current.row][current.column] = isRight ? "0" : "X"
            } else if (next === "^" || next === "X" || next === "0") {
                current = {row: current.row - 1, column: current.column, dir: "up"}
            }
        } else if (current.dir === "right") {
            const next = board[current.row]?.[current.column + 1]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "down"}
            } else if (next === ".") {
                current = {row: current.row, column: current.column + 1, dir: "right"}
                counter++

                const isDown = board[current.row + 1]?.[current.column] === "X"
                board[current.row][current.column] = isDown ? "0" : "X"
            } else if (next === "^" || next === "X" || next === "0") {
                current = {row: current.row, column: current.column + 1, dir: "right"}
            }
        } else if (current.dir === "down") {
            const next = board[current.row + 1]?.[current.column]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "left"}
            } else if (next === ".") {
                current = {row: current.row + 1, column: current.column, dir: "down"}
                counter++

                const isLeft = board[current.row]?.[current.column - 1] === "X"
                board[current.row][current.column] = isLeft ? "0" : "X"
            } else if (next === "^" || next === "X") {
                current = {row: current.row + 1, column: current.column, dir: "down"}
            }
        } else if (current.dir === "left") {
            const next = board[current.row]?.[current.column - 1]
            if (next === undefined) {
                break
            } else if (next === "#") {
                current = {row: current.row, column: current.column, dir: "up"}
            } else if (next === ".") {
                current = {row: current.row, column: current.column - 1, dir: "left"}
                counter++

                const isUp = board[current.row + 1]?.[current.column] === "X"
                board[current.row][current.column] = isUp ? "0" : "X"
            } else if (next === "^" || next === "X") {
                current = {row: current.row, column: current.column - 1, dir: "left"}
            }
        }
    }

    console.log("Counter", counter)
}

partTwo()