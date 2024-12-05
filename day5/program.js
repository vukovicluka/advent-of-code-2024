import {syncReadFile} from "../utils/syncReadFile.js";

function partOne() {
    const input = syncReadFile("./input.txt");

    const rules = []
    const updates = []
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        if (row.includes("|")) {
            rules.push(row);
        } else if (row.includes(",")) {
            updates.push(row);
        }
    }

    const middleNumbersOfValidUpdates = []
    for (let i = 0; i < updates.length; i++) {
        const elements = updates[i].split(",");
        let isValid = true

        for (let j = 0; j < elements.length; j++) {
            const e = elements[j];

            const otherElements = elements.filter((el) => el !== e)

            for (let k = 0; k < otherElements.length; k++) {
                const el = otherElements[k];
                const rule = rules.filter((rule) => rule.includes(el) && rule.includes(e));
                const [before] = rule[0].split("|");
                if (before === e && j > k) {
                    isValid = false
                }
            }
        }
        if (isValid) {
            const middleNumber = elements[Math.floor(elements.length / 2)];
            middleNumbersOfValidUpdates.push(middleNumber)
        }
    }

    const sum = middleNumbersOfValidUpdates.reduce((sum, middleNumber) => sum + parseInt(middleNumber), 0);
    console.log(sum)
}

function partTwo() {
    const input = syncReadFile("./input.txt");

    const rules = []
    const updates = []
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        if (row.includes("|")) {
            rules.push(row);
        } else if (row.includes(",")) {
            updates.push(row);
        }
    }

    const invalids = []
    for (let i = 0; i < updates.length; i++) {
        const elements = updates[i].split(",");
        let isValid = true


        for (let j = 0; j < elements.length; j++) {
            const e = elements[j];

            const otherElements = elements.filter((el) => el !== e)

            for (let k = 0; k < otherElements.length; k++) {
                const el = otherElements[k];
                const rule = rules.filter((rule) => rule.includes(el) && rule.includes(e));
                const [before] = rule[0].split("|");
                if (before === e && j > k) {
                    isValid = false
                }
            }
        }
        if (!isValid) {
            invalids.push(elements)
        }
    }

    for (let i = 0; i < invalids.length; i++) {
        const elements = invalids[i];

        for (let j = 0; j < elements.length; j++) {
            const ej = elements[j];

            for (let k = 0; k < elements.length; k++) {
                const ek = elements[k];

                const rule = rules.filter((rule) => rule.includes(ej) && rule.includes(ek));

                const [before] = rule[0].split("|");

                if (before === ej && j > k) {
                    elements[j] = ek
                    elements[k] = ej
                    i = 0
                    j = -1
                }
            }
        }
    }
    const invalidsMiddleNumbers = invalids.map((invalid) => invalid[Math.floor(invalid.length / 2)])
    const sum = invalidsMiddleNumbers.reduce((sum, middleNumber) => sum + parseInt(middleNumber), 0);
    console.log(sum)
}

// partOne()
partTwo()