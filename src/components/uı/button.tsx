import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/colors';
import { height } from '../../utils/constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, disabled, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: disabled ? Colors.DARKGRAY : Colors.PRIMARY }]}
      disabled={disabled}
      {...rest}
    >
      {disabled ? (
        <ActivityIndicator size="small" color={Colors.WHITE} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height * 0.07,
    borderRadius: 80,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
  },
});
