import React from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import MessageIcon from '../../../Assets/icons/Message';
import {InputField, Button} from '../../../Components';
import {
  emailValidate,
  signUp,
  passwordValidation,
  nameValidation,
} from '../../../Utils';
import {SignInProps} from '../../ScreensTypes';
import style from './SignInStyles';
interface Values {
  name: string;
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = ({navigation, route}) => {
  const handleSubmit = (values: Values) => {
    signUp(values.name, values.email, values.password);
    navigation.dangerouslyGetParent()?.navigate('UserStack');
  };

  return (
    <View style={style.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit}) => (
          <View>
            <Field name="name" validate={nameValidation}>
              {props => (
                <View>
                  <InputField
                    {...props}
                    label="Your name"
                    customStyle={{borderBottomWidth: 1}}
                    icon={<MessageIcon />}
                  />
                </View>
              )}
            </Field>
            <Field name="email" validate={emailValidate}>
              {props => (
                <View>
                  <InputField
                    keyboardType="email-address"
                    label="Your email"
                    {...props}
                    customStyle={{borderBottomWidth: 1}}
                  />
                </View>
              )}
            </Field>
            <Field name="password" validate={passwordValidation}>
              {props => (
                <View>
                  <InputField
                    {...props}
                    label="Your password"
                    customStyle={{borderBottomWidth: 1}}
                  />
                </View>
              )}
            </Field>
            <Button onPress={handleSubmit} title="Sign in" />
          </View>
        )}
      </Form>
    </View>
  );
};

export default SignIn;
