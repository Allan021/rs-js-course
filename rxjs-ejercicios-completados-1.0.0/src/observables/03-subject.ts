//Crear los observables manualmente es mas tedioso

import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Valor ", value),
  error: (err) => console.warn("Error ", err),
  complete: () => console.info("Terminado"),
};

const interval$ = new Observable<number>((susc) => {
  const intervalId = setInterval(() => {
    susc.next(Math.random());
  }, 1000);
  return () => {
    clearInterval(intervalId);
    console.log("Limpiado");
  };
});

const subject$ = new Subject();

const pollo = interval$.subscribe(subject$);

const suscriber = subject$.subscribe(observer);
const suscriber2 = subject$.subscribe(observer);

//como estos 2 weyes estan suscritos al subject entonces ciando el subject emite un valor o termina se los notifica a los otros 2
setTimeout(() => {
  subject$.next(32);
  subject$.complete();
  pollo.unsubscribe(); //si,los termino en este punto con es subject los demas tambien
}, 4000);
