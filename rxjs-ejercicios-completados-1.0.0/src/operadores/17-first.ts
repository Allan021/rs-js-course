import { fromEvent } from "rxjs";
import { first, map, tap } from "rxjs/operators";

//first
const click$ = fromEvent<MouseEvent>(document, "click");

interface requiredParameters {
  clientX: number;
  clientY: number;
}
//bueno ahora hare la condicion del heigth
click$
  .pipe(
    map<MouseEvent, requiredParameters>(({ clientX, clientY }) => ({
      clientX,
      clientY,
    })),
    tap(() => console.log("Tap")),
    first((e) => e.clientY > 200)
  )
  .subscribe({
    next: (value) => console.log("[Next]", value),
    complete: () => console.info("Completado"),
  });
