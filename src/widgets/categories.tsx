import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CategoryItem from '../components/categories/categoryItem';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../utils/routes';
import ProductItem from '../components/products/productItem';
import { Colors } from '../theme/colors';
import { height } from '../utils/constants';

// Props tipi
interface CategoriesProps {
  widget: any; // widget'ın gerçek tipini buraya yazabilirsin
}

const Categories: React.FC<CategoriesProps> = ({ widget }) => {
  const { categories } = useSelector((state: RootState) => state.categories);
  const { productsFilterCategory, pending } = useSelector(
    (state: RootState) => state.products
  );

  
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate(CATEGORIES);
  };

  return (
    <View style={styles.container}>
      <WidgetsHeader widget={widget} navigate={handleNavigate} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
      {pending ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: height / 2,
          }}
        >
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          data={productsFilterCategory}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
