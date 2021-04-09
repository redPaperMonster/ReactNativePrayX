import React from 'react';
import {Text, View} from 'react-native';
import {PrayerDetailsProps} from '../../ScreensTypes';

const PrayerDetails: React.FC<PrayerDetailsProps> = ({navigation, route}) => {
  return (
    <View>
      <Text> Prayer Details HERE</Text>
    </View>
  );
};

export default PrayerDetails;
