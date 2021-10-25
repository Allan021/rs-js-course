import { fromEvent, merge } from "rxjs";
import { map, pluck, take } from "rxjs/operators";
const keyEvent$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  pluck("type")
);
const click$ = fromEvent<KeyboardEvent>(document, "click").pipe(pluck("type"));

merge(click$, keyEvent$).subscribe(console.log);
