//const jest = require('jest');
const calc = require('./calculadora');
const sum = calc.suma;
const resta = calc.resta;
const multiplica = calc.multiplica;
const divide = calc.divide;

describe('calculadora', () => {
    describe('Test para la suma',()=>{
        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
        });
        test('adds -1 + -2 to equal -3', () => {
            expect(sum(-1, -2)).toBe(-3);
        });
        test('adds \'1\' + 2 to equal error', () => {
            expect(sum('1', 2)).toBe('La suma debe realizarse con variables tipo number');
        });
        test('adds \'1\' + \'1\' to equal error', () => {
            expect(sum('1', '2')).toBe('La suma debe realizarse con variables tipo number');
        });
    })
    describe('Test para la resta',()=>{
        test('adds 1 - 2 to equal -1', () => {
            expect(resta(1, 2)).toBe(-1);
        });
        test('adds -1 + -2 to equal 1', () => {
            expect(resta(-1, -2)).toBe(1);
        });
        test('adds \'1\' - 2 to equal error', () => {
            expect(resta('1', 2)).toBe('La resta debe realizarse con variables tipo number');
        });
        test('adds \'1\' - \'1\' to equal error', () => {
            expect(resta('1', '2')).toBe('La resta debe realizarse con variables tipo number');
        });
    });
});
