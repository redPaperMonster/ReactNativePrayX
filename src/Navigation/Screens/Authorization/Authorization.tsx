import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SignIn, SignUp } from '.'

const Tab = createMaterialTopTabNavigator();

interface Props {
    navigation: any //TODO:
}

const Authorization: React.FC<Props> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.sectionText}>Hi!</Text>
                <Text style={styles.sectionText}>To continue using the app log in or register</Text>
            </View>
            <View style={styles.tabContainer}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Sign in"
                        component={SignIn} />
                    <Tab.Screen
                        name="Sign up"
                        component={SignUp} />
                </Tab.Navigator>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    sectionText: {
        fontSize: 10,
        fontWeight: '600',
        textAlign: 'center',
        color: '#514D47',
        lineHeight: 20,
        marginTop: 40
    },
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: "column",
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    textContainer: {
        flex: 1
    },
    tabContainer: {
        flex: 3
    }
})

export default Authorization;
