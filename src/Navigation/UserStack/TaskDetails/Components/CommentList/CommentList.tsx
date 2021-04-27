import React from 'react';
import {ListRenderItemInfo, Text, TouchableOpacity, View} from 'react-native';
import style from './CommentStyles';
import {SwipeListView, RowMap} from 'react-native-swipe-list-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentActions,
  commentSelectors,
  CommentType,
} from '../../../../../Store';
import Comment from '../Comment/Comment';

interface CommentListProps {
  handleEdit: (item: CommentType) => void;
}
const CommentList: React.FC<CommentListProps> = ({handleEdit}) => {
  const dispatch = useDispatch();
  const comments = useSelector(commentSelectors.getComments());

  const renderHiddenItem = (
    {item}: ListRenderItemInfo<any>,
    rowMap: RowMap<any>,
  ) => (
    <View style={style.rowsContainer}>
      <TouchableOpacity
        style={style.editButton}
        onPress={() => {
          handleEdit(item);
        }}>
        <Text style={[style.backTextWhite]}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => dispatch(commentActions.deleteComment(item.id))}>
        <Text style={[style.backTextWhite]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.container}>
      <SwipeListView
        data={comments}
        renderItem={({item}) => (
          <View style={style.task} key={item.id}>
            <Comment
              key={item.id}
              author={item.userId}
              body={item.body}
              date={item.created}
            />
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
        stopLeftSwipe={75}
        stopRightSwipe={-75}
      />
    </View>
  );
};

export default CommentList;
