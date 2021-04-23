import React from 'react';
import style from './ButtonStyles';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
interface ButtonProps {
  onPress: () => void;
  title?: string;
  customStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({onPress, title = '', customStyle}) => {
  return (
    <TouchableOpacity style={[style.button, customStyle]} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
