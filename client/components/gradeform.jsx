import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    var eventValue = event.target.value;
    this.setState({ [event.target.name]: eventValue });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.newStud(newStudent);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleCancel(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="col-sm-2" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="fas fa-user"/>
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Student Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="far fa-list-alt"/>
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Course"
            type="text"
            value={this.state.course}
            name="course"
            onChange={this.handleChange}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="fas fa-graduation-cap" />
            </span>
          </div>
          <input
            className="form-control"
            placeholder="Grade"
            type="number"
            name="grade"
            value={this.state.grade}
            onChange={this.handleChange}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
        <button
          className="ml-3 btn btn-warning"
          type="reset"
          onClick={this.handleCancel}
        >
          Cancel
        </button>
      </form>
    );
  }
}

export default GradeForm;
