import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Iconheader from '../../assets/imgs/iconHeader.png'
import commonStyles from '../commonStyles'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={() => {
              this.setState({ isVisible: false })
            }}>
            <View style={styles.modal}>
              <ScrollView>
                <View style={styles.headerModal}>
                  <Text style={styles.text}>Não é permitido:</Text>
                  <TouchableOpacity style={{ margin: 10 }} onPress={() => this.setState({ isVisible: false })}>
                    <Icon name='times-circle-o' size={25} color={'#E8E0E0'} style={{ marginRight: 10 }} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>
                  •    Acessar salas de bate-papo com nomes que insinuem pornografia infantil, exploração sexual de menores ou pedofilia;
                            </Text>
                <Text style={styles.text}>
                  •    Utilizar apelidos e trocar mensagens relacionadas a atividades ilegais ou que incitem a crime;
                            </Text>
                <Text style={styles.text}>
                  •    Racismo, xenofobia, neonazismo e intolerância sexual ou religiosa;
                            </Text>
                <Text style={styles.text}>
                  •    Divulgar informações sobre atividades ilegais ou que incitem a crime ou a intolerância;
                            </Text>
                <Text style={styles.text}>
                  •    O uso de linguagem ofensiva ou racista ou publicação de material calunioso, abusivo ou que invada a privacidade de terceiros;
                            </Text>
                <Text style={styles.text}>
                  •    Propaganda política;
                            </Text>
              </ScrollView>
            </View>
          </Modal>
        </View>
        <View style={styles.rowContainer}>
          <Image source={Iconheader} style={styles.image} />
          <Text style={styles.title}>Bate-Papo</Text>
          <TouchableOpacity onPress={() =>
            this.setState({ isVisible: true })}>
            <Icon name='info-circle' size={25} color={'#f66e00'} style={{ marginRight: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 10
  },
  title: {
    color: 'black',
    height: 30,
    fontSize: 20,
    fontFamily: 'shelter'
  },
  modalView: {
    flex: 1
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderTopLeftRadius: 50,
    marginTop: 100
  },
  text: {
    margin: 20,
    fontSize: 20,
    color: '#E8E0E0',
    fontFamily: commonStyles.fontFamily
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Header