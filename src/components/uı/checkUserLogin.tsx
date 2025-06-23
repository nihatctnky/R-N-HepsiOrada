import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import Button from './button';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/types';
import { SIGNIN } from '../../utils/routes';


interface ListEmptyComponentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const CheckUserLogin: React.FC<ListEmptyComponentProps> = ({ title, description, icon }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <Button onPress={() => navigation.navigate(SIGNIN)} title="Giriş Yap" />
    </View>
  );
};

export default CheckUserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
  },
});
