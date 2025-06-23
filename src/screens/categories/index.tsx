import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

import Category from '../../components/categories/category';

const CategoriesScreen: React.FC = () => {
  const {categories} = useSelector((state: RootState) => state.categories);
  return (
    <SafeAreaView style={styles.container}>
      <View style={defaultScreenStyle.container}>
        <FlatList
        keyExtractor={(item) => item.id.toString()} 
          data={categories}
          renderItem={({item}) => <Category category={item} />}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  
  }
});
