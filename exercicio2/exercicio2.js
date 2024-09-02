let numero = 2;

let a = 0;

let b = 1;

let c = 0;

if (!Number.isInteger(numero)) {
    console.log("Insira um número inteiro por favor!");
} else {
    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }

    if (c == numero || numero == 0) {
        console.log(numero + " pertence a sequência de Fibonacci.");
    } else {
        console.log(numero + " não pertence a sequência de Fibonacci.");
    }
}

