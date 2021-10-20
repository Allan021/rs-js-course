//scan
//me hace el seguimiento de los cambios que ocurren en el estado de la aplicacion

import { from } from "rxjs";
import { map, scan } from "rxjs/operators";

interface User {
  id?: string;
  email?: string;
  token?: string;
  isAutenticated?: boolean;
}

const user: User[] = [
  {
    id: "ace",
    email: "allancastro1912@gmail.com",
    token: null,
    isAutenticated: false,
  },
  {
    id: "ace",
    email: "allancastro1912@gmail.com",
    token: "283298319sdasd",
    isAutenticated: true,
  },
  {
    id: "ace",
    email: "allancastro1912@gmail.com",
    token: "hwe2he38972h12",
    isAutenticated: true,
  },
  {
    id: "ace",
    email: "allancastro1912@gmail.com",
    token: null,
    isAutenticated: false,
  },
];

//si quiero dar una emision del valor acrual de este objeto entonces me creare una nuevba instancia del mismo
const userObservable$ = from(user).pipe(
  scan<User>(
    (prevUser, currentUser) => {
      return { ...prevUser, ...currentUser };
    },
    { email: "" }
  )
);

//solo emitire los valores del Toke
const $tokenObservable$ = userObservable$.pipe(map((user) => user.token));

$tokenObservable$.subscribe(console.log);
