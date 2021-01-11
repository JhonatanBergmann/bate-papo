import React, { Component } from 'react'
import {
  StyleSheet,
  ImageBackground,
  View,
  Text
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import backgroudImage from '../../assets/imgs/backgroud.png'
import commonStyles from '../commonStyles'

import StatusBarHidden from '../components/StatusBar'
import Header from '../components/Header'
import Rooms from '../components/Rooms'

export default class Home extends Component {
  render() {
    return (
      <ImageBackground style={styles.containerImage} source={backgroudImage}>
        <StatusBarHidden />
        <Header />
        <View style={styles.container}>
          <Text style={styles.description}>ESCOLHA O TEMA QUE MAIS COMBINA COM VOCÊ</Text>
          <Rooms />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1
  },
  container: {
    marginTop: hp('5%')
  },
  description: {
    fontSize: hp('3%'),
    color: '#E8E0E0',
    fontFamily: commonStyles.fontFamily,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})