import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {MyDeskProps} from '../../ScreensTypes';
import {MyDeskStyles} from './MyDeskStyles';

const MyDesk: React.FC<MyDeskProps> = ({navigation, route}) => {
  return (
    <View>
      <View style={MyDeskStyles.container}>
        <View style={MyDeskStyles.titleContainer}>
          <Text style={MyDeskStyles.sectionText}>My Desk</Text>
        </View>
        <Image source={require('../../../Assets/icons/Union.png')} />
      </View>
      <View style={MyDeskStyles.todoContainer}></View>
      <Button
        title="open some task"
        onPress={() => navigation.navigate('TaskScreen')}></Button>
      <Button
        title="open prayer details"
        onPress={() => navigation.navigate('PrayerDetails')}></Button>
    </View>
  );
};
export default MyDesk;
