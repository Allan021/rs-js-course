import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

//takeWhile
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    takeWhile(({ clientY }) => clientY < 300)
  )
  .subscribe({
    next: (value) => console.log("[Next]:", value),
    complete: () => console.log("Terminado"),
  });
