import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="Student col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
