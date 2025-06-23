import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CartItemProps} from '../../models/uı/cartItemProps';
import {width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {Add, CloseCircle, Minus} from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { decrementProduct, deleteToCart, incrementProduct } from '../../store/slices/cartSlice';
import { RootStackParamList } from '../../navigation/types';


const CartItem: React.FC<CartItemProps> = ({product}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch:AppDispatch=useDispatch()
   
  return (
    <Pressable 
    onPress={()=>navigation.navigate(PRODUCTDETAIL,{productId:product.id})}
    style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          {product?.images?.[0] ? (
  <Image source={{ uri: product.images[0] }} style={styles.image} />
) : (
  <View style={[styles.image, { backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' }]}>
    <Text>Resim yok</Text>
  </View>
)}

        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {product?.title}
          </Text>

          <Pressable
          onPress={()=>dispatch(deleteToCart(product))}
          >
            <CloseCircle size={25} color={Colors.DARKGRAY} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            {product.slug}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                color: Colors.SECONDARY,
                fontWeight: '700',
              }}>
              ${product.price}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={()=>dispatch(decrementProduct(product))}
                style={{
                  width: 25,
                  height: 25,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: Colors.DARKGRAY,
                }}>
                <Minus size={20} color={Colors.BLACK} />
              </TouchableOpacity>
              <Text style={{marginHorizontal: 10}}>{product.count}</Text>
              <TouchableOpacity
              onPress={()=>dispatch(incrementProduct(product))}
                style={{
                  width: 25,
                  height: 25,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: Colors.PRIMARY,
                }}>
                <Add size={20} color={Colors.PRIMARY} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.GRAY,
    marginVertical: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    backgroundColor: Colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    width: width * 0.28,
    height: width * 0.28,
    padding: 10,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  infoContainer: {
    paddingHorizontal: 10,

    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    width: width * 0.5,
  },
  titleText: {
    fontSize: 16,
    color: Colors.DARKGRAY,
    paddingVertical: 5,
    width: width * 0.5,
  },
});
