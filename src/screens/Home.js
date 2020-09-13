import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import backgroudImage from '../../assets/imgs/backgroud.png'
import commonStyles from '../commonStyles'
import api from '../api'

const Home = (props) => {
  const [name, setName] = useState('')

  const onNext = async () => {
    let user = await api.findUser(name)

    if (user === null) {
      user = {
        _id: new Date().getTime(),
        name,
        avatar: 'https://placeimg.com/140/140/any'
      }
      await api.saveUser(user)
    }

    Actions.chat({ user })
  }

  return (
    <ImageBackground source={backgroudImage} style={styles.backgroud}>
        <StatusBar
            barStyle='light-content'
            hidden={true}
            backgroundColor='white'
        />
        <View style={styles.container}>
            <TextInput 
            style={styles.input} 
            placeholder="Digite um apelido..."
            value={name} 
            onChangeText={setName} 
            />
        <TouchableOpacity onPress={onNext} style={styles.button} >
            <Text style={styles.buttontxt}>
              Entrar
            </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
 backgroud: {
     flex: 1
 },
  container: {
    padding: 20,
    paddingTop: 100
  },
  input: {
    opacity: 0.8,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    borderColor: "black",
    borderWidth: 0,
    fontFamily: commonStyles.fontFamily
  },
  button: {
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#a4c639',
    height: 50,
    width: 100,
    borderRadius: 10
  },
  buttontxt: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: 'white'
  }
})

export default Home