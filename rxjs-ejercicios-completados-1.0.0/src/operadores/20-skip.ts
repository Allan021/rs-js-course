//skip
import { fromEvent, interval } from "rxjs";
import { map, skip, takeUntil, takeWhile, tap } from "rxjs/operators";

//takeWhile

const $boton = document.createElement("button");
$boton.innerText = "Detener Intervalo";

document.querySelector("body").append($boton);
const Btnclick$ = fromEvent<MouseEvent>($boton, "click").pipe(
  tap(() => console.log("Antes del skip")),
  skip(3), //en los primeros 3 click o emisiones del observable no e vamn a emitir por el skip ya despues si quiero
  tap(() => console.log("Despues el skip"))
);

const interval$ = interval(1000).pipe(takeUntil(Btnclick$));

interval$.subscribe({
  next: console.log,
  complete: () => console.info("Compleetado"),
});
