import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import Button from '../../components/uı/button';
import {logOutUser} from '../../store/actions/authActions';
import CheckUserLogin from '../../components/uı/checkUserLogin';
import {LoginCurve} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import {getuserInfo} from '../../store/actions/userAction';
import {height, width} from '../../utils/constants';

const Profile: React.FC = () => {
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const {userInfo} = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      dispatch(getuserInfo());
    }
  }, [isLogin]);
  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        {isLogin ? (
          <ScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 40,
              }}>
           
           {userInfo && userInfo.avatar && (
  <Image style={styles.avatar} source={{uri: userInfo.avatar}} />
)}
              <Text style={styles.name}>{userInfo?.name}</Text>
              <Text style={styles.role}>{userInfo?.role}</Text>
              <Text style={styles.email}>{userInfo?.email}</Text>
            </View>
            <View style={{height: height * 0.3,justifyContent:"flex-end"}}>
              <Button
                onPress={() => dispatch(logOutUser())}
                title="Çıkış Yap"
              />
            </View>
          </ScrollView>
        ) : (
          <CheckUserLogin
            title="Giriş yap"
            description="Kullanıcı bilgierini görmek için lütfen giriş yapınız.."
            icon={
              <LoginCurve size={50} color={Colors.PRIMARY} variant="Bold" />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 80,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.BLACK,
    textAlign: 'center',
    marginVertical: 10,
  },
  role: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.DARKGRAY,
    textAlign: 'center',
  },
  email: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.DARKGRAY,
    textAlign: 'center',
  },
});
