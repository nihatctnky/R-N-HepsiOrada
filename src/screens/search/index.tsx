import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/uı/input';
import { RootState } from '../../store/store';

import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { setKeyword } from '../../store/slices/searchSlice';
import FilteredProductList from '../../components/search/filteredProductList';
import { getProducts } from '../../store/actions/productsAction';



const Search: React.FC = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state: RootState) => state.search.keyword);
  useEffect(() => {
    dispatch(getProducts()); // ürünleri yükle
  }, []);
  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        <Input
          value={keyword}
          placeholder="Search"
          showIcon
          onChangeText={(text) => dispatch(setKeyword(text))}
        />
        <FilteredProductList/>
      </View>
    </SafeAreaView>
  );
};

export default Search;
