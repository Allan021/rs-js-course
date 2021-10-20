import { from, interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5, 8];

const numberReducer = (prev: number, current: number) => {
  return prev + current;
};

const suma = numeros.reduce(numberReducer);
console.log(suma);

const numbers$ = from(numeros).pipe(tap(console.log), reduce(numberReducer));

numbers$.subscribe((finalValue) => console.log("Numero final:" + finalValue));

//hacerlo con un intervalo

const $numbers = interval(1000).pipe(
  take(10),
  tap(console.log),
  reduce(numberReducer)
);

$numbers.subscribe((value) => console.log("Valor Final:", value));
