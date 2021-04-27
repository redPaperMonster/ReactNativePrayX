import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UnionIcon} from '../../../Assets/icons';
import CommentModal from '../../../Modals/CommentModal/CommentModal';
import {commentActions, commentSelectors, CommentType} from '../../../Store';
import {} from '../../../Store/types';
import {colors} from '../../../Utils';
import {TaskDetailsProps} from '../../ScreensTypes';
import {AddComment, CommentList} from './Components/';
import style from './TaskDetailsStyles';

const TaskDetails: React.FC<TaskDetailsProps> = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentComment, setCurrentComment] = useState<CommentType>();
  const dataLoaded = useSelector(commentSelectors.getDataLoaded());
  const dispatch = useDispatch();
  React.useEffect(() => {
    !dataLoaded && dispatch(commentActions.loadData());
  }, []);

  if (!dataLoaded) {
    return <Text>Loading</Text>;
  }
  const handleEdit = (item: CommentType) => {
    setModalVisible(true);
    setCurrentComment(item);
  };

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={'position'}
      keyboardVerticalOffset={90}>
      <View style={style.topSection}>
        <Text style={style.textTopSection}>
          Prayer item two which is for my family to love God whole heartedly.
        </Text>
      </View>
      <View style={style.lastPrayContainer}>
        <Text style={style.text}>Last prayed 8 min ago </Text>
      </View>
      <View style={style.centerSectionContainer}>
        <View style={style.centerSectionItem}>
          <Text style={style.centerSectionTitle}>July 25 2017</Text>
          <Text style={style.centerSectionText}>Date Added</Text>
          <Text style={style.centerSectionSecondText}>Opened for 4 days</Text>
        </View>
        <View style={style.centerSectionItem}>
          <Text style={style.centerSectionCount}>123</Text>
          <Text style={style.centerSectionText}>Times Prayed Total</Text>
        </View>
      </View>
      <View style={style.centerSectionContainer}>
        <View style={style.centerSectionItem}>
          <Text style={style.centerSectionCount}>64</Text>
          <Text style={style.centerSectionText}>Times Prayed by Me</Text>
        </View>
        <View style={style.centerSectionItem}>
          <Text style={style.centerSectionCount}>55</Text>
          <Text style={style.centerSectionText}>Times Prayed by Others</Text>
        </View>
      </View>
      <View style={style.membersContainer}>
        <Text style={style.secondTitle}>MEMBERS</Text>
        <View style={style.membersList}>
          <Image
            style={style.membersItem}
            source={require('../../../Assets/images/avatar1.png')}
          />
          <TouchableOpacity style={style.addMember}>
            <UnionIcon fill={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.commentTitle}>
        <Text style={style.secondTitle}>COMMENTS</Text>
      </View>
      <View style={style.commentList}>
        <CommentList handleEdit={handleEdit} />
      </View>
      <View>
        <AddComment taskId={route.params.task.id} />
      </View>
      <CommentModal
        visible={modalVisible}
        close={() => setModalVisible(false)}
        currentComment={currentComment}
      />
    </KeyboardAvoidingView>
  );
};

export default TaskDetails;
