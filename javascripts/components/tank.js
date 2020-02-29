import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

const tankBuilder = () => {
  let domString = `
    <div class="card shark-tank">
      <div class="card-header">
        Shark Tank
      </div>
      <ul class="list-group list-group-flush">
  `
  personData.getAlivePersons().forEach(person => {
    domString += `
      <li class="list-group-item">${person.name}</li>
    `;
  })

  domString +=`
      </ul>
    </div>
  `;
  utils.printToDom('tank', domString);
};

export default { tankBuilder }
