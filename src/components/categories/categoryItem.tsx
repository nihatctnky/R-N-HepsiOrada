import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CategoryItemProps} from '../../models/uı/categoryItemProps';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {Colors} from '../../theme/colors';
import { setCategory } from '../../store/slices/categoriesSlice';

const CategoryItem: React.FC<CategoryItemProps> = ({category}) => {
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch:AppDispatch=useDispatch()

  return (
    <Pressable
    onPress={() =>dispatch(setCategory(category.slug))}
      style={[
        styles.container,
        {
          backgroundColor:
            selectedCategory == category.slug ? Colors.PRIMARY : Colors.WHITE,
            borderColor: selectedCategory == category.slug ? Colors.PRIMARY : Colors.BLACK,
        },
      ]}>
      <Text style={[styles.title,{color: selectedCategory == category.slug ? Colors.WHITE : Colors.BLACK}]}>
        
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:15
  },
  title: {
    fontSize: 18,
  },
});
