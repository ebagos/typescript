import { callbackify } from "util";

/*
5000個以上の名前が書かれている46Kのテキストファイル names.txt を用いる. まずアルファベット順にソートせよ.

のち, 各名前についてアルファベットに値を割り振り, リスト中の出現順の数と掛け合わせることで, 名前のスコアを計算する.

たとえば, リストがアルファベット順にソートされているとすると, COLINはリストの938番目にある. またCOLINは 3 + 15 + 12 + 9 + 14 = 53 という値を持つ. よってCOLINは 938 × 53 = 49714 というスコアを持つ.

ファイル中の全名前のスコアの合計を求めよ.
*/
export function main() {
    const fs = require('fs');
    let text: string = fs.readFileSync("names.txt", 'utf-8');
    text = text.replace(/\"/g, "");
    let names: string[] = text.split(",").sort();
    let sum: number = 0;
    for (let i: number = 0; i < names.length; i++) {
        sum += calc(i + 1, names[i]);
    }
    console.log("p022: " + sum.toString());
}

function calc(x: number, s: string): number {
    const a: number = "A".charCodeAt(0);
    let sum: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        sum += s.charCodeAt(i) - a + 1;
    }
    return x * sum;
}