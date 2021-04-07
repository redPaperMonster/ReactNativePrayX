import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Authorization, MainScreen } from '.';
import { createStackNavigator } from '@react-navigation/stack'


const MainNavigation = () => {

    const Stack = createStackNavigator();
    return (
        <View>
            <NavigationContainer>
                <View style={styles.sectionContainer}>
                    <Stack.Navigator initialRouteName="Authorization">
                        <Stack.Screen
                            name="Authorization"
                            component={Authorization}
                        />
                        <Stack.Screen
                            name="MainScreen"
                            component={MainScreen}
                            options={{ headerShown: false }} />
                    </Stack.Navigator></View>
            </NavigationContainer>

        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },

    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
export default MainNavigation;
