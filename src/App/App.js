import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFish, faCircle, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

import studentData from '../helpers/data/studentsData';

import './App.scss';

library.add(faFish, faCircle, faSkullCrossbones);

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    this.setState({
      livingStudents: studentData.livingStudents(),
      deadStudents: studentData.dearlyBeloved(),
    });
  }

  eatStudent = () => {
    const { livingStudents } = this.state;
    const eatMe = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    studentData.followTheLight(eatMe.id);
    this.setState({
      livingStudents: studentData.livingStudents(),
      deadStudents: studentData.dearlyBeloved(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={this.state.livingStudents} eatStudent={this.eatStudent} />
        <Graveyard deadStudents={this.state.deadStudents} />
      </div>
    );
  }
}

export default App;
