import graveyard from './components/graveyard.js';
import tank from './components/tank.js';
import personData from './helpers/data/personData.js';

const buildDom = () => {
  tank.tankBuilder();
  graveyard.buildGraveyard();
}

const sharkAttackEvent = () => {
  personData.randomMurder();
  buildDom();
}

const init = () => {
  buildDom();
  $('#bite-me').click(sharkAttackEvent)
}

init();
