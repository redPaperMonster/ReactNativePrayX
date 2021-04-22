import React, {useState} from 'react';
import {ListRenderItemInfo, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../../Components';
import {DashboardProps} from '../../ScreensTypes';
import styles from './DashboardStyles';
import {columnSelectors, userActions, columnActions} from '../../../Store';
import {SwipeListView, RowMap} from 'react-native-swipe-list-view';
import {ColumnType} from '../../../Store/types';
import ColumnModal from '../../../Modals/ColumnModal/ColumnModal';
import {colors} from '../../../Utils';
import {UnionIcon} from '../../../Assets/icons';

const Dashboard: React.FC<DashboardProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentColumn, setCurrentColumn] = useState<ColumnType>();
  const columns = useSelector(columnSelectors.getAllColumns());

  const renderHiddenItem = (
    data: ListRenderItemInfo<ColumnType>,
    rowMap: RowMap<ColumnType>,
  ) => (
    <View style={styles.rowsContainer}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          setModalVisible(true);
          setCurrentColumn(data.item);
        }}>
        <Text style={[styles.backTextWhite]}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(columnActions.deleteColumn(data.item.id))}>
        <Text style={[styles.backTextWhite]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Desk</Text>
        <Button
          onPress={() => {
            setModalVisible(true);
            setCurrentColumn(undefined);
          }}
          customStyle={{
            backgroundColor: colors.white,
            marginRight: 20,
          }}
          icon={<UnionIcon />}
        />
      </View>

      <SwipeListView
        data={columns}
        renderItem={(data, rowMap) => (
          <View style={styles.column}>
            <TouchableOpacity
              key={data.item.id}
              onPress={() =>
                navigation.navigate('TaskList', {column: data.item})
              }
              style={styles.standaloneRowFront}>
              <Text style={styles.sectionText}>{data.item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
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
      <Button title="log out" onPress={() => dispatch(userActions.logOut())} />
    </View>
  );
};

export default Dashboard;
