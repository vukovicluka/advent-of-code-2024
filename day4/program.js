import {syncReadFile} from "../utils/syncReadFile.js";

function partOne() {
    const input = syncReadFile("./input.txt");

    let counter = 0
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        const chars = row.split("")

        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];
            if (char === "X") {
                // right
                if (chars[j + 1] === "M") {
                    if (chars[j + 2] === "A") {
                        if (chars[j + 3] === "S") {
                            counter++
                        }
                    }
                }
                // left
                if (chars[j - 1] === "M") {
                    if (chars[j - 2] === "A") {
                        if (chars[j - 3] === "S") {
                            counter++
                        }
                    }
                }
                // vertical below
                if (input[i + 1] && input[i + 1][j] === "M") {
                    if (input[i + 2] && input[i + 2][j] === "A") {
                        if (input[i + 3] && input[i + 3][j] === "S") {
                            counter++
                        }
                    }
                }
                // diagonal left
                if (input[i + 1] && input[i + 1][j + 1] === "M") {
                    if (input[i + 2] && input[i + 2][j + 2] === "A") {
                        if (input[i + 3] && input[i + 3][j + 3] === "S") {
                            counter++
                        }
                    }
                }
                // diagonal right
                if (input[i + 1] && input[i + 1][j - 1] === "M") {
                    if (input[i + 2] && input[i + 2][j - 2] === "A") {
                        if (input[i + 3] && input[i + 3][j - 3] === "S") {
                            counter++
                        }
                    }
                }
                // vertical above
                if (input[i - 1] && input[i - 1][j] === "M") {
                    if (input[i - 2] && input[i - 2][j] === "A") {
                        if (input[i - 3] && input[i - 3][j] === "S") {
                            counter++
                        }
                    }
                }
                // above diagonal left
                if (input[i - 1] && input[i - 1][j - 1] === "M") {
                    if (input[i - 2] && input[i - 2][j - 2] === "A") {
                        if (input[i - 3] && input[i - 3][j - 3] === "S") {
                            counter++
                        }
                    }
                }
                // above diagonal right
                if (input[i - 1] && input[i - 1][j + 1] === "M") {
                    if (input[i - 2] && input[i - 2][j + 2] === "A") {
                        if (input[i - 3] && input[i - 3][j + 3] === "S") {
                            counter++
                        }
                    }
                }
            }
        }
    }

    console.log("COUNT", counter)
}

function partTwo() {
    const input = syncReadFile("./input.txt");

    let counter = 0
    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        const chars = row.split("")

        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];
            if (char === "S") {
                if (chars[j + 2] === "S") {
                    if (input[i + 2] && input[i + 2][j] === "M") {
                        if (input[i + 2] && input[i + 2][j + 2] === "M") {
                            if (input[i + 1] && input[i + 1][j + 1] === "A") {
                                counter++
                            }
                        }
                    }
                }

            }
            if (char === "M") {
                if (chars[j + 2] === "S") {
                    if (input[i + 2] && input[i + 2][j] === "M") {
                        if (input[i + 2] && input[i + 2][j + 2] === "S") {
                            if (input[i + 1] && input[i + 1][j + 1] === "A") {
                                counter++
                            }
                        }
                    }
                }

            }
            if (char === "S") {
                if (chars[j + 2] === "M") {
                    if (input[i + 2] && input[i + 2][j] === "S") {
                        if (input[i + 2] && input[i + 2][j + 2] === "M") {
                            if (input[i + 1] && input[i + 1][j + 1] === "A") {
                                counter++
                            }
                        }
                    }
                }
            }
            if (char === "M") {
                if (chars[j + 2] === "M") {
                    if (input[i + 2] && input[i + 2][j] === "S") {
                        if (input[i + 2] && input[i + 2][j + 2] === "S") {
                            if (input[i + 1] && input[i + 1][j + 1] === "A") {
                                counter++
                            }
                        }
                    }
                }
            }
        }
    }

    console.log("COUNT", counter)
}

partTwo();