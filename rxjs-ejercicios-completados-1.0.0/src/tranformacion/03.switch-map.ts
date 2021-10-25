import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mergeAll,
  pluck,
  switchMap,
} from "rxjs/operators";
import { GitHubUser, GitHubUsersRes } from "../interfaces/GitHubUser";

const $input = document.createElement("input");
const $lista = document.createElement("ol");
document.querySelector("body").append($input);
document.querySelector("body").append($lista);

const keyEvent$ = fromEvent<KeyboardEvent>($input, "keyup");

const generateCardUsers = (users: GitHubUser[]) => {
  users.forEach((user) => {
    console.log(user);
    const $li = document.createElement("li");
    const $img = document.createElement("img");
    const $body = document.createElement("div");
    $body.classList.add("card-body");
    $body.append(document.createElement("p"));

    $img.src = user.avatar_url;

    $li.classList.add("card");
    $li.append($img);
    $li.append($body);
    $lista.append($li);
  });
};

const busqueda$ = keyEvent$.pipe(
  debounceTime(1000),
  map<KeyboardEvent, string>((keyEvent) => keyEvent.target["value"]),
  switchMap<string, Observable<GitHubUsersRes>>((search) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${search}`)
  ),

  pluck<GitHubUsersRes, GitHubUser[]>("items")
);

const baseUrl = "http://httpbin.org/delay/1?arg=";

keyEvent$
  .pipe(
    map<KeyboardEvent, string>((keyEvent) => keyEvent.target["value"]),
    distinctUntilChanged(),
    switchMap((search) => ajax.getJSON(baseUrl + search))
  )
  .subscribe(console.log);
