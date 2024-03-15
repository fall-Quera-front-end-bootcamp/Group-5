import { useMutation, useQuery } from "@tanstack/react-query";
import { TaskType } from "../entities/Workspace";
import { taskApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useTasks = () => {
  const { workspaceId, projectId, boardId } = useDataStore((s) => s.params);

  const apiClient = taskApiClient();
  return useQuery<TaskType[], Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
    ],
    queryFn: apiClient.getAll,
  });
};

export const useAddTask = () => {
  const apiClient = taskApiClient();
  return useMutation<TaskType, Error, TaskType>({
    mutationFn: apiClient.post,
  });
};

export const useGetTask = (id: string) => {
  const { workspaceId, projectId, boardId } = useDataStore((s) => s.params);
  const apiClient = taskApiClient();
  return useQuery<TaskType, Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      ,
      id,
    ],
    queryFn: () => apiClient.get(id),
  });
};
