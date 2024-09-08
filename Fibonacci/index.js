function isFibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }
    
    let a = 0, b = 1;
    let next = a + b;
    
    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }
    
    return false;
}

const numero = 4;

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
