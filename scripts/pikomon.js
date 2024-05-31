import { database } from "./database.js";

export const pikoList = () => {
  let pikoList = "";

  // for (const piko of database) {
  //   pikoList += `
  //       <article class="piko-card">
  //       <img src="${piko.imageUrl}" alt="${piko.name} image" class="piko-img">
  //           <div class="piko-info">
  //               <h3 class="piko-name">${piko.name}</h3>
  //               <p class="piko-category"><i>${piko.category}</i></p>
  //               <p class="piko-abilities">This Piko's main ability is: <br><b>${piko.abilities}</b></p>
  //               <p class="piko-weakness">This Piko's weakness is: <br><b>${piko.weakness}</b></p>
  //           </div>
  //       </article>
  //       `;
  // }

  for (const piko of database) {
    pikoList += `
        <article class="piko-card">
        <img src="${piko.imageUrl}" alt="${piko.name} image" class="piko-img">
            <div class="piko-info">
                <h3 class="piko-name">${piko.name}</h3>
                <p class="piko-category hidden"><i>${piko.category}</i></p>
                <p class="piko-abilities hidden">This Piko's main ability is: <br><b>${piko.abilities}</b></p>
                <p class="piko-weakness hidden">This Piko's weakness is: <br><b>${piko.weakness}</b></p>
            </div>
        </article>
        `;
  }

  return pikoList;
};
