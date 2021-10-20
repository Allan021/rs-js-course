import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

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

const workMates$ = from(workMates);
workMates$.pipe(distinctUntilKeyChanged("name")).subscribe(console.log);
