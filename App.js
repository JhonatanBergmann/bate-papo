import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './src/scenes/Home'
import Friendship from './src/scenes/rooms/Friendship'
import Courtship from './src/scenes/rooms/Courtship'
import Nerd from './src/scenes/rooms/Nerd'
import Serious from './src/scenes/rooms/Serious'
import Romantic from './src/scenes/rooms/Romantic'
import Sex from './src/scenes/rooms/Sex'
import Chat from './src/scenes/Chat'

export default function App() {
  return (
    <Router>
      <Scene key='root'
        headerLayoutPreset={'center'}>
          <Scene key='home' 
            component={Home} 
            hideNavBar='false' />
          <Scene key='friendship' 
            component={Friendship}
            title='Amizade'
            titleStyle={{ fontFamily: 'shelter' }} />
          <Scene key='courtship' 
            component={Courtship} 
            title='Namoro' 
            titleStyle={{ fontFamily: 'shelter' }} />
          <Scene key='nerd' 
            component={Nerd} 
            title='Nerd' 
            titleStyle={{ fontFamily: 'shelter' }} />
           <Scene key='serious' 
            component={Serious} 
            title='Papo Sério' 
            titleStyle={{ fontFamily: 'shelter' }} />
          <Scene key='romantic' 
            component={Romantic} 
            title='Romântico' 
            titleStyle={{ fontFamily: 'shelter' }} />
          <Scene key='sex' 
            component={Sex} 
            title='Sexo' 
            titleStyle={{ fontFamily: 'shelter' }} />
          <Scene key='chat' 
            component={Chat} 
            title='Sala de Bate-Papo' 
            titleStyle={{ fontFamily: 'shelter' }} />
      </Scene>
    </Router>
  );
}