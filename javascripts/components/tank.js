import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

const tankBuilder = () => {
  let domString = `Hello ${2 + 4}`;
  utils.printToDom('tank', domString);
};

export default { tankBuilder }
