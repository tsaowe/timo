import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {commonBoxShadow, topMargin} from '../../style';
import {BasicComponent} from '../../libs/component';


const styles = StyleSheet.create({
  wrap: {
    ...commonBoxShadow(),
  },
});


export class Platte extends BasicComponent {
  render() {
    return <View style={{

    }}>
      <Text>aaaaa</Text>
    </View>;
  }
}
