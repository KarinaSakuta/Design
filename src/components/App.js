import React from 'react';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
    };
  }

  onChange = ({complited, results}) => {
    console.log('onChange: ', {complited, results});
    this.setState({ results });
  }

  getFResults() {
    return (
      <div>
        Final results!
      </div>
    );
  }

  render() {
    const { results } = this.state;

    return (
      <div className="app">
        <main className="main" id="main">
        <Task3
            results={results}
            onChange={this.onChange}
            timeOut={false}
            finished={false}
            fResults={this.getFResults()}
        />
        <Task4
            results={results}
            onChange={this.onChange}
            finished={false}
            fResults={this.getFResults()}
        />
        </main>
      </div>
    );
  }
}
