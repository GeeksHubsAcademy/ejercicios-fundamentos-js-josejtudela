let suma = (a,b) => validarNumero(a,b) ? a + b : 'La suma debe realizarse con variables tipo number';
let resta = (a,b) => validarNumero(a,b) ? a - b : 'La resta debe realizarse con variables tipo number';
let multiplica = (a,b) => validarNumero(a,b) ? a * b : 'La multiplicación debe realizarse con variables tipo number';
let divide = (a,b) => {
    if(validarNumero(a,b) && b !== 0){
        return a/b;
    }else{
        return 'La división debe realizarse con variables tipo number y b debe ser distinto de 0';
    }
}

let validarNumero = (a,b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    suma,
    resta,
    multiplica,
    divide
}