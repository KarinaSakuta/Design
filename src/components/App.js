import React from 'react';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {},
      timeout: false,
      finished: false,
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
        <Task4
            result={result}
            onChange={this.onChange}
            timeOut={this.state.timeOut}
            finished={this.state.finished}
            fResults={this.getFResults()}
            marginBottom={60}
        />
            <button onClick={() => this.setState({timeOut: !this.state.timeOut})}>ggg</button>
            <button onClick={() => this.setState({finished: !this.state.finished})}>finished</button>

        </main>
      </div>
    );
  }
}
