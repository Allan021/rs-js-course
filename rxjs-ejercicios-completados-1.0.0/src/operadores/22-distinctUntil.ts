import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

//lo que hace basicamente es evitar o no emitir los valores que ya se hayan emitido y que en su parte de atras lo hayab emitido pero en funturas emisiones no hay problemas
const numbers$ = of<number | string>(
  1,
  3,
  2,
  "3",
  3,
  2,
  1,
  4,
  5,
  6,
  7,
  8,
  5,
  4,
  2
);

interface WorkMate {
  age: number;
  name: string;
}
const workMates: WorkMate[] = [
  { name: "Basilio", age: 25 },
  { name: "Alex", age: 24 },
  { name: "Basilio", age: 19 },
  { name: "Alex", age: 21 },
  { name: "Allan", age: 19 },
  { name: "Allan", age: 32 },
];

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

const workMates$ = from(workMates);
workMates$
  .pipe(distinctUntilChanged((prev, current) => prev.name === current.name))
  .subscribe(console.log);
