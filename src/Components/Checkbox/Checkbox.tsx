import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckboxIcon from './../../Assets/icons/Checkbox.svg';
import {CheckboxStyles} from './CheckboxStyles';
const Checkbox = () => {
  const [value, setValue] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setValue(!value);
        }}>
        <View style={CheckboxStyles.checkboxBody}>
          {value && (
            <View style={CheckboxStyles.icon}>
              <CheckboxIcon />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Checkbox;
