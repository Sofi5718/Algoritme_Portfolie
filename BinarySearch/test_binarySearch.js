import { binarySearch } from "./binarySearch.js";

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

let index = binarySearch(27, values);
console.log(`tallet 27 er på index ${index}`);
