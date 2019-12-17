import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import studentShape from '../../helpers/propz/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="Gravestone col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{student.firstName} {student.lastName}</h5>
            <FontAwesomeIcon icon="skull-crossbones" size="6x"/>
          </div>
        </div>
      </div>
    );
  }
}

export default GraveStone;
