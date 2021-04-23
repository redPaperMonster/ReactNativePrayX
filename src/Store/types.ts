export type ColumnType = {id: number; title: string; description: string};

export type ColumnsType = ColumnType[];

export type TaskType = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
};

export type TaskStateType = {
  data: TaskType[];
  dataLoaded: boolean;
};
