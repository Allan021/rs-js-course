//Range

import { Observer, range } from "rxjs";
const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.warn("error [obs]:", error),
  complete: () => console.info("completado [obs]"),
};

const obs$ = range(22, 20); //quiere decir que empezara a emitir desde el 2 20 emisiones de valores
console.info("Inicio");
const suscribe = obs$.subscribe(observer);
console.info("Fin");

//oh entonces esto servira para emitir varios valores sincronos
