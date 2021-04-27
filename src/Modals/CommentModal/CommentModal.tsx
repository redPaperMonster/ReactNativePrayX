import React from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, InputField, Modal} from '../../Components';
import {commentActions, CommentType} from '../../Store';
import {validation} from '../../Utils';
import style from '../ColumnModal/ColumnModalStyles';

interface CommentModalProps {
  visible: boolean;
  close: () => void;
  currentComment?: CommentType;
}
interface CommentModalValues {
  body: string;
}
const CommentModal: React.FC<CommentModalProps> = ({
  visible,
  close,
  currentComment,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (values: CommentModalValues) => {
    dispatch(
      commentActions.editComment({id: currentComment?.id, body: values.body}),
    );
    close();
  };

  return (
    <View>
      <Modal visible={visible} close={close}>
        <Form onSubmit={handleSubmit} initialValues={currentComment}>
          {({handleSubmit}) => (
            <View>
              <Field name="body" validate={validation.required}>
                {props => (
                  <View>
                    <InputField
                      {...props}
                      label="Comment text"
                      customStyle={style.input}
                    />
                  </View>
                )}
              </Field>

              <Button onPress={handleSubmit} title="save" />
            </View>
          )}
        </Form>
      </Modal>
    </View>
  );
};

export default CommentModal;
