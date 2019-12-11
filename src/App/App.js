import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFish, faCircle } from '@fortawesome/free-solid-svg-icons';

import SharkTank from '../components/SharkTank/SharkTank';

import studentData from '../helpers/data/studentsData';

import './App.scss';

library.add(faFish, faCircle);

class App extends React.Component {
  state = {
    livingStudents: [],
  }

  componentDidMount() {
    this.setState({ livingStudents: studentData.livingStudents() });
  }

  render() {
    return (
      <div className="App">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={this.state.livingStudents} />
      </div>
    );
  }
}

export default App;
