import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CategoryItemProps} from '../../models/uı/categoryItemProps';
import {Colors} from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTSLISTSCREEN } from '../../utils/routes';

const Category: React.FC<CategoryItemProps> = ({category}) => {

  const navigation= useNavigation()
  return (
    <Pressable
    onPress={() => navigation.navigate(PRODUCTSLISTSCREEN, { categorySlug: category.slug })}
     style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.title} numberOfLines={1}>{category.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: category.image}} style={styles.image} />
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    margin: 5,
    borderRadius:8
  },
  nameContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  imageContainer:{
    flex:1
  },
  title: {
    fontSize: 18,
    fontWeight:"600"
  },
  image: {
    width: 'auto',
    height: 150,
    resizeMode: 'stretch',
    borderTopRightRadius:8,
    borderBottomRightRadius:8
  },
});
