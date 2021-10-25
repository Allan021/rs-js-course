import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax
  .getJSON(url, {
    "Content-Type": "application/json",
    authorization: "Bearer #dqdqeqweqwe",
  })
  .subscribe((response) => {
    console.log("Respuesta: ", response);
  });
