import React, { Component } from 'react'
import { 
    ScrollView,
    StyleSheet, 
    TouchableOpacity,
    Image, 
    View, 
    Text
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import commonStyles from '../commonStyles'

class Rooms extends Component {
    render() {
        return (
            <ScrollView style={styles.container} horizontal={true}>
               <TouchableOpacity onPress={Actions.friendship} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/friends.png')} />
                        <Text style={styles.title}>Amizade</Text>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.courtship} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/date.png')} />
                        <Text style={styles.title}>Namoro</Text>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.nerd} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/nerd.png')} />
                        <Text style={styles.title}>Nerd</Text>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.serious} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/brain.png')} />
                        <Text style={styles.title}>Papo Sério</Text>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.romantic} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/like.png')} />
                        <Text style={styles.title}>Romântico</Text>  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.sex} style={styles.button}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={require('../../assets/imgs/condom.png')} />
                        <Text style={styles.title}>Sexo</Text>  
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
     container: {
        //opacity: 0.5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    title: {
        alignSelf: 'flex-end',
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        margin: 5,
        color: '#E8E0E0'
    },
    img: {
       height: 60,
       width: 60
    }
})

export default Rooms