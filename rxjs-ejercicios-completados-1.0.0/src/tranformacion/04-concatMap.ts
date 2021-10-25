import { fromEvent, interval } from "rxjs";
import { concatMap, take } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(concatMap(() => interval(1000).pipe(take(4))))
  .subscribe(console.log);
