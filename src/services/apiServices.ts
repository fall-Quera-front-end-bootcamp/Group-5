import { APIClient } from "./apiClient";
import { WorkspaceType } from "../entities/Workspace";
import { ProjectType } from "../entities/Project";
import useAuthStore from "../store";

export const workspaceApiClient = new APIClient<WorkspaceType>("workspaces/");

export const workspaceMembersApiClient = () => {
  const { workspaceId } = useAuthStore((s) => s.params);
  return new APIClient<ProjectType>(`workspaces/${workspaceId!}/members/`);
};

export const projectApiClient = () => {
  const { workspaceId } = useAuthStore((s) => s.params);
  return new APIClient<ProjectType>(`workspaces/${workspaceId!}/projects/`);
};

export const projectMembersApiClient = () => {
  const { workspaceId, projectId } = useAuthStore((s) => s.params);
  return new APIClient<ProjectType>(
    `workspaces/${workspaceId!}/projects/${projectId}/members/`
  );
};

export const boardApiClient = () => {
  const { workspaceId, projectId } = useAuthStore((s) => s.params);
  return new APIClient<ProjectType>(
    `workspaces/${workspaceId!}/projects/${projectId}/boards/`
  );
};

export const taskApiClient = () => {
  const { workspaceId, projectId, boardId } = useAuthStore((s) => s.params);
  return new APIClient<ProjectType>(
    `workspaces/${workspaceId!}/projects/${projectId}/boards/${boardId}/tasks/`
  );
};

export const taskMembersApiClient = () => {
  const { workspaceId, projectId, boardId, taskId } = useAuthStore(
    (s) => s.params
  );
  return new APIClient<ProjectType>(
    `workspaces/${workspaceId!}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`
  );
};

export const taskCommentApiClient = () => {
  const { workspaceId, projectId, boardId, taskId } = useAuthStore(
    (s) => s.params
  );
  return new APIClient<ProjectType>(
    `workspaces/${workspaceId!}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/comments/`
  );
};

export const taskLogsApiClient = () => {
  const { workspaceId, projectId, boardId, taskId } = useAuthStore(
    (s) => s.params
  );
  return new APIClient<ProjectType>(
    `workspaces/${workspaceId!}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/logs/`
  );
};
