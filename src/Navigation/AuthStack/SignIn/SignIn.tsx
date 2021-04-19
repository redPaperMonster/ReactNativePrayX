import React from 'react';
import {Field, Form} from 'react-final-form';
import {Text, View} from 'react-native';
import {Button, InputField} from '../../../Components';
import {validation} from '../../../Utils';
import {SignInProps} from '../../ScreensTypes';
import style from './SignInStyles';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener, userActions} from '../../../Store/';
import {FormApi, SubmissionErrors} from 'final-form';
interface Values {
  email: string;
  password: string;
}
interface SubmitError {
  name: string;
}

const SignIn: React.FC<SignInProps> = ({navigation, route}) => {
  const SubmitError = ({name}: SubmitError) => (
    <Field
      name={name}
      subscription={{submitError: true, dirtySinceLastSubmit: true}}>
      {({meta: {submitError, dirtySinceLastSubmit}}) => {
        return submitError && !dirtySinceLastSubmit ? (
          <Text>{submitError}</Text>
        ) : null;
      }}
    </Field>
  );

  return (
    <View style={style.container}>
      <MakeAsyncFunction
        listener={promiseListener}
        start={userActions.signIn.type}
        resolve={userActions.signInSuccess.type}
        reject={userActions.signInReject.type}>
        {(
          onSubmit: (
            values: Record<string, any>,
            form: FormApi<Record<string, any>, Partial<Record<string, any>>>,
            callback?: ((errors?: SubmissionErrors) => void) | undefined,
          ) => void | SubmissionErrors | Promise<SubmissionErrors>,
        ) => (
          <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
              <View>
                <Field name="email" validate={validation.nameValidation}>
                  {props => (
                    <View>
                      <InputField
                        label="Your name"
                        customStyle={{borderBottomWidth: 1}}
                        keyboardType="email-address"
                        {...props}
                      />
                    </View>
                  )}
                </Field>
                <Field name="password" validate={validation.fieldRequired}>
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
                <SubmitError name="formError" />
                <Button onPress={handleSubmit} title="Sign in" />
              </View>
            )}
          </Form>
        )}
      </MakeAsyncFunction>
    </View>
  );
};

export default SignIn;
