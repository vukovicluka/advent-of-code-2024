import {syncReadFile} from "../utils/syncReadFile.js";

function main() {
    const inputArray = syncReadFile("./input.txt");
    console.log(inputArray);
}

main()