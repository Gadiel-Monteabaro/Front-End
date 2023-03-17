// const chanchos = require("./export");

// Import actual
import chanchos, { chanchosTristes, otrosChanchos } from './export.mjs'; // no podemos utilizar import fuera de un modulo. utilizamos la extension ".mjs", sino estamos trabajando con un archivo package.json.

console.log(chanchos);
console.log(otrosChanchos)
console.log(chanchosTristes);