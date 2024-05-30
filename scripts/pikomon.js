import { database } from "./database.js";

export const pikoList = () => {
  let pikoList = "";

  for (const piko of database) {
    pikoList += `
        <article class="piko">
        <img src="${piko.imageUrl}" alt="${piko.name} image" class="piko_image">
            <div class="piko_details">
                <h3 class="piko-name">${piko.name}</h3>
                <h4 class="piko-category">${piko.category}</h4>
                <p class="piko-abilities">This Piko's main ability is: ${piko.abilities}</p>
                <p class="piko-weakness">This Piko's weakness is: ${piko.weakness}</p>
            </div>
        </article>
        `;
  }
  return pikoList;
};
