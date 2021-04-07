import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { MyDesk, PrayerDetails, TaskScreen } from '..';
interface Props {
    navigation: any //TODO:
}

const Stack = createStackNavigator();

const MainScreen: React.FC<Props> = ({ navigation }) => {

    return (
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
    );
};
const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#FFFFFF'
    }
}
)
export default MainScreen;
