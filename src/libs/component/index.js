import React, {Component} from 'react';
import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export class BasicComponent extends Component {
  state = {
    width: window.width,
    height: window.height,
  };

  render() {
    return <Component />;
  }
}
