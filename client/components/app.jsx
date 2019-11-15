import React from 'react';
import Header from './header.jsx';
import GradeTable from './gradetable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.componentDidMount();
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(error => console.error('Fetch Error: ', error));
  }

  getAverageGrade() {
    var avgGrade = 0;
    var students = this.state.grades.length;
    for (var studentIndex = 0; studentIndex < students; studentIndex++) {
      avgGrade += this.state.grades[studentIndex].grade;
    }
    const average = Math.round(avgGrade / studentIndex);
    return average;
  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table" average={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
