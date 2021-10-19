/**
 * of: Genera un observable a partir de una secuencia de valores
 * from:
 *
 */

import { from, Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Next ", value),
  error: null,
  complete: () => console.info("Termine de emitir valores"),
};

//cuando se usa un of o un from
// const source$ = of([1, 2, 3, 4, 5, 6, 6]);
// const source$ = from([{ nombre: "Allan" }, { nombre: "Apu" }]); //emite un valor a partir de cualquier cosa

// source$.subscribe(observer);

// const source$ = from(fetch("https://api.github.com/users/allan021"));

// source$.subscribe(async (resp) => {
//   console.log(await resp.json());
// });

//ese * quire decir que es una funcion generadora
const generador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};
const myGenerador = generador();

from(myGenerador).subscribe(observer);
