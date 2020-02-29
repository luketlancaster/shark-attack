import graveyard from './components/graveyard.js';
import tank from './components/tank.js';

const init = () => {
  tank.tankBuilder();
  graveyard.buildGraveyard();
}

init();
