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
      <div className="SharkTank">
        <h2>SharkTank</h2>
        <div className="tank d-flex flex-wrap">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
