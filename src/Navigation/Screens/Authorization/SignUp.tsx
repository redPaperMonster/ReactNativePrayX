import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
    getColumns,
    signIn
} from '../../../Utils';

const SignUp = () => {
    let email: string = "", pass: string = "";

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Your email:</Text>
            <TextInput
                onChangeText={(text) => { email = text }}></TextInput>
            <Text>Your password:</Text>
            <TextInput
                onChangeText={(text) => { pass = text }}></TextInput>
            <Button
                title="submit"
                onPress={() => signIn(email, pass)}></Button>
            <Button
                title="getColumns"
                onPress={() => getColumns('4135aa9dc1b842a653dea846903ddb95bfb8c5a10c504a7fa16e10bc31d1fdf0')}>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SignUp;
