/*
フィボナッチ数列の項は前の2つの項の和である. 最初の2項を 1, 2 とすれば, 最初の10項は以下の通りである. 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

数列の項の値が400万以下の, 偶数値の項の総和を求めよ.
*/

export function main() {
    let i: number = 1;
    let rc: number;
    let sum: number = 0;
    while ((rc = fibo(i)) <= 4000000) {
        if (rc % 2 == 0) {
            sum += rc;
        }
        i++;
    }
    console.log("p002: recursive = " + sum.toString());

    i = 1;
    sum = 0;
    while ((rc = fibo_tailrec(i, 1, 1)) <= 4000000) {
        if (rc % 2 == 0) {
            sum += rc;
        }
        i++;
    }
    console.log("p002: tail recursive = " + sum.toString());

    console.log("p002: array = " + fibo_array().toString())
}

// 単純な再帰
// 本問題では大丈夫だけどいずれstack overflow
function fibo(n: number): number {
    let rc: number;
    if (n < 0) {
        return 0;
    }
    switch (n) {
        case 0:
            rc = 0;
            break;
        case 1:
            rc = 1;
            break;
        case 2:
            rc = 2;
            break;
        default:
            rc = fibo(n - 2) + fibo(n - 1);
            break;
    }
    return rc;
}

// 末尾再帰
// 慣れないと難解かも
// fibo1(n, 1, 1)
function fibo_tailrec(n: number, sm: number, a: number): number {
    let rc: number;
    if (n == 1) {
        return sm;
    } else {
        return fibo_tailrec(n - 1, sm + a, sm);
    }
}

// 配列
// 本来ならメモ化なのだが、線形に伸びていくのだから配列でいいじゃない＆JavaScriptのいい加減さを利用
// メモリ食い＆（再帰も同様だが）計算のオーバーフローが危うい
function fibo_array(): number {
    let fa: number[] = [1, 2];
    while (true) {
        let s: number = fa[fa.length - 1] + fa[fa.length - 2];
        if (s > 4000000) {
            break;
        }
        fa[fa.length] = s;
    }
    return fa.filter(function(n: number): boolean {
        return n % 2 == 0;
    }).reduce(function(prev, current: number): number{
        return prev + current;
    });
}

const p002 = (): number => {
    let fa: number[] = [1, 2];
    while (true) {
        let s: number = fa[fa.length - 1] + fa[fa.length - 2];
        if (s > 4000000) {
            break;
        }
        fa[fa.length] = s;
    }
    return fa.filter( (n: number): boolean => n % 2 == 0)
        .reduce( (prev, current) => prev + current);
};

export default p002;
