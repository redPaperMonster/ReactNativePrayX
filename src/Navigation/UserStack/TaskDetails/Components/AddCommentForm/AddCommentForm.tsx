import React from 'react';
import {Field, Form} from 'react-final-form';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {MessageIcon, UserIcon} from '../../../../../Assets/icons';
import {InputField} from '../../../../../Components';
import {commentActions} from '../../../../../Store';
import style from './AddCommentStyles';
interface AddCommentProps {
  taskId: number;
}
interface AddCommentValues {
  body: string;
}

const AddComment: React.FC<AddCommentProps> = ({taskId}) => {
  const dispatch = useDispatch();

  const handleSubmit = (
    {body}: AddCommentValues,
    form: {reset: () => void},
  ) => {
    const data = {
      body,
    };
    dispatch(commentActions.createComment({data, id: taskId}));
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
                disabled={!!!values.body}
                onPress={handleSubmit}>
                <MessageIcon />
              </TouchableOpacity>
            </View>
            <View style={style.fieldWrapper}>
              <Field name="body">
                {props => (
                  <InputField
                    placeholder="Add a comment..."
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

export default AddComment;
