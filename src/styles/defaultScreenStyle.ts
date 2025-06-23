import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../theme/colors'


const defaultScreenStyle = StyleSheet.create({
    SafeAreaView:{
        flex:1,
        backgroundColor:Colors.WHITE,
    },
    container:{
        flex:1,
        padding:10,
    }
})

export {defaultScreenStyle}