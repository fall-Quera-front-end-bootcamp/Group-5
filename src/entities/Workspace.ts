export interface WorkspaceType {
  id?: number;
  name?: string;
  color?: string;
}

export interface ParamsType {
  workspaceId?: string;
  projectId?: string;
  taskId?: string;
  memberId?: string;
  boardId?: string;
  commentId?: string;
  logId?: string;
}
