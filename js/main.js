import { countAvg, countAvgThree } from "./modules/avg.js";
//export default importuojasi be {}
import makeDoubleAndPlus, { colors } from "./modules/count.js";
import { p } from "./modules/data.js";
// import * as avg from './modules/avg.js';

console.log("main");
const appEl = document.getElementById("app");
appEl.innerHTML = p;
console.log("colors===", colors);

// sukurti funkcija kuri priima sk argumenta. padvigubina argumenta ir prideda 10 ir grazina
// perkelti makeDoubleAndPlus i count.js ir export import

const nr1 = makeDoubleAndPlus(10);
console.log("nr1 ===", nr1); // istestuoti ar veikia
const nr2 = makeDoubleAndPlus(100);
console.log("nr2 ===", nr2); // istestuoti ar veikia

const nr3 = countAvg(100, 150);
console.log("nr3 ===", nr3); // istestuoti ar veikia
const nr4 = countAvgThree(100, 150, 250);
console.log("nr4 ===", nr4); // istestuoti ar veikia

// sukurti funkcija kuri ima 2 argumenus. pirmas argumentas yra reiksme, ntras argumentas yra el html elementas kur ta reiksme atspaudinti html
// takeAndPrint(500, appEl)
// makeLiAndAppend(obj, appEl)

// perkelti makeDoubleAndPlus i count.js ir export import
