import React, { Component } from 'react'
import { 
    Text,
    ScrollView,
    StyleSheet, 
    TouchableOpacity,
    Image, 
    View 
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Rooms extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={Actions.friendship} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/friends.png')} />
                        <Text style={styles.title}>Amizade</Text>  
                    </View>
                    <Icon name='caret-right' size={30} color={'#E8E0E0'} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.courtship} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/date.png')} />
                        <Text style={styles.title}>Namoro</Text>  
                    </View>
                    <Icon name='caret-right' size={30} color={'#E8E0E0'} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.nerd} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/nerd.png')} />
                        <Text style={styles.title}>Nerd</Text>  
                    </View>
                    <Icon name='caret-right' size={30} color={'#E8E0E0'} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.serious} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/brain.png')} />
                        <Text style={styles.title}>Papo Sério</Text>  
                    </View>
                    <Icon name='caret-right' size={30} color={'#E8E0E0'} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.romantic} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/like.png')} />
                        <Text style={styles.title}>Romântico</Text>  
                    </View>
                    <Icon name='caret-right' size={30} color={'#E8E0E0'} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.sex} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/condom.png')} />
                        <Text style={styles.title}>Sexo</Text>  
                    </View>
                    <Icon name='caret-right' size={30} color={'#E8E0E0'} /> 
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
     container: {
        flexDirection: 'column',
        //opacity: 0.5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 20,
        marginTop: 20,
        maxHeight: 500,
        borderRadius: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        borderTopWidth: 10,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        margin: 5,
        color: '#E8E0E0'
    },
    img: {
       height: 50,
       width: 50
    }
})

export default Rooms