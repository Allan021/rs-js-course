import { from, Observer, range } from "rxjs";
import { filter, map } from "rxjs/operators";

export const observer: Observer<any> = {
  next: (value) => console.log("Next ", value),
  error: null,
  complete: () => console.info("Termine de emitir valores"),
};

//filter me filtra la salida de un observable

const numeros$ = range(20, 30).pipe(
  filter((value) => value % 2 === 0),
  map((value) => value * 10)
);

//numeros$.subscribe(observer);

interface Character {
  name: string;
  id: number;
  type: string;
}
const characters: Character[] = [
  { id: 1, name: "John Wick", type: "Hero" },
  { id: 2, name: "Bruce Wane", type: "Hero" },
  { id: 3, name: "Jocker", type: "Villan" },
  { id: 4, name: "Mojojojo", type: "Villan" },
];

const characters$ = from(characters);

/** */
console.log("Heores");
const heroesSuc = characters$
  .pipe(filter((character) => character.type === "Hero"))
  .subscribe(observer);

console.log("Villanos");

const villianSub = characters$
  .pipe(filter((character) => character.type === "Villan"))
  .subscribe(observer);
