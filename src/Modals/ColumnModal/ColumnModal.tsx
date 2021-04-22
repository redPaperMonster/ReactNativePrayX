import React from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, InputField, Modal} from '../../Components';
import {ColumnType, columnActions} from '../../Store/';
import {validation} from '../../Utils';

interface ColumnModalProps {
  visible: boolean;
  close: () => void;
  currentColumn?: ColumnType;
}
interface Values {
  title: string;
  description: string;
}
const ColumnModal: React.FC<ColumnModalProps> = ({
  visible,
  close,
  currentColumn,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (values: Values) => {
    if (currentColumn) {
      dispatch(columnActions.editColumn({id: currentColumn.id, ...values}));
      close();
    } else {
      dispatch(columnActions.createColumn(values));
      close();
    }
  };

  return (
    <View>
      <Modal visible={visible} close={close}>
        <Form onSubmit={handleSubmit} initialValues={currentColumn || {}}>
          {({handleSubmit, values}) => (
            <View>
              <Field name="title" validate={validation.fieldRequired}>
                {props => (
                  <View>
                    <InputField
                      {...props}
                      label="Column title"
                      customStyle={{borderBottomWidth: 1}}
                    />
                  </View>
                )}
              </Field>
              <Field name="description" validate={validation.fieldRequired}>
                {props => (
                  <View>
                    <InputField
                      {...props}
                      label="Column description"
                      customStyle={{borderBottomWidth: 1}}
                    />
                  </View>
                )}
              </Field>
              <Button
                onPress={handleSubmit}
                title={currentColumn ? 'save' : 'Create column'}
              />
            </View>
          )}
        </Form>
      </Modal>
    </View>
  );
};

export default ColumnModal;
