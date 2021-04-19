import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {InputField} from '../../../Components';
import {userActions} from '../../../Store/Authorization/userSlice';
import {validation} from '../../../Utils';
import {SignUpProps} from '../../ScreensTypes';
import style from './SignUpStyles';
interface Values {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC<SignUpProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const handleSubmit = (values: Values) => {
    dispatch(userActions.signUp(values));
  };

  return (
    <View style={style.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit}) => (
          <View>
            <Field name="name" validate={validation.nameValidation}>
              {props => (
                <View>
                  <InputField
                    {...props}
                    label="Your name"
                    customStyle={{borderBottomWidth: 1}}
                  />
                </View>
              )}
            </Field>
            <Field name="email" validate={validation.emailValidate}>
              {props => (
                <View>
                  <InputField
                    label="Your email"
                    keyboardType="email-address"
                    {...props}
                    customStyle={{borderBottomWidth: 1}}
                  />
                </View>
              )}
            </Field>
            <Field name="password" validate={validation.passwordValidation}>
              {props => (
                <View>
                  <InputField
                    label="Your password"
                    {...props}
                    customStyle={{borderBottomWidth: 1}}
                  />
                </View>
              )}
            </Field>
            <Button onPress={handleSubmit} title="Sign up" />
          </View>
        )}
      </Form>
    </View>
  );
};

export default SignUp;
