import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';
import {topMargin} from '../../style';
import {BasicComponent} from '../../libs/component';




export class TopBar extends BasicComponent {
  render() {
    return (
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          marginTop: topMargin(),
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{
          width: this.state.width - 60,
          alignItems: 'center',
        }}>
          <TextInput
            style={{
              backgroundColor: '#eeeeee',
              borderRadius: 4,
              width: this.state.width - 100,
              height: 40,
              fontSize: 18,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          />
        </View>
        <View style={{
          width: 60,
          alignItems: 'center',
        }}>
          <Image
            style={{width: 30, height: 30,
              position:'relative',
              left: -10
            }}
            source={require('./assets/scan.png')}
          />
        </View>
      </View>
    );
  }
}
