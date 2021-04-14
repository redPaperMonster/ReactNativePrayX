import React from 'react';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import {Button, InputField} from '../../../Components';
import {signIn, fieldRequired} from '../../../Utils';
import {SignUpProps} from '../../ScreensTypes';
import style from './SignUpStyles';

interface Values {
  email: string;
  password: string;
}

const SignUp: React.FC<SignUpProps> = ({navigation, route}) => {
  const handleSubmit = (values: Values) => {
    signIn(values.email, values.password);
    navigation.dangerouslyGetParent()?.navigate('UserStack');
  };

  return (
    <View style={style.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit}) => (
          <View>
            <Field name="email" validate={fieldRequired}>
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
            <Field name="password" validate={fieldRequired}>
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
