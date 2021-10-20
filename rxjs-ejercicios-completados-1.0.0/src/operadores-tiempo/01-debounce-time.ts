import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(debounceTime(2000)).subscribe(console.log);
const $input = document.createElement("input");

document.querySelector("body").append($input);

fromEvent<KeyboardEvent>($input, "keyup")
  .pipe(pluck("target", "value"), debounceTime(1000), distinctUntilChanged())

  .subscribe(console.log);
