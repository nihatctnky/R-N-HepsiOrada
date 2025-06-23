import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/colors'
import { height } from '../../utils/constants'
import { ListEmptyComponentProps } from '../../models/uı/listEmptyComponentProps'

const ListEmptyComponent:React.FC<ListEmptyComponentProps> = ({title,description,icon}) => {
  return (
    <View style={styles.container}>
      <View style={{width:100,height:100,borderRadius:50,backgroundColor:Colors.GRAY,justifyContent:"center",alignItems:"center"}}>
      {icon}
      </View>
      <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} >{description}</Text>
      </View>
    </View>
  )
}

export default ListEmptyComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:Colors.WHITE,
        height:height*0.3
    },
    title:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"700",
        marginVertical:10
    },
    description:{
        fontSize:16
    }
})