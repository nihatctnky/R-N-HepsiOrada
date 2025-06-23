import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {SearchNormal} from 'iconsax-react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string 
  showIcon?: boolean;
}

const Input: React.FC<InputProps> = props => {
  const {showIcon, label, error} = props;
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          {...props}
          placeholderTextColor={Colors.DARKGRAY}
          style={styles.input}
        />
        {showIcon && <SearchNormal size={18} color="gray" />}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GRAY,
    height: height * 0.05,
    paddingHorizontal: 5,
    borderRadius: 10,
    paddingRight: 10,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  marginVertical:10
  },
  error: {
    color: Colors.RED,
    marginVertical: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
