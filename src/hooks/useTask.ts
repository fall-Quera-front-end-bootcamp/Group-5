import { useMutation, useQuery } from "@tanstack/react-query";
import { TaskType } from "../entities/Workspace";
import { taskApiClient } from "../services/apiServices";

export const useTasks = () => {
  const apiClient = taskApiClient();
  return useQuery<TaskType[], Error>({
    queryKey: ["tasks"],
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
  const apiClient = taskApiClient();
  return useQuery<TaskType, Error>({
    queryKey: ["tasks", id],
    queryFn: () => apiClient.get(id),
  });
};
