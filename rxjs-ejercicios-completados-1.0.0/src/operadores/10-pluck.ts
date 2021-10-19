import { fromEvent, Observer } from "rxjs";
import { pluck } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => console.log("Next ", value),
  error: null,
  complete: () => console.info("Termine de emitir valores"),
};
const keyEvent$ = fromEvent<KeyboardEvent>(document, "keyup");

const observerTargetNme = keyEvent$
  .pipe(pluck("target", "baseURI"))
  .subscribe(observer);
