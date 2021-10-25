import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

forkJoin({
  user: ajax.getJSON("https://api.github.com/users/allan021"),
  repos: ajax.getJSON("https://api.github.com/users/Allan021/repos"),
  gists: ajax.getJSON("https://api.github.com/users/Allan021/gists"),
}).subscribe(console.log); //basicamnete me traera todos los valores cuando el ultimo elemento traiga la data, y cuando uno falla se fallan todos
