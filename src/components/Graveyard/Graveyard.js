import React from 'react';
import PropTypes from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propz/studentShape';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const gravestones = deadStudents.map((d) => <GraveStone key={d.id} student={d}/>);
    return (
      <div className="Graveyard">
        <h2>Graveyard</h2>
        <div className="plots d-flex flex-wrap">
          {gravestones}
        </div>
      </div>
    );
  }
}

export default Graveyard;
