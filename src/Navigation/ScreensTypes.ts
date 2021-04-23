import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {authRoutes, RootRoutes, TasksRoutes, userRoutes} from './routes';
import {ColumnType, TaskType} from '../Store/types';

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
  Dashboard: undefined;
  TaskStack: {column: ColumnType};
  TaskDetails: {task: TaskType};
};

export type DashboardProps = StackScreenProps<
  UserStackParamList,
  userRoutes.Dashboard
>;

export type TaskStackProps = StackScreenProps<
  UserStackParamList,
  userRoutes.TaskStack
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

export type TaskTabsStackParamList = {
  Prayers: {
    columnId: number;
  };
  Subscribed: undefined;
};

export type PrayersNavigationProp = MaterialTopTabNavigationProp<
  TaskTabsStackParamList,
  TasksRoutes.Prayers
>;

export type PrayersRouteProp = RouteProp<
  TaskTabsStackParamList,
  TasksRoutes.Prayers
>;

export type PrayersProps = {
  navigation: PrayersNavigationProp;
  route: PrayersRouteProp;
};

export type SubsNavigationProp = MaterialTopTabNavigationProp<
  TaskTabsStackParamList,
  TasksRoutes.Subscribed
>;

export type SubsRouteProp = RouteProp<
  TaskTabsStackParamList,
  TasksRoutes.Subscribed
>;

export type SubsProps = {
  navigation: SubsNavigationProp;
  route: SubsRouteProp;
};
