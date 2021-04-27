import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './CommentStyles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

interface CommentProps {
  author: number;
  body: string;
  date: string;
}

const Comment: React.FC<CommentProps> = ({author, body, date}) => {
  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Image
          style={style.avatarImage}
          source={require('../../../../../Assets/images/avatar1.png')}
        />
      </View>
      <View>
        <View style={style.comment}>
          <View style={style.head}>
            <Text style={style.author}>{author}</Text>
            <Text style={style.date}>{dayjs(date).fromNow()}</Text>
          </View>
          <View>
            <Text style={style.body}>{body}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comment;
