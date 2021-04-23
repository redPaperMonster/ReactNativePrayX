import React from 'react';
import {Field, Form} from 'react-final-form';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {UnionIcon} from '../../../../../Assets/icons';
import {InputField} from '../../../../../Components';
import {taskActions} from '../../../../../Store/Tasks';
import style from './AddPrayerStyles';
interface AddPrayerProps {
  columnId: number;
}
const AddPrayer: React.FC<AddPrayerProps> = ({columnId}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: {title: string}, form: {reset: () => void}) => {
    const task = {
      title: values.title,
      description: '',
      checked: false,
    };
    dispatch(taskActions.createTask({task: task, columnId: columnId}));
    Keyboard.dismiss();
    form.reset();
  };
  return (
    <View style={style.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit, values}) => (
          <View style={style.formContainer}>
            <View style={style.buttonWrapper}>
              <TouchableOpacity
                disabled={!!!values.title}
                onPress={handleSubmit}>
                <UnionIcon />
              </TouchableOpacity>
            </View>
            <View style={style.fieldWrapper}>
              <Field name="title">
                {props => (
                  <InputField
                    placeholder="Add a prayer..."
                    {...props}
                    customStyle={style.input}
                  />
                )}
              </Field>
            </View>
          </View>
        )}
      </Form>
    </View>
  );
};

export default AddPrayer;
