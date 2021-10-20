import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  throttleTime,
} from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(throttleTime(2000)).subscribe(console.log);
const $input = document.createElement("input");

document.querySelector("body").append($input);

fromEvent<KeyboardEvent>($input, "keyup")
  .pipe(pluck("target", "value"), throttleTime(1000), distinctUntilChanged())

  .subscribe(console.log);
