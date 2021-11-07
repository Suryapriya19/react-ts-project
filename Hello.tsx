import React from 'react';
import { htmlFn } from './test.js';

export const Aa = ({ name, age }) => <h1>Hello {name}! {age}</h1>;

export class MyApp extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (<div> ------
      {htmlFn('Allaah', 34)}
      HTML ELEMENT
      </div>);
  }
};
