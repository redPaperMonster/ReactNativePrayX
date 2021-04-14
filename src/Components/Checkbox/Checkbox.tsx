import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {CheckboxIcon} from './../../Assets/icons/';
import style from './CheckboxStyles';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, onChange}) => {
  return (
    <View>
      <TouchableOpacity onPress={onChange}>
        <View style={style.checkboxBody}>
          {checked && (
            <View style={style.icon}>
              <CheckboxIcon />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Checkbox;
