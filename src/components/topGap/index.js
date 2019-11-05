import React, {Component} from 'react';
import {View} from 'react-native';
import {topMargin} from '../../style';

export class TopGap extends Component {
  render() {
    return <View style={{marginTop: topMargin()}}>example</View>;
  }
}
