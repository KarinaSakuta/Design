import React from 'react';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  onChange = ({completed, result}) => {
    console.log('onChange: ', {completed, result});
    this.setState({ result });
  }

  getFResults() {
    return (
      <div>
        Final results!
      </div>
    );
  }

  render() {
    const { result } = this.state;

    return (
      <div className="app">
        <main className="main" id="main">
        <Task3
            result={result}
            onChange={this.onChange}
            timeOut={false}
            finished={false}
            fResults={this.getFResults()}
        />
        <Task4
            result={result}
            onChange={this.onChange}
            finished={false}
            fResults={this.getFResults()}
        />
        </main>
      </div>
    );
  }
}
