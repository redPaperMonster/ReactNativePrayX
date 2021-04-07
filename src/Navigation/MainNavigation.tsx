import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { UserStack, AuthStack } from '.';

const MainNavigation = () => {

    const Stack = createStackNavigator();
    return (
        <View>
            <NavigationContainer>
                <View style={styles.sectionContainer}>
                    <Stack.Navigator initialRouteName="AuthStack">
                        <Stack.Screen
                            name="AuthStack"
                            component={AuthStack}
                        />
                        <Stack.Screen
                            name="UserStack"
                            component={UserStack}
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
