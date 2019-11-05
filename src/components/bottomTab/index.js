import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {BasicComponent} from '../../libs/component';


const styles = StyleSheet.create({

  wrap: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
});


const message = require('./assets/message.png');
const messageActive = require('./assets/message-active.png');

const audit = require('./assets/audit.png');
const auditActive = require('./assets/audit-active.png');

const app = require('./assets/app.png');
const appActive = require('./assets/app-active.png');

const user = require('./assets/user.png');
const userActive = require('./assets/user-active.png');


export class BottomTab extends BasicComponent {

  state = {
    active: 2,
  };

  clickTab(active) {
    console.log(`<${'='.repeat(30)} index.js:45 ${'='.repeat(30)}>`);
    this.setState({active});
  }

  render() {
    return <View style={styles.wrap}>
      <View style={styles.item}>
        <TouchableHighlight onPress={() => this.clickTab(0)}>
          <Image style={styles.image} source={this.state.active === 0 ? messageActive : message} />
        </TouchableHighlight>
      </View>
      <View style={styles.item}>
        <TouchableHighlight onPress={() => this.clickTab(1)}>
          <Image style={styles.image} source={this.state.active === 1 ? auditActive : audit} />
        </TouchableHighlight>
      </View>
      <View style={styles.item}>
        <TouchableHighlight onPress={() => this.clickTab(2)}>
          <Image style={styles.image} source={this.state.active === 2 ? appActive : app} />
        </TouchableHighlight>
      </View>
      <View style={styles.item}>
        <TouchableHighlight onPress={() => this.clickTab(3)}>
          <Image style={styles.image} source={this.state.active === 3 ? userActive : user} />
        </TouchableHighlight>
      </View>
    </View>;
  }
}
