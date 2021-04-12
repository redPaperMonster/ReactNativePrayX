import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, Text, View} from 'react-native';
import {InputField} from '../../../Components';
import {
  emailValidate,
  signUp,
  passwordValidation,
  nameValidation,
} from '../../../Utils';
import {SignInProps} from '../../ScreensTypes';
import {SignInStyles} from './SignInStyles';
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
    <View style={SignInStyles.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit}) => (
          <View>
            <Field name="name" validate={nameValidation}>
              {props => (
                <View>
                  <Text>Your name</Text>
                  <InputField {...props} placeholder="HERE!" />
                </View>
              )}
            </Field>
            <Field name="email" validate={emailValidate}>
              {props => (
                <View>
                  <Text>Your email</Text>
                  <InputField
                    keyboardType="email-address"
                    placeholder="HERE!"
                    {...props}
                  />
                </View>
              )}
            </Field>
            <Field name="password" validate={passwordValidation}>
              {props => (
                <View>
                  <Text>Your password</Text>
                  <InputField placeholder="HERE!" {...props} />
                </View>
              )}
            </Field>
            <Button title="submit" onPress={handleSubmit}></Button>
          </View>
        )}
      </Form>
    </View>
  );
};

export default SignIn;
