import { useQuery } from "@tanstack/react-query";
import { LogType } from "../entities/Workspace";
import { taskLogsApiClient } from "../services/apiServices";

export const uselogs = () => {
  const apiClient = taskLogsApiClient();
  return useQuery<LogType[], Error>({
    queryKey: ["logs"],
    queryFn: apiClient.getAll,
  });
};

export const useGetlog = (id: string) => {
  const apiClient = taskLogsApiClient();
  return useQuery<LogType, Error>({
    queryKey: ["logs", id],
    queryFn: () => apiClient.get(id),
  });
};
