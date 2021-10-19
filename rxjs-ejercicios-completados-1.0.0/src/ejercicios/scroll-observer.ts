import { fromEvent } from "rxjs";
import { map, pluck, tap } from "rxjs/operators";

const $text = document.createElement("div");

$text.innerHTML = `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non orci velit. Suspendisse vehicula quam ut velit commodo, in aliquam ante imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non nulla nec nibh placerat ultricies. Praesent auctor at nisl ac pellentesque. Maecenas aliquam luctus elementum. Donec ante ex, vulputate id sem eget, faucibus viverra tortor. Aenean elementum faucibus quam quis dignissim. Pellentesque interdum pretium ipsum et dictum. Integer dignissim varius metus. Fusce eget massa leo. Vestibulum nulla dolor, dictum a risus in, aliquam consectetur quam. 
<br/>
<br/>

Ut sit amet ornare turpis, ac lacinia justo. Cras mi erat, sagittis eget metus sit amet, bibendum interdum ante. Maecenas molestie dui eu orci maximus, ut rutrum nulla blandit. Donec nibh lectus, tempus ut pretium ut, elementum ut nunc. Quisque pretium tincidunt commodo. Donec nec vulputate libero. Morbi placerat eleifend sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sed ipsum lectus. Nullam accumsan, nibh in accumsan bibendum, nibh neque posuere nulla,
<br/>

Proin volutpat, turpis fermentum scelerisque fermentum, quam sem suscipit lectus, eu varius purus purus eget tortor. Mauris sed purus vel diam scelerisque blandit nec vitae massa. Sed diam libero, tincidunt feugiat purus non, aliquet consequat turpis. Nunc posuere arcu eget ante vehicula, vitae laoreet urna semper. Nam ullamcorper nec ipsum at finibus. Pellentesque sodales ante dui, quis blandit ante laoreet eu. Suspendisse pulvinar,

Ut sit amet ornare turpis, ac lacinia justo. Cras mi erat, sagittis eget metus sit amet, bibendum interdum ante. Maecenas molestie dui eu orci maximus, ut rutrum nulla blandit. Donec nibh lectus, tempus ut pretium ut, elementum ut nunc. Quisque pretium tincidunt commodo. Donec nec vulputate libero. Morbi placerat eleifend sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sed ipsum lectus. Nullam accumsan, nibh in accumsan bibendum, nibh neque posuere nulla,
<br/>

Proin volutpat, turpis fermentum scelerisque fermentum, quam sem suscipit lectus, eu varius purus purus eget tortor. Mauris sed purus vel diam scelerisque blandit nec vitae massa. Sed diam libero, tincidunt feugiat purus non, aliquet consequat turpis. Nunc posuere arcu eget ante vehicula, vitae laoreet urna semper. Nam ullamcorper nec ipsum at finibus. Pellentesque sodales ante dui, quis blandit ante laoreet eu. Suspendisse pulvinar,

<br/>

Proin volutpat, turpis fermentum scelerisque fermentum, quam sem suscipit lectus, eu varius purus purus eget tortor. Mauris sed purus vel diam scelerisque blandit nec vitae massa. Sed diam libero, tincidunt feugiat purus non, aliquet consequat turpis. Nunc posuere arcu eget ante vehicula, vitae laoreet urna semper. Nam ullamcorper nec ipsum at finibus. Pellentesque sodales ante dui, quis blandit ante laoreet eu. Suspendisse pulvinar,

Ut sit amet ornare turpis, ac lacinia justo. Cras mi erat, sagittis eget metus sit amet, bibendum interdum ante. Maecenas molestie dui eu orci maximus, ut rutrum nulla blandit. Donec nibh lectus, tempus ut pretium ut, elementum ut nunc. Quisque pretium tincidunt commodo. Donec nec vulputate libero. Morbi placerat eleifend sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sed ipsum lectus. Nullam accumsan, nibh in accumsan bibendum, nibh neque posuere nulla,
<br/>

Proin volutpat, turpis fermentum scelerisque fermentum, quam sem suscipit lectus, eu varius purus purus eget tortor. Mauris sed purus vel diam scelerisque blandit nec vitae massa. Sed diam libero, tincidunt feugiat purus non, aliquet consequat turpis. Nunc posuere arcu eget ante vehicula, vitae laoreet urna semper. Nam ullamcorper nec ipsum at finibus. Pellentesque sodales ante dui, quis blandit ante laoreet eu. Suspendisse pulvinar,
  </p>`;

document.querySelector("hr").insertAdjacentElement("afterend", $text);

const calcularScroll = (doc): number => {
  return (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
};

// const mostarScroll = (doc): number => {
//   return doc.scrollHeight;
// };

const $scrollValue = document.querySelector(".progress-value");

const scrollEvent$ = fromEvent<Event>(document, "scroll");

// const showScrollObserver = scrollEvent$.pipe(
//   pluck("target", "documentElement"),
//   map((doc) => mostarScroll(doc)),
//   tap(console.log)
// );

// showScrollObserver.subscribe(console.log);

const heigthObserver$ = scrollEvent$.pipe(
  pluck("target", "documentElement"),
  map<any, number>((doc) => calcularScroll(doc))
);

heigthObserver$.subscribe((scroll: number) => {
  $scrollValue.setAttribute("style", `height:${100 - scroll}%`);
});
