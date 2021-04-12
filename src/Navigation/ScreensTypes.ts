import {RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {authRoutes, RootRoutes, userRoutes} from './routes';

export type RootStackParamList = {
  AuthStack: undefined;
  UserStack: undefined;
};

export type AuthProps = StackScreenProps<
  RootStackParamList,
  RootRoutes.AuthStack
>;
export type UserStackProps = StackScreenProps<
  RootStackParamList,
  RootRoutes.UserStack
>;

export type UserStackParamList = {
  DeskDashboard: undefined;
  TaskList: undefined;
  TaskDetails: undefined;
};

export type DeskDashboardProps = StackScreenProps<
  UserStackParamList,
  userRoutes.DeskDashboard
>;

export type TaskListProps = StackScreenProps<
  UserStackParamList,
  userRoutes.TaskList
>;

export type TaskDetailsProps = StackScreenProps<
  UserStackParamList,
  userRoutes.TaskDetails
>;

export type TabsStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SingInNavigationProp = MaterialTopTabNavigationProp<
  TabsStackParamList,
  authRoutes.SignIn
>;

export type SignInRouteProp = RouteProp<TabsStackParamList, authRoutes.SignIn>;

export type SignInProps = {
  navigation: SingInNavigationProp;
  route: SignInRouteProp;
};

export type SingUpNavigationProp = MaterialTopTabNavigationProp<
  TabsStackParamList,
  authRoutes.SignUp
>;

export type SignUpRouteProp = RouteProp<TabsStackParamList, authRoutes.SignUp>;

export type SignUpProps = {
  navigation: SingUpNavigationProp;
  route: SignUpRouteProp;
};
