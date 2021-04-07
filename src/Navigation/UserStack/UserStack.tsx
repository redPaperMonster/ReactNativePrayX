import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyDesk, PrayerDetails, TaskScreen } from '.';
import { createStackNavigator } from '@react-navigation/stack'


const UserStack = () => {
    const Stack = createStackNavigator();
    return (
        <View>
            <NavigationContainer>
                <View style={styles.sectionContainer}>
                    <Stack.Navigator initialRouteName="MyDesk">
                        <Stack.Screen
                            name="MyDesk"
                            component={MyDesk}
                        />
                        <Stack.Screen
                            name="TaskScreen"
                            component={TaskScreen}
                        />
                        <Stack.Screen
                            name="PrayerDetails"
                            component={PrayerDetails} />
                    </Stack.Navigator>
                </View>
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
export default UserStack;
