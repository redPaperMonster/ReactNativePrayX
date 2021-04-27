export type createCommentPayload = {
  id: number;
  data: {body: string};
};

export type editCommentPayload = {
  id: number;
  body: string;
};
