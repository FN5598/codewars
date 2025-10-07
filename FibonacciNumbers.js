function productFib(prod){
    let a = 0;
    let b = 1;
    while (a * b < prod) {
        const next = a + b;
        a = b;
        b = next;
    }
    if(a * b === prod) {
        return [a, b, true]
    } else {
        return [a, b, false]
    }
}

prod = 800;
console.log(productFib(prod));