import { APIClient } from "./apiClient";
import {
  WorkspaceType,
  ProjectType,
  MembersType as MemberType,
  BoardType,
  TaskType,
  CommnetType,
  LogType,
} from "../entities/Workspace";
import { useDataStore } from "../store";

export const workspaceApiClient = new APIClient<WorkspaceType>("workspaces/");

export const workspaceMembersApiClient = () => {
  const { workspaceId } = useDataStore((s) => s.params);
  return new APIClient<MemberType>(`workspaces/${workspaceId}/members/`);
};

export const projectApiClient = () => {
  const { workspaceId } = useDataStore((s) => s.params);
  return new APIClient<ProjectType>(`workspaces/${workspaceId}/projects/`);
};

export const projectMembersApiClient = () => {
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  return new APIClient<MemberType>(
    `workspaces/${workspaceId}/projects/${projectId}/members/`
  );
};

export const boardApiClient = () => {
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  return new APIClient<BoardType>(
    `workspaces/${workspaceId}/projects/${projectId}/boards/`
  );
};

export const taskApiClient = () => {
  const { workspaceId, projectId, boardId } = useDataStore((s) => s.params);
  return new APIClient<TaskType>(
    `workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/`
  );
};

export const taskMembersApiClient = () => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  return new APIClient<MemberType>(
    `workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`
  );
};

export const taskCommentApiClient = () => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  return new APIClient<CommnetType>(
    `workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments/`
  );
};

export const taskLogsApiClient = () => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  return new APIClient<LogType>(
    `workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/logs/`
  );
};
