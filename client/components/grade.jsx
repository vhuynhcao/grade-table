import React from 'react';

function Grade(props) {
  return (
    <tr>
      <th scope="row">{props.grades.name}</th>
      <td>{props.grades.course}</td>
      <td>{props.grades.grade}</td>
    </tr>
  );
}

export default Grade;