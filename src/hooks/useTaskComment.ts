import { useMutation, useQuery } from "@tanstack/react-query";
import { CommnetType } from "../entities/Workspace";
import { taskCommentApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useTaskComments = () => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  const apiClient = taskCommentApiClient();
  return useQuery<CommnetType[], Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      taskId,
      "comments",
    ],
    queryFn: apiClient.getAll,
  });
};

export const useAddTaskComment = () => {
  const apiClient = taskCommentApiClient();
  return useMutation<CommnetType, Error, CommnetType>({
    mutationFn: apiClient.post,
  });
};

export const useGetTaskComment = (id: string) => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  const apiClient = taskCommentApiClient();
  return useQuery<CommnetType, Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      taskId,
      "comments",
      id,
    ],
    queryFn: () => apiClient.get(id),
  });
};
