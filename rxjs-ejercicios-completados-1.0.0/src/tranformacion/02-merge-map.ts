import { fromEvent, interval, merge, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

//merge Map
const letras$ = of("a", "b", "c", "d");

letras$.pipe(
  mergeMap((letra) =>
    interval(1000).pipe(
      map((i) => letra + i),
      take(4)
    )
  )
);
const $p = document.createElement("p");
const $span = document.createElement("span");
//lograr saber cuanto tiempo el usuario presiono el click
$p.innerText = "Usted dio click: ";
document.querySelector("body").append($p);
document.querySelector("body").append($span);

const mousedown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup");
const interval$ = interval();

mousedown$.pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$)))).subscribe({
  next: (seg) => ($span.innerText = `${seg} segundos`),
});
