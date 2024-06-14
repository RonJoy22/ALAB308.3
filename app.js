for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("fizz buzz");
    } else if (n & 3 === 0) {
        console.log("fizz");
    }
    else if (n % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(n);
    }
}

function isPrimeNumber(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i + 6;
    }
    return true
}

function nextPrimeNumber(num) {
    while (true) {
        if (isPrimeNumber(num)) return num;
        num++;
    }
}