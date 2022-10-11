function PassGenerate() {
    let b = "";
    for (let i = 0; i < 4; i++) {
        let a = String.fromCharCode(Math.floor(Math.random() * 26 + 97))
        let y = String(Math.floor(Math.random() * 10))
        b += a + y;
    }
    console.log(b);
}
PassGenerate();


function pass() {
    let hi = 8;
    how = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    sum = "";
    for (let i = 0, n = how.length; i < hi; ++i) {
        sum += how.charAt(Math.floor(Math.random() * n))
    }
    console.log(sum);
}

pass();


