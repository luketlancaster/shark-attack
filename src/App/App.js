import React from 'react';

import SharkTank from '../components/SharkTank/SharkTank';

import studentData from '../helpers/data/studentsData';

import './App.scss';

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
