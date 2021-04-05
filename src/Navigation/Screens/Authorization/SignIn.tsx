import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { signUp } from '../../../Utils';

const SignIn = () => {
    let name: string, email: string, pass: string;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Your name:</Text>
            <TextInput
                onChangeText={text => name = text} />
            <Text>Your email:</Text>
            <TextInput
                onChangeText={text => email = text} />
            <Text>Your password:</Text>
            <TextInput
                onChangeText={text => pass = text} />
            <Button
                title="submit"
                onPress={() => signUp(name, email, pass)}></Button>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SignIn;
