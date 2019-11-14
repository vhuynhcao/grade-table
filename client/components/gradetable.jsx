import React from 'react';
import Grade from './grade.jsx';

function GradeTable(props) {
  var studentTable = props.grades.map(data => {
    return <Grade key={data.id} grades={data}/>;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {studentTable}
      </tbody>
    </table>
  );
}

export default GradeTable;