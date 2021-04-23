import React, {useState} from 'react';
import {ListRenderItemInfo, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DashboardProps} from '../../ScreensTypes';
import styles from './DashboardStyles';
import {columnSelectors, columnActions} from '../../../Store';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ColumnType} from '../../../Store/types';
import ColumnModal from '../../../Modals/ColumnModal/ColumnModal';
import {UnionIcon} from '../../../Assets/icons';
import {userRoutes} from '../../routes';

const Dashboard: React.FC<DashboardProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentColumn, setCurrentColumn] = useState<ColumnType>();
  const columns = useSelector(columnSelectors.getAllColumns());

  const renderHiddenItem = ({item}: ListRenderItemInfo<ColumnType>) => (
    <View style={styles.rowsContainer}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          setModalVisible(true);
          setCurrentColumn(item);
        }}>
        <Text style={[styles.backTextWhite]}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(columnActions.deleteColumn(item.id))}>
        <Text style={[styles.backTextWhite]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon} />
        <Text style={styles.title}>My Desk</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setCurrentColumn(undefined);
          }}
          style={styles.icon}>
          <UnionIcon />
        </TouchableOpacity>
      </View>

      <SwipeListView
        data={columns}
        renderItem={({item}, rowMap) => (
          <View style={styles.column}>
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate(userRoutes.TaskStack, {column: item})
              }
              style={styles.standaloneRowFront}>
              <Text style={styles.sectionText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        renderHiddenItem={item => renderHiddenItem(item)}
        leftOpenValue={75}
        rightOpenValue={-75}
        stopLeftSwipe={75}
        stopRightSwipe={-75}
      />
      <ColumnModal
        visible={modalVisible}
        close={() => setModalVisible(false)}
        currentColumn={currentColumn}
      />
    </View>
  );
};

export default Dashboard;
