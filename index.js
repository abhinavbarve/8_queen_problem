let correct_cases = []
let cases = 0;
for (let i = 11; i <= 18; i++) {
    for (let j = 21; j <= 28; j++) {
        if (checkVal(i, j) === false) { continue; };
        for (let k = 31; k <= 38; k++) {
            if (checkVal(i, j, k) === false) { continue; };
            for (let l = 41; l <= 48; l++) {
                if (checkVal(i, j, k, l) === false) { continue; };
                for (let m = 51; m <= 58; m++) {
                    if (checkVal(i, j, k, l, m) === false) { continue; };
                    for (let n = 61; n <= 68; n++) {
                        if (checkVal(i, j, k, l, m, n) === false) { continue; };
                        for (let o = 71; o <= 78; o++) {
                            if (checkVal(i, j, k, l, m, n, o) === false) { continue; };
                            for (let p = 81; p <= 88; p++) {
                                if (checkVal(i, j, k, l, m, n, o, p) === false) { continue; };
                                correct_cases.push([i, j, k, l, m, n, o, p]);
                            }
                        }
                    }
                }
            }
        }
    }
}

// check validity of any combination;
function checkVal() {
    let all = [...arguments];
    for (let i = 0; i < [...arguments].length; i++) {
        for (let j = 0; j < [...arguments].length; j++) {
            if (all[i] !== all[j]) {
                if ((flr(all[i] / 10) === flr(all[j] / 10)) || (all[i] % 10 === all[j] % 10) || Math.abs((flr(all[i] / 10) - flr(all[j] / 10)) / (all[i] % 10 - all[j] % 10)) === 1) {
                    return false;
                }
            }
        }
    }
    return true
}
function flr(x) { return Math.floor(x) };

// display chessboards
for (let h = 1; h <= 92; h++){
    $("#chessboard-wrapper").append(`<table cellspacing=0 id="cb${h}" class='chessboard'></table>`)
    for (let i = 1; i <= 8; i++) {
        $(`#cb${h}`).append(`<tr id="cb${h}r${i}" class="cb-row"></tr>`)
        for (let j = 1; j <= 8; j++) {
            $(`#cb${h}r${i}`).append(`<td id="cb${h}c${i}${j}" class="cb-cell"></td>`)
            if (correct_cases[h - 1].includes(Number(`${i}${j}`))) {
                $(`#cb${h}c${i}${j}`).append(`<img class="queen-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQci7TG_et476Y1_9ARyMz74accEnq_i9HMtA&usqp=CAU" height="100%" width="100%" />`);
            }
        }
    }
}