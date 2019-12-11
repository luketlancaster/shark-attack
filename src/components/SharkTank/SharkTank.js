import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape),
  }

  render() {
    const { livingStudents } = this.props;
    const studentCards = livingStudents.map((s) => <LiveStudent key={s.id} student={s} />);

    return (
      <div className="SharkTank d-flex flex-wrap">
        <h1>SharkTank</h1>
        {studentCards}
      </div>
    );
  }
}

export default SharkTank;
