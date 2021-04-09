import {RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

export type RootStackParamList = {
  Authorization: undefined;
  UserStack: undefined;
};

export type AuthProps = StackScreenProps<RootStackParamList, 'Authorization'>;
export type UserStackProps = StackScreenProps<RootStackParamList, 'UserStack'>;

export type UserStackParamList = {
  MyDesk: undefined;
  TaskScreen: undefined;
  PrayerDetails: undefined;
};

export type MyDeskProps = StackScreenProps<UserStackParamList, 'MyDesk'>;

export type TaskProps = StackScreenProps<UserStackParamList, 'TaskScreen'>;

export type PrayerDetailsProps = StackScreenProps<
  UserStackParamList,
  'PrayerDetails'
>;

export type TabsStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SingInNavigationProp = MaterialTopTabNavigationProp<
  TabsStackParamList,
  'SignIn'
>;

export type SignInRouteProp = RouteProp<TabsStackParamList, 'SignIn'>;

export type SignInProps = {
  navigation: SingInNavigationProp;
  route: SignInRouteProp;
};

export type SingUpNavigationProp = MaterialTopTabNavigationProp<
  TabsStackParamList,
  'SignUp'
>;

export type SignUpRouteProp = RouteProp<TabsStackParamList, 'SignUp'>;

export type SignUpProps = {
  navigation: SingUpNavigationProp;
  route: SignUpRouteProp;
};
