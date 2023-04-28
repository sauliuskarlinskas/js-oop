console.clear();
import { School } from "./School.js";

const zuikiu = new School('Zuikiu');
console.log(zuikiu);

console.log(zuikiu.addStudent('Petras'));
console.log(zuikiu.addStudent('Maryte'));
console.log(zuikiu.addStudent('Jonas'));
console.log(zuikiu.addStudent('Ona'));
console.log(zuikiu);

console.log(zuikiu.description());

zuikiu.addMark('Petras', 10);
zuikiu.addMark('Petras', 2);
zuikiu.addMark('Maryte', 2);
zuikiu.addMark('Maryte', 8);
zuikiu.addMark('Jonas', 8);
zuikiu.addMark('Jonas', 7);
zuikiu.addMark('Jonas', 6);
zuikiu.addMark('Ona', 4);
zuikiu.addMark('Ona', 6);
zuikiu.addMark('Ona', 8);
zuikiu.addMark('Ona', 10);

console.log(zuikiu.students);

console.log(zuikiu.average('Petras'));
console.log(zuikiu.average('Maryte'));
console.log(zuikiu.average('Jonas'));
console.log(zuikiu.average('Ona'));

zuikiu.addStudent('Abrahimas');
// zuikiu.addMark('Abrahimas', 9);
console.log(zuikiu.average('Abrahimas'));

console.log(zuikiu.average('Al Bundy'));