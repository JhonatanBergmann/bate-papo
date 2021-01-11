import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import commonStyles from '../../commonStyles'
import api from '../../data/api'

import RoomsRow from '../../components/RoomsRow'


import backgroudImage from '../../../assets/imgs/backgroud.png'

const Sex = (props) => {
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
    <ImageBackground style={styles.container} source={backgroudImage}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite um apelido..."
          value={name}
          onChangeText={setName} />
        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text style={styles.textbtn}>
            Entrar
            </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>SE VOCÊ  QUISER, ESCOLHA OUTRO TEMA!</Text>
        <RoomsRow />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    opacity: 0.8,
    marginLeft: 30,
    marginRight: 30,
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
    width: 150,
    borderRadius: 5
  },
  textbtn: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    fontFamily: commonStyles.fontFamily,
    fontSize: 15,
    color: '#E8E0E0',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})

export default Sex