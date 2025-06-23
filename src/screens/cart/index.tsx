import {

  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import CartItem from '../../components/cart/cartItem';
import {Colors} from '../../theme/colors';
import Button from '../../components/uı/button';
import ListEmptyComponent from '../../components/uı/listEmptyComponent';
import { Bag2 } from 'iconsax-react-native';

const Cart: React.FC = () => {
  const {cart,totalPrice} = useSelector((state: RootState) => state.cart);
  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        <FlatList
      keyExtractor={(item) => item.id.toString()} 
        ListEmptyComponent={<ListEmptyComponent
          icon={<Bag2 size={50} color={Colors.PRIMARY} variant='Bold'/>}
           title="Sepet Boş"
           description="Sepetinizde henüz ürün bulunmamaktadır.."
           />}
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
      </View>
     {
      cart.length !==0 &&
      <View style={styles.priceContainer}>
      <View
        style={{flex: 2, justifyContent: 'center', paddingHorizontal: 10}}>
        <Button
        
          title={`Chackout for $${totalPrice}`}
        />
      </View>
    </View>
     }
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: Colors.GRAY
  },
});
