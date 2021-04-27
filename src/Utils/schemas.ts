import {schema} from 'normalizr';

const user = new schema.Entity('user');
const card = new schema.Entity('card');
export const commentItem = new schema.Entity('comment');

export const createCommentSchema = new schema.Entity('comments', {
  user: user,
  card: card,
});

export const commentsSchema = new schema.Array(commentItem);
