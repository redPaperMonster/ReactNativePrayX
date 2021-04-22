import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import style from './ButtonStyles';

interface ButtonProps {
  onPress: () => void;
  title?: string;
  customStyle?: ViewStyle;
  icon?: Element;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title = '',
  customStyle,
  icon,
}) => {
  return (
    <TouchableOpacity style={[style.button, customStyle]} onPress={onPress}>
      {icon ? (
        <View style={style.icon}>{icon}</View>
      ) : (
        <Text style={style.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
