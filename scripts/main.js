import { pikoList } from "./pikomon.js";

const container = document.querySelector("#container");
const pikoHTML = pikoList();
container.innerHTML = pikoHTML;
