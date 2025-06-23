import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/uı/input'
import { height } from '../utils/constants'

const Search = () => {
  return (
    <View style={styles.container}>
   <Input placeholder="Search" showIcon/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    minHeight:height*0.06,
  
  }
})