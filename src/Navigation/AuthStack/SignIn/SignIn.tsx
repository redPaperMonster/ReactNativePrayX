import React from 'react';
import { Field, Form } from 'react-final-form';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { InputField } from '../../../../Components';
import { emailValidate, signUp, passwordValidation, nameValidation } from '../../../../Utils';
interface Values {
    name: string,
    email: string,
    password: string
}

const SignIn = () => {
    const handleSubmit = (values: Values) => {
        signUp(values.name, values.email, values.password)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <View>
                        <Field
                            name="name"
                            validate={nameValidation}>
                            {(props) => (
                                <View>
                                    <Text>Your name</Text>
                                    <InputField
                                        //name={props.input.name}
                                        meta={props.meta}
                                        input={props.input}
                                        placeholder="HERE!"
                                        onChangeText={props.input.onChange} />
                                </View>
                            )}
                        </Field>
                        <Field
                            name="email"
                            validate={emailValidate}>
                            {(props) => (
                                <View>
                                    <Text>Your email</Text>
                                    <InputField
                                        keyboardType="email-address"
                                        placeholder="HERE!"
                                        meta={props.meta}
                                        input={props.input}
                                    />
                                </View>
                            )}
                        </Field>
                        <Field
                            name="password"
                            validate={passwordValidation}>
                            {(props) => (
                                <View>
                                    <Text>Your password</Text>
                                    <InputField
                                        placeholder="HERE!"
                                        onChangeText={props.input.onChange}
                                        meta={props.meta}
                                        input={props.input} />
                                </View>
                            )}
                        </Field>
                        <Button
                            title="submit"
                            onPress={handleSubmit}></Button>
                    </View>
                )}
            </Form>
        </View >
    );
};

const styles = StyleSheet.create({

})

export default SignIn;
