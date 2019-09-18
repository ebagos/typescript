/*
1 から 5 までの数字を英単語で書けば one, two, three, four, five であり, 全部で 3 + 3 + 5 + 4 + 4 = 19 の文字が使われている.
では 1 から 1000 (one thousand) までの数字をすべて英単語で書けば, 全部で何文字になるか.
注: 空白文字やハイフンを数えないこと. 例えば, 342 (three hundred and forty-two) は 23 文字, 115 (one hundred and fifteen) は20文字と数える. なお, "and" を使用するのは英国の慣習.
*/
interface inumbers {
    [key: number]: string;
}

const numbers: inumbers = {
    1:"one", 2:"two", 3:"three", 4:"four", 5:"five",
    6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten",
    11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen",
    16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen", 20:"twenty",
    30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty",
    90:"ninety", 1000:"onethousand"
};

function numberToWord(num: number): string {
    if (numbers[num] != undefined) {
        return numbers[num];
    } else if (num < 100) {
        let a: number = num % 10;
        let b: number = Math.floor(num / 10) * 10;
        return numberToWord(b) + numberToWord(a);
    } else {
        let a: number = num % 100;
        let b: number = Math.floor(num / 100);
        if (a == 0) {
            return numberToWord(b) + "handred";
        } else {
            return numberToWord(b) + "handredand" + numberToWord(a);
        }
    }
}

function toCharacterNum(word: string): number {
    let len: number = word.length;
    let count: number = 0;
    for (let i: number = 0; i < len; i++) {
        if (word.charAt(i) == " " || word.charAt(i) == "-") {
            count++;
        }
    }
    return len - count;
}

export function main() {
    let words: string = "";
    for (let i: number = 1; i <= 1000; i++) {
        words += numberToWord(i);
    }
    console.log("p017: " + toCharacterNum(words).toString());
}