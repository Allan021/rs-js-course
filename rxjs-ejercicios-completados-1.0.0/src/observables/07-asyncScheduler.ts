import { asyncScheduler } from "rxjs";

///AsyncScheluder es para realizar un setTimeOute o un setInterval pero en lugar de crear un Observable. crea una suscripcion

//esto me sirve para ejecutar una funcion en un determinado tiempo

//Mock del setTimeout
/* const saludar = (name: string) => {
  console.log(`Hola mi pana ${name}`);
}; */

//cuando solo quiero ejecutar algo una sola vez utilizare el asyncScheciler con una arrowFunction y si quiero hacer un intervalo entonces lo hare con una funcion nativa de js
/* asyncScheduler.schedule(saludar, 1000, "Allan"); */

//AsyncScheduler me permite crear un intervalo o un setTimeout con la diferencia que me retorna una suscripcion al enviar la funciuon
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("El valor es : " + state);

    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

asyncScheduler.schedule(() => subs.unsubscribe(), 10000);
