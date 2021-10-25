import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, pluck } from "rxjs/operators";

//Meotodos post-put-delete
const url = "https://httpbin.org/delay/1";
const manejaErrores = (err: AjaxError) => {
  return of({
    ok: err.status,
    message: err.message || "Hubo un error en la respuesta",
  });
};

/**Peticion Post */
ajax
  .post(
    url,
    {
      id: "123",
      email: "123123",
    },
    { "Content-type": "application/json", authorization: "Bearer" }
  )
  .pipe(catchError(manejaErrores))
  .subscribe(console.log);
/**Peticion Put */
ajax
  .put(
    url,
    {
      id: "123",
      email: "123123",
    },
    { "Content-type": "application/json", authorization: "Bearer" }
  )
  .pipe(catchError(manejaErrores))
  .subscribe(console.log);
/**Peticion Delete */
ajax
  .delete(url, { "Content-type": "application/json", authorization: "Bearer" })
  .pipe(catchError(manejaErrores))
  .subscribe(console.log);

ajax({
  url,
  headers: {
    "Content-type": "application/json",
    authorization: "Bearer",
  },
  body: {
    id: 1,
    name: "allan",
  },
  method: "PUT",
})
  .pipe(pluck("response"))
  .subscribe({
    next: (value) => console.log("Resp custom: ", value),
  });
