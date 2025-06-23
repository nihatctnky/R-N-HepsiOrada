import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import FavoriteItem from '../../components/favorite/favoriteItem';
import ListEmptyComponent from '../../components/uı/listEmptyComponent';
import { Heart } from 'iconsax-react-native';
import { Colors } from '../../theme/colors';

const Favorite: React.FC = () => {
  const {favorite} = useSelector((state: RootState) => state.favorite);
  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        <FlatList
       keyExtractor={(item) => item.id.toString()} 
          ListEmptyComponent={
            <ListEmptyComponent
            icon={<Heart size={50} variant="Bold" color={Colors.RED}/>}
              title="Favoriler Boş"
              description="Favori listesine henüz ürün eklemediniz"
            />
          }
          data={favorite}
          renderItem={({item}) => <FavoriteItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
