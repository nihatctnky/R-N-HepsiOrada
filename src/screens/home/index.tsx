import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProductsFilterCategory } from '../../store/actions/productsAction';
import widgets from '../../widgets/widgets.json';
import Search from '../../widgets/search';
import Categories from '../../widgets/categories';
import Introduction from '../../widgets/ıntroduction';
import BestSeller from '../../widgets/bestSeller';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { getCategories } from '../../store/actions/categoriesAction';
import { ListRenderItem } from 'react-native';

interface Widget {
  id: string | number;
  slug: string;
  [key: string]: any;
}

interface WidgetProps {
  widget: Widget;
}

const Home: React.FC = () => {
  const { pending } = useSelector((state: RootState) => state.products);
  const { selectedCategory } = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(
      getProductsFilterCategory({
        categorySlug: selectedCategory == 'all' ? '' : selectedCategory,
      }),
    );
  }, [selectedCategory]);

  const renderItem: ListRenderItem<Widget> = ({ item }) => {
    switch (item.slug) {
      case 'search':
        return <Search widget={item} />;
      case 'categories':
        return <Categories widget={item} />;
      case 'ıntroduction':
        return <Introduction widget={item} />;
      case 'bestSeller':
        return <BestSeller widget={item} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        <FlatList<Widget>
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          data={widgets}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
