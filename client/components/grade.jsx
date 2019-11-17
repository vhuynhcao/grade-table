import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.grades.name}</th>
        <td>{this.props.grades.course}</td>
        <td>{this.props.grades.grade}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={() => this.props.callBack.removeStudent(this.props.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Grade;
