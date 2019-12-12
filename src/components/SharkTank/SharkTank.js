import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape),
    eatStudent: PropTypes.func,
  }

  eatStudentEvent = (e) => {
    e.preventDefault();
    const { eatStudent } = this.props;
    eatStudent();
  }

  render() {
    const { livingStudents } = this.props;
    const studentCards = livingStudents.map((s) => <LiveStudent key={s.id} student={s} />);

    return (
      <div className="SharkTank">
        <h2>SharkTank</h2>
        <button className="btn btn-danger" onClick={this.eatStudentEvent} disabled={!livingStudents.length}>SHARK ATTACK</button>
        <div className="tank d-flex flex-wrap">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
