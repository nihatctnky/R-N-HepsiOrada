import {
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleProduct} from '../../store/actions/productsAction';

import {height, width} from '../../utils/constants';
import {
  ArrowLeft2,
  Heart,

  Like1,
  LoginCurve,
  Logout,
  Star1,
  TickCircle,
} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import Button from '../../components/uı/button';
import {addToCart} from '../../store/slices/cartSlice';
import CustomModal from '../../components/uı/customModal';

import { CART, FAVORITE, SIGNIN, TABBAR } from '../../utils/routes';
import { addFavorite, removeFavorite } from '../../store/slices/favoriteSlice';

const ProductDetail: React.FC = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  const [favoritevisible, setFavoriteVisible] = useState(false);
  const [isLoginvisible, setısLoginVisible] = useState(false);
  const {productId} = route.params;
  const {pendingDetail, productDetailData} = useSelector(
    (state: RootState) => state.products,
  );

  const {isLogin}=useSelector((state:RootState)=>state.auth)
  const {favorite}=useSelector((state:RootState)=>state.favorite)

  const isFavorite=favorite.some((item)=>item.id ==productDetailData.id)

  const handleFavorite = () => {
    if (!isLogin) {
      setısLoginVisible(true);
    } else {
      if(isFavorite)
      {
        dispatch(removeFavorite(productDetailData))
      }
      else{
        dispatch(addFavorite(productDetailData))
        setFavoriteVisible(true);
      }
     
    }

}
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, []);

  return (
   
      <View style={styles.container}>
        <CustomModal 
        cancelButton={()=>setVisible(false)}
        successButton={() => {
          setVisible(false);
          navigation.navigate(CART);
        }}
        icon={<TickCircle size={80} color={Colors.PRIMARY}variant='Bold'/>}
        title="Ürün Ekleme Başarılı"
        description="Ürününüz başarılı bir şekilde sepete eklendi."
        buttonSuccesTitle="Sepete Git"
        cancelButtonTitle="Vazgeç"
        visible={visible} setVisible={setVisible} />
         <CustomModal 
        cancelButton={()=>setısLoginVisible(false)}
        successButton={() => {
          setısLoginVisible(false);
          navigation.navigate(SIGNIN);
        }}
        icon={<LoginCurve size={80} color={Colors.PRIMARY}variant='Bold'/>}
        title="Giriş Yap"
        description="Giriş yapmadan kullanıcı favorilere ürün ekleyemez"
        buttonSuccesTitle="Giriş Yap"
        cancelButtonTitle="Vazgeç"
        visible={isLoginvisible} setVisible={setısLoginVisible} />
         <CustomModal 
        cancelButton={()=>setFavoriteVisible(false)}
        successButton={() => {
          setFavoriteVisible(false);
          navigation.navigate(TABBAR,{
            screen:FAVORITE
          })
        }}
        icon={<Heart size={80} color={Colors.RED}variant='Bold'/>}
        title="Ürün Eklendi"
        description="Ürün favorilere eklendi"
        buttonSuccesTitle="Favorilere Git"
        cancelButtonTitle="Vazgeç"
        visible={favoritevisible} setVisible={setFavoriteVisible} />
        {pendingDetail ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={Colors.PRIMARY} />
          </View>
        ) : (
          <ScrollView>
            {productDetailData?.images && (
              <ImageBackground
                source={{uri: productDetailData.images[0]}}
                style={styles.image}>
                <View style={styles.header}>
                  <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backContainer}>
                    <ArrowLeft2 size={25} color={Colors.BLACK} />
                  </Pressable>
                  <View style={styles.headerRight}>
                    <Pressable
                      onPress={() => handleFavorite()}
                      style={styles.backContainer}>
                    <Heart size={25} color={isFavorite?Colors.RED:Colors.BLACK} variant={isFavorite?"Bold":"Outline"} />
                    </Pressable>
                    <Pressable
                      onPress={() => navigation.goBack()}
                      style={styles.backContainer}>
                      <Logout size={25} color={Colors.BLACK} />
                    </Pressable>
                  </View>
                </View>
              </ImageBackground>
            )}

            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 25,
                }}>
                <View style={{width: 200}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '700'}}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {productDetailData?.title}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: Colors.RED,
                    padding: 10,
                    paddingHorizontal: 15,
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.WHITE,
                    }}>
                    % On Sale
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 15,
                  marginHorizontal: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    justifyContent: 'center',
                    padding: 5,
                    paddingHorizontal: 5,
                    marginRight: 35,
                    borderRadius: 100,
                    borderColor: Colors.GRAY,
                  }}>
                  <Star1 size={22} color="orange" variant="Bold" />
                  <Text style={{fontSize: 18, fontWeight: '600'}}>5.0</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    justifyContent: 'center',
                    padding: 5,
                    paddingHorizontal: 10,
                    marginRight: 35,
                    borderRadius: 100,
                    borderColor: Colors.GRAY,
                  }}>
                  <Like1 size={22} color={Colors.PRIMARY} variant="Bold" />
                  <Text style={{fontSize: 18, fontWeight: '600'}}>%94</Text>
                </View>

                <View
                  style={{
                    padding: 5,

                    marginRight: 35,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.DARKGRAY,
                    }}>
                    117 reviews
                  </Text>
                </View>
              </View>

              <View style={{marginVertical: 30}}>
                <Text>{productDetailData?.description}</Text>
              </View>
            </View>
          </ScrollView>
        )}
        <SafeAreaView style={{backgroundColor: Colors.WHITE}}>
          <View style={styles.priceContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <Text style={styles.priceDiscount}>
                ${productDetailData?.price}
              </Text>
              <Text style={styles.price}>${productDetailData?.price}</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Button
                onPress={() => {
                  dispatch(addToCart(productDetailData));
                  setVisible(true);
                }}
                title="Add To Cart"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
   
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: width,
    height: height / 2,
    resizeMode: 'stretch',
  },
  header: {
    top: height * 0.09,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backContainer: {
    backgroundColor: Colors.WHITE,
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: Colors.GRAY,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  priceDiscount: {
    color: Colors.DARKGRAY,
    fontSize: 16,
    lineHeight: 20,
    textDecorationLine: 'line-through',
  },
});
