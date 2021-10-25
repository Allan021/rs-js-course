import { concat, interval } from "rxjs";
import { map, take } from "rxjs/operators";

const interval1$ = interval(1000).pipe(take(3));
const interval2$ = interval(1000).pipe(
  take(5),
  map((value) => value * 10)
);

const result$ = concat(interval1$, interval2$);

result$.subscribe(console.log);
