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


export default class App extends BasicComponent {

  render() {
    return (
      <View style={styles.wrap}>
        <TopBar />
        <ScrollView style={styles.scrollView}>
          <Text>bbbb</Text>
        </ScrollView>
        <BottomTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'yellow',
    marginTop: topMargin(),
    flex: 1,
  },
  wrap: {
    flex: 1,
  },
});
