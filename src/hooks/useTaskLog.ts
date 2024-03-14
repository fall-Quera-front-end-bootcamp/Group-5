import { useQuery } from "@tanstack/react-query";
import { LogType } from "../entities/Workspace";
import { taskLogsApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const uselogs = () => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  const apiClient = taskLogsApiClient();
  return useQuery<LogType[], Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      taskId,
      "logs",
    ],
    queryFn: apiClient.getAll,
  });
};

export const useGetlog = (id: string) => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  const apiClient = taskLogsApiClient();
  return useQuery<LogType, Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      taskId,
      "logs",
      id,
    ],
    queryFn: () => apiClient.get(id),
  });
};
