import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {BasicComponent} from '../../libs/component';
import {BasicClick} from '../../libs/click';


const styles = StyleSheet.create({

  wrap: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: 'rgba(204,204,204,0.39)',
    borderTopWidth: 1,
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
    active: 0,
  };

  clickTab(active) {
    this.setState({active});
  }

  render() {
    const {active} = this.state;
    return <View style={styles.wrap}>
      <View style={styles.item}>
        <BasicClick onClick={() => {
          active !== 0 && this.setState({active: 0});
        }}>
          <Image style={styles.image} source={active === 0 ? messageActive : message} />
        </BasicClick>
      </View>
      <View style={styles.item}>
        <BasicClick onClick={() => {
          active !== 1 && this.clickTab(1);
        }}>
          <Image style={styles.image} source={active === 1 ? auditActive : audit} />
        </BasicClick>
      </View>
      <View style={styles.item}>
        <BasicClick onClick={() => {
          active !== 2 && this.clickTab(2);
        }}>
          <Image style={styles.image} source={active === 2 ? appActive : app} />
        </BasicClick>
      </View>
      <View style={styles.item}>
        <BasicClick onClick={() => {
          active !== 3 && this.clickTab(3);
        }}>
          <Image style={styles.image} source={active === 3 ? userActive : user} />
        </BasicClick>
      </View>
    </View>;
  }
}
