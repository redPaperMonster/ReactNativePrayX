import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Checkbox from '../../../Components/Checkbox/Checkbox';
import {userRoutes} from '../../routes';
import {DeskDashboardProps} from '../../ScreensTypes';
import style from './DeskDashboardStyles';

const DeskDashboard: React.FC<DeskDashboardProps> = ({navigation, route}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.sectionText}>My Desk</Text>
        </View>
      </View>
      <View style={style.todoContainer}></View>
      <Button
        title="open some TaskList"
        onPress={() => navigation.navigate(userRoutes.TaskList)}></Button>
      <Button
        title="open Task details"
        onPress={() => navigation.navigate(userRoutes.TaskDetails)}></Button>

      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
    </View>
  );
};
export default DeskDashboard;
