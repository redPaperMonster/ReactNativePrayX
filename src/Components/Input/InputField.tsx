import React, { Props } from 'react';
import { FieldInputProps, FieldMetaState, FieldRenderProps } from 'react-final-form';
import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';


interface InputProps extends FieldRenderProps<string> {
    meta: FieldMetaState<string>;
    input: FieldInputProps<string, HTMLElement>;
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions
}

const InputField: React.FC<InputProps> = ({ input, meta, placeholder, keyboardType }) => {
    return (
        <View >
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={input.onChange} />
            {meta && meta.touched && meta.error && (
                <Text >{meta.error}</Text>
            )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    sectionText: {
        fontSize: 10,
        textAlign: 'center',
        color: 'red',
    },
})

export default InputField;
