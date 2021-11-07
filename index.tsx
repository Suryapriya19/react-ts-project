import React, { Component } from 'react';
import { render } from 'react-dom';
import { Aa, MyApp } from './Hello';
import './style.css';
import { testfn, htmlFn } from './test.js';

// interface AppProps { }
// interface AppState {
//   name: string;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      //arr :['VKS', 'ARE', 'react', 'node', 'are'],
    };
    testfn();
  }

  render() {
    const arr = ['VKS', 'ARE', 'react', 'node', 'are'];
    // filter should return a condition.
    const updateArr = arr.filter((x, index, varr) => {
      return x !== 'VKS';
    });

    const nodeFinder = arr.find((x) => x !== 'ARE');

    return (
      <div>
        <Aa name={'asd'} age={15} />
        {htmlFn('asdF', 23)}
        <MyApp />
        <p>
          {arr.map((str, index) => (
            <div>
              {str} ---index {index}
            </div>
          ))}
          Start editing to see some magic happen :)
        </p>
        {updateArr.map((x) => {
          return (
            <div>
              <h3>Without VKS--{x}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
