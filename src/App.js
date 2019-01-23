import React, { Component } from 'react';
import { Link, Route  } from "react-router-dom";
import Counter from "./components/Counter";


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello APP</h1>
        <Link to="/counter">Counter</Link>
        {/* <Counter /> */}

        <Route exact path='/counter' component={Counter} />
      </div>
    );
  }
}

export default App;
