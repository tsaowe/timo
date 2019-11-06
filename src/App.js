/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {BasicComponent} from './libs/component/index';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {TopBar} from './components/top';
import {topMargin} from './style';
import {BottomTab} from './components/bottomTab';
import {Platte} from './components/platte';


export default class App extends BasicComponent {

  render() {
    return (
      <View style={styles.wrap}>
        <TopBar />
        <ScrollView style={styles.scrollView}>
          <Platte />
        </ScrollView>
        <BottomTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  wrap: {
    flex: 1,
  },
});
