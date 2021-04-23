import React from 'react';
import {FieldRenderProps} from 'react-final-form';
import {
  KeyboardTypeOptions,
  Text,
  View,
  TextInput,
  ViewStyle,
} from 'react-native';
import style from './InputFieldStyles';

interface InputProps extends FieldRenderProps<string> {
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  placeholder?: string;
  customStyle?: ViewStyle | ViewStyle[];
  icon?: Element;
}

const InputField: React.FC<InputProps> = ({
  input,
  meta,
  keyboardType,
  label,
  placeholder = '',
  customStyle,
  icon,
}) => {
  return (
    <View>
      {label && <Text style={style.label}>{label}</Text>}
      <View style={style.inputWrapper}>
        <View style={style.icon}>{icon}</View>
        <TextInput
          style={[style.input, customStyle]}
          keyboardType={keyboardType}
          onChangeText={input.onChange}
          placeholder={placeholder}
          value={input.value}
        />
      </View>
      {meta && meta.touched && meta.error && (
        <Text style={style.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

export default InputField;
