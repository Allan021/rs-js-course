import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, pluck } from "rxjs/operators";

const url = "https://httpbin.adorg/delay/1";

const manejaErrores = (err: AjaxError) => {
  return of({
    ok: err.status,
    message: err.message || "Hubo un error en la respuesta",
  });
};
ajax(url)
  .pipe(pluck("response"), catchError(manejaErrores))
  .subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(console.log(err)),
    complete: () => console.log("Completado"),
  });

ajax //el getJson ya me parsea la data sin necesidad de tener que usar el then o cosas asi
  .getJSON(url, {
    "Content-Type": "application/json",
    authorization: "Bearer #dqdqeqweqwe",
  })
  .pipe(catchError(manejaErrores))
  .subscribe((response) => {
    console.log("Respuesta: ", response);
  });
