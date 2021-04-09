import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const TodoItem = () => {

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
                <View style={styles.todoItem}>
                    <Text style={styles.todoText}>To Do</Text>
                </View>
                <View style={styles.todoItem}>
                    <Text style={styles.todoText}>In progress</Text>
                </View>
                <View style={styles.todoItem}>
                    <Text style={styles.todoText}>Completed</Text>
                </View>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    todoItem: {
        flexGrow: 1,
        flexBasis: "auto",
        flexShrink: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        padding: 20,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#E5E5E5'
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    todoText: {
        fontSize: 17,
        color: '#514D47',
        lineHeight: 20
    }
})

export default TodoItem;
