/*
次の情報が与えられている.
1900年1月1日は月曜日である.
9月, 4月, 6月, 11月は30日まであり, 2月を除く他の月は31日まである.
2月は28日まであるが, うるう年のときは29日である.
うるう年は西暦が4で割り切れる年に起こる. しかし, 西暦が400で割り切れず100で割り切れる年はうるう年でない.
20世紀（1901年1月1日から2000年12月31日）中に月の初めが日曜日になるのは何回あるか?
*/

let daysOfMonth: number[] = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isUru(year: number): number {
    let rc = 0;
    if (year % 4 == 0) {
        rc = 1;
        if (year % 100 == 0 && year % 400 != 0) {
            rc = 0;
        }
    }
    return rc;
}

function isNextSunday(days: number): boolean {
    let rc: boolean = false;
    if (days % 7 == 6) {
        rc = true;
    } else {
        rc = false;
    }
    return rc;
}

export function main() {
    let count: number = 0;
    let days: number = daysOfMonth.reduce((e,p) => {return e+p}) + isUru(1900);
    if (isNextSunday(days)) {
        count++;
    }
    for (let year: number = 1901; year <= 2000; year++) {
        for (let month: number = 1; month <= 12; month++) {
            days += daysOfMonth[month];
            if (month == 2) {
                days += isUru(year);
            }
            if (isNextSunday(days)) {
                if (!(year == 2000 && month == 12)) {
                    count++;
                }
            }
        }
    }
    console.log("p019: " + count.toString());
}