import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductItemProps} from '../../models/uı/productItemProps';
import {Colors} from '../../theme/colors';
import { width} from '../../utils/constants';
import {Star1} from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';
import { RootStackParamList } from '../../navigation/types';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
 const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Pressable 
    onPress={()=>navigation.navigate(PRODUCTDETAIL,{productId:product.id})}
    style={styles.container}>
      <View style={styles.imageContainer}>
        {product?.images && (
          <Image source={{uri: product?.images[0]}} style={styles.image} />
        )}
      </View>

      <View style={styles.nameContainer}>
        <View style={{flex: 3}}>
          <Text style={styles.name} numberOfLines={1}>
            {product.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Star1 color={Colors.ORANGE} size={14} variant="Bold" />
          <Text style={styles.name}>5.0</Text>
        </View>
      </View>

      <View>
        <Text style={styles.price} numberOfLines={1}>
          ${product.price}.0
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 30,
    margin: 10,
  },
  imageContainer: {
    backgroundColor: Colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.DARKGRAY,
  },
  nameContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  price: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.SECONDARY,
  },
});
