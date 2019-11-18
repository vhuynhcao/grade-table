import React from 'react';
import Grade from './grade.jsx';

class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    var studentTable = this.props.grades.map(data => {
      return <Grade key={data.id} grades={data} id={data.id} name={data.name} course={data.course} removeStudent={this.props.removeStudent}/>;
    });

    return (
      <table className="table table-striped col-sm-10">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {studentTable}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
