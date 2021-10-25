import { of } from "rxjs";
import { startWith } from "rxjs/operators";

const numeros$ = of(1, 4, 2, 32, 3, 23, 121).pipe(startWith("Pa", "chee"));

numeros$.subscribe(console.log);
