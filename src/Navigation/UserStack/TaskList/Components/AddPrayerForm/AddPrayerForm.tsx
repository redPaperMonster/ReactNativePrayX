import React from 'react';
import {Field, Form} from 'react-final-form';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {UnionIcon} from '../../../../../Assets/icons';
import {InputField} from '../../../../../Components';
import {taskActions} from '../../../../../Store/Tasks';
import {validation} from '../../../../../Utils';
import style from './AddPrayerStyles';
interface AddPrayerProps {
  columnId: number;
}
const AddPrayer: React.FC<AddPrayerProps> = ({columnId}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: {title: string}) => {
    const task = {
      title: values.title,
      description: '',
      checked: false,
    };
    dispatch(taskActions.createTask({task: task, columnId: columnId}));
    Keyboard.dismiss();
  };
  return (
    <View style={style.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit, form}) => (
          <View style={style.formContainer}>
            <View style={style.buttonWrapper}>
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                  form.reset();
                  Keyboard.dismiss();
                }}>
                <UnionIcon />
              </TouchableOpacity>
            </View>
            <View style={style.fieldWrapper}>
              <Field name="title" validate={validation.required}>
                {props => (
                  <InputField
                    placeholder="Add a prayer..."
                    {...props}
                    customStyle={style.input}
                    hideError
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
function dismissKeyboard() {
  throw new Error('Function not implemented.');
}
