import React from 'react';
import {FieldRenderProps} from 'react-final-form';
import {
  KeyboardTypeOptions,
  Text,
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {InputFieldStyles} from './InputFieldStyles';

interface InputProps extends FieldRenderProps<string> {
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  placeholder?: string;
  customStyle?: TextStyle;
}

const InputField: React.FC<InputProps> = ({
  input,
  meta,
  keyboardType,
  label,
  placeholder = '',
  customStyle = InputFieldStyles.input,
}) => {
  const combinedStyles: StyleProp<TextStyle> = StyleSheet.compose(
    InputFieldStyles.input,
    customStyle,
  );

  return (
    <View style={InputFieldStyles.container}>
      {label && <Text style={InputFieldStyles.label}>{label}</Text>}
      <View style={InputFieldStyles.inputWrapper}>
        <TextInput
          style={combinedStyles}
          keyboardType={keyboardType}
          onChangeText={input.onChange}
          placeholder={placeholder}
        />
      </View>
      {meta && meta.touched && meta.error && (
        <Text style={InputFieldStyles.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

export default InputField;
