import { fromEvent, interval } from "rxjs";
import { map, takeUntil, takeWhile, tap } from "rxjs/operators";

//takeWhile

const $boton = document.createElement("button");
$boton.innerText = "Detener Intervalo";

document.querySelector("body").append($boton);
const Btnclick$ = fromEvent<MouseEvent>($boton, "click").pipe(
  tap(() => console.log("Ta"))
);

const interval$ = interval(1000).pipe(takeUntil(Btnclick$));

interval$.subscribe({
  next: console.log,
  complete: () => console.info("Compleetado"),
});
