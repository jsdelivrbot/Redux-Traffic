import React from 'react';
import { Component } from 'react';
import TrafficLight from '../containers/traffic-light';
import SelectLight from '../containers/select-light';

export default class App extends Component {
  render() {
    return (
      <div>
        <TrafficLight />
		<br />
        <SelectLight />
      </div>
    );
  }
}
