import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PRODUCTDETAIL } from "../../utils/routes";
import { RootStackParamList } from "../../navigation/types";

const FilteredProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const keyword = useSelector((state: RootState) => state.search.keyword.toLowerCase());
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!keyword) return null;

  if (!Array.isArray(products)) {
    return <Text>Yükleniyor...</Text>;
  }

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(keyword)
  );

  if (!filtered || filtered.length === 0) {
    return <Text>Sonuç bulunamadı.</Text>;
  }

  return (
    <FlatList
      data={filtered}
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(PRODUCTDETAIL, { productId: item.id })}
          style={{ padding: 10, backgroundColor: "#eee", marginBottom: 10, borderRadius: 10 }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FilteredProductList;
