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
    let avgGrade = 0;
    let students = this.state.grades.length;
    for (let studentIndex = 0; studentIndex < students; studentIndex++) {
      avgGrade += parseInt(this.state.grades[studentIndex].grade);
    }
    const averageGrade = Math.round(avgGrade / students);
    let average = isNaN(averageGrade) ? 0 : averageGrade;
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
      })
      .catch(error => console.error('Delete Error: ', error));
  }

  deleteStudent(id) {
    let remove = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    const mapGrade = this.state.grades.map(grade => grade);
    const removeGrade = mapGrade.filter(grade => grade.id !== id);
    fetch(`/api/grades/${id}`, remove)
      .then(response => response.json())
      .then(() => {
        this.setState({
          grades: removeGrade });
      })
      .catch(error => console.error('Failed: ', error));
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
