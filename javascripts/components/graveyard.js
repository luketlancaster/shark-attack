import utils from "../helpers/utils.js";
import personData from "../helpers/data/personData.js";

const buildGraveyard = () => {
  let domString = `
    <h2 class="col-12 text-center">Graveyard</h2>
    <div class="d-flex flex-wrap">
  `;

  personData.getDeadPersons().forEach(dead => {
    domString += `
      <div class="card col-4 person-card">
        <div class="card-body">
          <h5 class="card-title">${dead.name}</h5>
          <button id="${dead.id}" class="btn btn-success revive-btn">MAKE ALIVE!!!</button>
        </div>
      </div>
    `;
  })

  domString += `</div>`;

  utils.printToDom("graveyard", domString);
}

export default { buildGraveyard }
