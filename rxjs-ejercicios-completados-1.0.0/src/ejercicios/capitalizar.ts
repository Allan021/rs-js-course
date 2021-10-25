//con un arreglo de strings capitalizar cada nombre

import { from } from "rxjs";
import { map } from "rxjs/operators";

const personajes = ["batman", "robin", "joker", "super man", "wolverine"];

const capitalizar = (palabra: string) =>
  palabra.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

const capitalize$ = from(personajes);

capitalize$.pipe(map(capitalizar)).subscribe(console.log);
