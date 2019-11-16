import React from 'react';
import Header from './header.jsx';
import GradeTable from './gradetable.jsx';
import GradeForm from './gradeform.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.componentDidMount();
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewStudent = this.addNewStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
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

  addNewStudent(newList) {
    const addNew = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newList)
    };
    fetch('/api/grades', addNew)
      .then(response => response.json())
      .then(addNewList => {
        const allList = this.state.grades.concat(addNewList);
        this.setState({ grades: allList });
      });
  }

  deleteStudent(id) {
    let remove = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`/api/grades/${id}`, remove);
    // .then(response => response.json())
    // .then(this.setState({
    //   grades:
    // }));
  }

  render() {
    return (
      <div className="container-fluid">
        <Header text="Student Grade Table" average={this.getAverageGrade()}/>
        <div className="row">
          <GradeTable grades={this.state.grades} removeStudent={this.deleteStudent}/>
          <GradeForm newStud={this.addNewStudent}/>
        </div>
      </div>
    );
  }
}

export default App;
