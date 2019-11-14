import React from 'react';
import Header from './header.jsx';
import Grade from './grade.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(grades => this.setState({ grades }))
      .catch(error => console.error('Fetch Error: ', error));
  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table"/>
        <Grade/>
      </div>
    );
  }
}

export default App;
