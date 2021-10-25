import { ajax } from "rxjs/ajax";
import { switchMap, map } from "rxjs/operators";
import { zip, of } from "rxjs";

(() => {
  // No tocar ========================================================
  const SW_API = "https://swapi.dev/api";
  const getRequest = (url: string) => ajax.getJSON<any>(url);
  // ==================================================================

  // Realizar el llamado al URL para obtener a Luke Skywalker
  getRequest(`${SW_API}/people/2`)
    .pipe(
      // Realizar los operadores respectivos aquí

      // NO TOCAR el subscribe ni modificarlo ==
      switchMap((resp) => zip(of(resp), getRequest(`${resp.species[0]}`))),
      map(([personaje, human]) => ({ personaje, human }))
    )
    .subscribe(console.log);

  // ==
  // =======================================
})();
