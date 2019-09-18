/*
各文字はそれぞれ一意のコードに割り当てられている. よく使われる標準としてASCII (American Standard Code for Information Interchange) がある. ASCIIでは, 大文字A = 65, アスタリスク (*) = 42, 小文字k = 107というふうに割り当てられている.

モダンな暗号化の方法として, テキストファイルの各バイトをASCIIに変換し, 秘密鍵から計算された値とXORを取るという手法がある. XOR関数の良い点は, 暗号化に用いたのと同じ暗号化鍵でXORを取ると平文を復号できる点である. 65 XOR 42 = 107であり, 107 XOR 42 = 65である.

破られない暗号化のためには, 鍵は平文と同じ長さのランダムなバイト列でなければならない. ユーザーは暗号文と暗号化鍵を別々の場所に保存する必要がある. また, もし一方が失われると, 暗号文を復号することは不可能になる.

悲しいかな, この手法はほとんどのユーザーにとって非現実的である. そこで, 鍵の変わりにパスワードを用いる手法が用いられる. パスワードが平文より短ければ (よくあることだが), パスワードは鍵として繰り返し用いられる. この手法では, 安全性を保つために十分長いパスワードを用いる必要があるが, 記憶するためにはある程度短くないといけない.

この問題での課題は簡単になっている. 暗号化鍵は3文字の小文字である. cipher.txtは暗号化されたASCIIのコードを含んでいる. また, 平文はよく用いられる英単語を含んでいる. この暗号文を復号し, 平文のASCIIでの値の和を求めよ.
*/
/*
通常英文では"the"が一番出現頻度が高いといわれるが、スペースのほうが多いだろうというかなりあれな根拠で解く
*/
function counter(str: string, seq: string): number {
    return str.split(seq).length - 1;
}

export function main() {
    const fs = require('fs');
    let text: string = fs.readFileSync("cipher.txt", 'utf-8');
    text = text.replace(/\n/g, "");
    let strs: string[] = text.split(',');
    let codes: number[] = [];
    for (let i: number = 0; i < strs.length; i++) {
        codes.push(parseInt(strs[i]));
    }
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let maxSpace: number = 0;
    let maxSeed: string = "";
    let maxText: string = "";
    for (let a0: number = 0; a0 < alphabet.length; a0++) {
        for (let a1: number = 0; a1 < alphabet.length; a1++) {
            for (let a2: number = 0; a2 < alphabet.length; a2++) {
                let seed: number[] = [];
                seed.push(alphabet.charCodeAt(a0));
                seed.push(alphabet.charCodeAt(a1));
                seed.push(alphabet.charCodeAt(a2));
                let ntext: string[] = [];
                for (let i: number = 0; i < codes.length; i++) {
                    ntext.push(String.fromCharCode(codes[i] ^ seed[i % 3]));
                }
                let stext: string = ntext.join('');
                let spaces: number = counter(stext, " ");
                if (maxSpace < spaces) {
                    maxSpace = spaces;
                    maxSeed = String.fromCharCode(seed[0]) + String.fromCharCode(seed[1]) + String.fromCharCode(seed[2]);
                    maxText = stext;
                }
            }
        }
    }
    console.log("p059: \n" + maxText);
    console.log(maxSeed);
}