import React from 'react';
import { Field, Form } from 'react-final-form';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { InputField } from '../../../../Components';
import {
    signIn,
    fieldRequired
} from '../../../../Utils';

interface Values {
    email: string,
    password: string
}
interface Props {
    navigation: any
}

const SignUp: React.FC<Props> = ({ navigation }) => {

    const handleSubmit = (values: Values) => {
        signIn(values.email, values.password);
        navigation.navigate('MainScreen');
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <View>
                        <Field
                            name="email"
                            validate={fieldRequired}>
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
                            validate={fieldRequired}>
                            {(props) => (
                                <View>
                                    <Text>Your password</Text>
                                    <InputField
                                        placeholder="HERE!"
                                        meta={props.meta}
                                        input={props.input}
                                    />
                                </View>
                            )}
                        </Field>
                        <Button
                            title="submit"
                            onPress={handleSubmit}></Button>
                    </View>
                )}
            </Form>
            <Button title="next" onPress={() => navigation.navigate('MainScreen')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SignUp;
