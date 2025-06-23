import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/colors'
import { height } from '../../utils/constants'
import { Bag2 } from 'iconsax-react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { CART } from '../../utils/routes'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { RootStackParamList } from '../../navigation/types'

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {cart}=useSelector((state:RootState)=>state.cart)
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: Colors.SECONDARY, fontWeight: 800, fontSize: 24 }}>Discover </Text>
      </View>
      <TouchableOpacity 

    onPress={()=>navigation.navigate(CART)}
      style={{ borderWidth: 0.5, padding: 7, borderRadius: 100 }}>
        <View>
          <Bag2 size="28" color={Colors.SECONDARY} />
        </View>
        <View 
        style={{ position: "absolute", 
        backgroundColor: Colors.PRIMARY, 
        width: 20, height: 20, 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 1000, 
        right: -5,
         top: -5 }}>
          
          <Text 
          style={{ fontSize: 12, 
          color: Colors.WHITE,
           fontWeight: 700 }}>{cart.length}</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: height / 8,
    backgroundColor: Colors.WHITE,
    justifyContent: "space-between",
    fontSize: 30,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-end",

  }
})