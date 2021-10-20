import { from, of, pipe } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers$ = of(
  1,
  3,
  2,
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
  2,
  5,
  7,
  3,
  1,
  4,
  1,
  7
);

numbers$.pipe(distinct()).subscribe(console.log);

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

//le paso un paraemtro para que yo al querer compararlo con objetos se me facilite todo ya que al comparar con el === entonces alfgunas vbalidacones fallan por eso es que se pasa el parametro
const workMates$ = from(workMates).pipe(distinct((w) => w.name));

workMates$.subscribe(console.log);
