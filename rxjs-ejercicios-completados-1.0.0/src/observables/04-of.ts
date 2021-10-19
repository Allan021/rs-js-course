import { Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const obs$ = of<number>(2, 3, 1, 2, 3, 43, 4354, 535, 345, 345, 32 / 0);

const suscriber = obs$.subscribe(observer);
