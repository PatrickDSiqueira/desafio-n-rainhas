console.clear()
let n = 5;
let table = [];

for (let lines = 0; lines < n; lines++) {
    table[lines] = [];

    for (let columns = 0; columns < n; columns++) {

        if (checkLine(lines)) {
            if (checkColumn(lines, columns)) {
                if (checkDiagonalPrincipal(lines, columns)) {
                    if (checkDiagonalSecodary(lines, columns)) {
                        table[lines][columns] = 1;
                        continue;
                    }
                }
            }
        }

        table[lines][columns] = 0;
    }
}

function checkLine(line) {

    for (let i = 0; i < table[line].length; i++) {

        if (table[line][i] === 1) {
            return false;
        }
    }

    return true;
}

function checkColumn(lines, column) {

    for (let i = 0; i < lines; i++) {

        if (table[i][column] === 1) {
            return false;
        }
    }

    return true;
}

function checkDiagonalPrincipal(lines, column) {

    let propor = lines + column;

    let analyzeLine = propor;

    let analyzeColumn = 0;

    let check = true;

    if (propor >= (table.length - 1)) {

        analyzeColumn = propor - (table.length - 1);

        analyzeLine = propor - analyzeColumn;
    }

    do {

        if (table[analyzeLine][analyzeColumn] === 1) {

            check = false;
        }

        analyzeLine--;
        analyzeColumn++;

    } while (analyzeLine > 0)

    return check;
}

function checkDiagonalSecodary(lines, column) {

    let propor = lines - column;

    let check = true;

    if (!lines && !column) {

        return true;
    }

    let analizyLine = 0;
    let analizyColumn = 0;

    if (propor === 0) {

        do {
            if (table[analizyLine][analizyColumn] === 1) {
                check = false;
            }

            analizyColumn++;
            analizyLine++;

        } while (check || analizyLine < lines || analizyColumn < column)


    } else if (propor < 0) {
        analizyLine = 0;

        analizyColumn = (-1 * propor)

        do {

            if (table[analizyLine][analizyColumn] === 1) {
                check = false;
                break;
            }

            analizyColumn++;
            analizyLine++;

        } while (analizyLine < (table.length - 1))

    } else {
    }
    return check;

}

for (let lines = 0; lines < n; lines++) {
    console.log(table[lines]);
}
