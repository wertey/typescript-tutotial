function add(a: number, b: number): number {
    return  a + b;
}

function toUpperCase(str: string) {
    return str.trim().toUpperCase();
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}


interface MyPositionWithDefault extends MyPosition{
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return  {x: a, y: undefined, default: a.toString()}
    }

    return {x: a , y: b}
}

console.log('empty', position());
console.log('one param', position(42));
console.log('two params', position(43, 43));

// сигнатура

let txt: (x: number, y: number) => number;
txt = function (x: number, y: number): number {
    return x + y;
}

// если нету в функциях return, то указывается void


// Именованная функция
function greet(name: string) {
    return 'hello ' + name
}
// Функциональное выражение
let greet2 = function(name: string) {
    return 'hello ' + name
}
// Выражение стрелочной функции
let greet3 = (name: string) => {
    return 'hello ' + name
}
// Сокращенное выражение стрелочной функции
let greet4 = (name: string) =>
    'hello ' + name
// Конструктор функции
let greet5 = new Function('name', 'return "hello " + name')