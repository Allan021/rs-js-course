import { combineLatest, fromEvent, merge } from "rxjs";
import { map, pluck, take } from "rxjs/operators";
// const keyEvent$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
//   pluck("type")
// );
// const click$ = fromEvent<KeyboardEvent>(document, "click").pipe(pluck("type"));

// combineLatest([click$, keyEvent$]).subscribe(console.log);

const getInputStream = (input: HTMLElement) =>
  fromEvent(input, "keyup").pipe(pluck("target", "value"));

const $inputName = document.createElement("input");
const $inputPassword = document.createElement("input");

$inputName.placeholder = "Tu nombre";
$inputPassword.placeholder = "********";
$inputPassword.type = "password";

document.querySelector("body").append($inputName, $inputPassword);

combineLatest([
  getInputStream($inputName),
  getInputStream($inputPassword),
]).subscribe(console.log);
