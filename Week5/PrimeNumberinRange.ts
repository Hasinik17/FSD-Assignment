function generatePrimes(start: number, end: number): void {
    console.log("Prime numbers between " + start + " and " + end + " are:");

    for (let num: number = start; num <= end; num++) {
        let isPrime: boolean = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (let i: number = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}

// Example
generatePrimes(1, 50);