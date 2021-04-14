import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import style from './ButtonStyles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  customStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({onPress, title, customStyle}) => {
  return (
    <TouchableOpacity style={[style.button, customStyle]} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
