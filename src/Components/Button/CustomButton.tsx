import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {CustomButtonStyles} from './CustomButtonStyles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  customStyle?: ViewStyle;
}

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  customStyle = CustomButtonStyles.button,
}) => {
  const combinedStyles: StyleProp<ViewStyle> = StyleSheet.compose(
    CustomButtonStyles.button,
    customStyle,
  );
  return (
    <View>
      <TouchableOpacity style={combinedStyles} onPress={onPress}>
        <Text style={CustomButtonStyles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
