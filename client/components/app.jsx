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
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(error => console.error('Fetch Error: ', error));
  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table"/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
