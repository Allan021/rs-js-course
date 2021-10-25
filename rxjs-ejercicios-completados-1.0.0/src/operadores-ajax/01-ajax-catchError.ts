import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, pluck } from "rxjs/operators";

const manejaErrores = (err: AjaxError) => {
  return of(err.response);
};

ajax("https://api.github.com/users?per_page=5")
  .pipe(pluck("response"), catchError(manejaErrores))
  .subscribe(console.log);
