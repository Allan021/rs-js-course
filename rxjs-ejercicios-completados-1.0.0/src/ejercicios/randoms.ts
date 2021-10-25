import { interval, Subject } from "rxjs";
import { take, map } from "rxjs/operators";
/**
 * Ejercicio: Realizar que los dos observables finales,
 * emitan exactamente el mismo valor
 *
 * Tip: Hot Observable? subjects?
 */

(() => {
  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map(() => Math.round(Math.random() * 100))
  );
  // No tocar la creación del observable
  // ============================================

  // Estos dos observables deben de emitir exactamente los mismos valores

  //los subjects tambien son observers
  const subject$ = new Subject();
  //con el subject yo logro que todos mis observers tengan el mismo comportamineto
  reloj$.subscribe(subject$);

  subject$.subscribe((val) => console.log("obs1", val));
  subject$.subscribe((val) => console.log("obs2", val));
})();
