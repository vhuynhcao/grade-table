import React from 'react';
import Header from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Header text="Student Grade Table"/>
    );
  }
}

export default App;
