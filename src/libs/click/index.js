import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';


export class BasicClick extends Component {

  static propType = {
    onClick: PropTypes.func
  };

  static defaultProps ={
    onClick: () => {
    },
  };

  render() {
    return <TouchableHighlight
      activeOpacity={1}
      underlayColor={'rgba(0,0,0,0)'}
      onPress={() => {
      this.props.onClick.call();
    }}>
      {this.props.children}
    </TouchableHighlight>;
  }
}
