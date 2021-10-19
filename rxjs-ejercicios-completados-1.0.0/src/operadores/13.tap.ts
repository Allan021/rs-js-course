import { Observer } from "rxjs";
import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

export const observer: Observer<any> = {
  next: (value) => console.log("Next ", value),
  error: null,
  complete: () => console.info("Termine de emitir valores"),
};

const numbers$ = range(10, 10);

const suscNumber = numbers$
  .pipe(
    tap((x) => console.log("Iniciando: ", x)), //efecto secundario que no retorna nada
    map((x) => x * 10),
    tap(
      (x) => console.log("Terminando: ", x),
      null,
      () => console.log("Termine mi emision")
    ) //efecto secundario que no retorna nada
  )
  .subscribe(console.log);

setTimeout(() => {
  suscNumber.unsubscribe();
}, 12);
