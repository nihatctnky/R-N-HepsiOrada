import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import ProductItem from '../../components/products/productItem';
import { getProducts } from '../../store/actions/productsAction';
import { useEffect } from 'react';
import { Colors } from '../../theme/colors';import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

type ProductsListRouteProp = RouteProp<RootStackParamList, 'ProductsListScreen'>;

interface ProductsListScreenProps {
  route: ProductsListRouteProp;
}


const ProductsListScreen:React.FC<ProductsListScreenProps> = ({route}) => {
  const {categorySlug} = route?.params;

  const {products,pending} = useSelector((state: RootState) => state.products);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        categorySlug:categorySlug == 'all' ? '' : categorySlug ,
      }),
    );
  }, [categorySlug ]);
  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        
    {
        pending?
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
         <ActivityIndicator size={"large"} color={Colors.PRIMARY}/>
       </View>
        :
        <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    }
      </View>
    </SafeAreaView>
  );
};

export default ProductsListScreen;

const styles = StyleSheet.create({});
