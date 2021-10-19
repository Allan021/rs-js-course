/*map me filtra o me retorna un nuevo valor que emire el observable*/

import { fromEvent, Observer, range } from "rxjs";
import { map } from "rxjs/operators";

const $keyEvent = fromEvent<KeyboardEvent>(document, "keyup");

const observer: Observer<any> = {
  next: (value) => console.log("Next ", value),
  error: null,
  complete: () => console.info("Termine de emitir valores"),
};

const keyObservable$ = $keyEvent.pipe(map((ev) => ev.key));
const keyCodeObservable$ = $keyEvent.pipe(map((ev) => ev.code));

const subs = keyObservable$.subscribe((key: string) =>
  console.log("Tecla presionada ", key)
);

setTimeout(() => subs.unsubscribe(), 5000);

keyCodeObservable$.subscribe((keyCode: string) =>
  console.log("KeyCode presionada ", keyCode)
);

const numberFilter$ = range(10, 20).pipe(map((value) => value * 10));

numberFilter$.subscribe(observer);
