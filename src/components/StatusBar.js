import React, { Component } from 'react'
import {
  StatusBar, View
} from 'react-native'


class StatusBarHidden extends Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle='light-content'
          hidden={true}
          backgroundColor='white' />
      </View>
    )
  }
}

export default StatusBarHidden