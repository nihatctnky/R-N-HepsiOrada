import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';
import Input from '../../components/uı/input';
import Button from '../../components/uı/button';
import {height, width} from '../../utils/constants';
import {SignInSchema} from '../../utils/validationSchemas';
import {AppDispatch, RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {signInUser} from '../../store/actions/authActions';
import {REGISTER, TABBAR} from '../../utils/routes';
import {Colors} from '../../theme/colors';

const Signin: React.FC = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const {pending, isLogin} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isLogin) {
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
          initialValues={{email: 'john@mail.com', password: 'changeme'}}
          validationSchema={SignInSchema}
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 35,
            padding: 18,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              paddingVertical: 20,
              borderRadius: 100,
              width: width * 0.4,
            }}>
            <Text
              style={{
                backgroundColor: Colors.PRIMARY,
                textAlign: 'center',
                color: Colors.WHITE,
                fontSize: 15,
              }}>
              Hesabın Yok mu?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(REGISTER)}
            style={{
              backgroundColor: Colors.PRIMARY,
              paddingVertical: 20,
              borderRadius: 100,
              width: width * 0.4,
            }}>
            <Text
              style={{fontSize: 15, textAlign: 'center', color: Colors.WHITE}}>
              Yeni Hesap Oluştur..
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({});
