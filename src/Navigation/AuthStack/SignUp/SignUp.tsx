import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, Text, View} from 'react-native';
import {InputField} from '../../../Components';
import {signIn, fieldRequired} from '../../../Utils';
import {SignUpProps} from '../../ScreensTypes';
import {SignUpStyles} from './SignUpStyles';

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
    <View style={SignUpStyles.container}>
      <Form onSubmit={handleSubmit}>
        {({handleSubmit}) => (
          <View>
            <Field name="email" validate={fieldRequired}>
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
            <Field name="password" validate={fieldRequired}>
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

export default SignUp;
