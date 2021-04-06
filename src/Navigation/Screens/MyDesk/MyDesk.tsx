import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TodoItem } from '../../../Components';

interface Props {
    navigation: any
}
const MyDesk: React.FC<Props> = ({ navigation }) => {
    console.log(`туть`)
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionText}>My Desk</Text>
                </View>
                <Image source={require('../../../Assets/icons/Union.png')} />
            </View>
            <View style={styles.todoContainer}>
                <TodoItem></TodoItem>
            </View>
            <Button
                title="open some task"
                onPress={() => navigation.navigate('TaskScreen')}></Button>
            <Button
                title="open prayer details"
                onPress={() => navigation.navigate('PrayerDetails')}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    sectionText: {
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
        color: '#514D47',
        lineHeight: 20
    },
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 64,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1
    },
    titleContainer: {
        flexGrow: 1,
    },
    todoContainer: {

    }
})

export default MyDesk;
