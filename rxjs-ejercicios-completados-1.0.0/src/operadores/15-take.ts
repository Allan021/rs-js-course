import { of } from "rxjs";
import { take } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

const numbersTil5$ = numbers$.pipe(take(6));

numbersTil5$.subscribe({
  next: (value: number) => console.log("Value: " + value),
  complete: () => console.info("Termine de escuchar valores"),
});
