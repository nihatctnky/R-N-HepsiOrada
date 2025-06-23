import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';
import Input from '../../components/uı/input';
import Button from '../../components/uı/button';
import {height} from '../../utils/constants';
import {RegisterSchema} from '../../utils/validationSchemas';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {signInUser} from '../../store/actions/authActions';
import {TABBAR} from '../../utils/routes';
import {getuserInfo} from '../../store/actions/userAction';

// React Navigation tipleri
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Ekranların tiplerini tanımla (gerekirse diğer ekranları da ekle)
type RootStackParamList = {
  Signin: undefined;
  TABBAR: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Signin'>;

const Signin: React.FC<Props> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const {pending, isLogin} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isLogin) {
      dispatch(getuserInfo());
      navigation.reset({
        index: 0,
        routes: [{name: TABBAR}],
      });
    }
  }, [isLogin]);

  return (
    <SafeAreaView style={defaultScreenStyle.SafeAreaView}>
      <View style={defaultScreenStyle.container}>
        <Formik
          initialValues={{email: 'nico@gmail.com', password: '1234'}}
          validationSchema={RegisterSchema}
          onSubmit={async (values, {setErrors}) => {
            try {
              await dispatch(signInUser(values)).unwrap();
            } catch (error) {
              setErrors({email: 'Email veya şifre hatalı'});
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              <View style={{marginBottom: height * 0.1}}>
                <Input
                  error={errors.email}
                  label="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email giriniz.."
                />
                <Input
                  error={errors.password}
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                  secureTextEntry
                />
              </View>
              <Button
                disabled={pending}
                title="Giriş Yap"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({});
