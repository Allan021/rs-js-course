import { interval, Observer, timer } from "rxjs";
const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const interval$ = interval(1000);

const suscriber = interval$.subscribe(observer);
const timer$ = timer(2000);

setTimeout(() => {
  suscriber.unsubscribe();
}, 5000);

console.log(new Date(0));

const temporizadorObserver = timer$.subscribe((value) =>
  console.log("Time Out ", value)
);
const hoy = new Date().getSeconds();
const alarma$ = timer(3000, 1000);

alarma$.subscribe((value) => alert("Alarma a los " + value));
