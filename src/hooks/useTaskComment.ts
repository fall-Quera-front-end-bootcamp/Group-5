import { useMutation, useQuery } from "@tanstack/react-query";
import { CommnetType } from "../entities/Workspace";
import { taskCommentApiClient } from "../services/apiServices";

export const useTaskComments = () => {
  const apiClient = taskCommentApiClient();
  return useQuery<CommnetType[], Error>({
    queryKey: ["tasks", "comments"],
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
  const apiClient = taskCommentApiClient();
  return useQuery<CommnetType, Error>({
    queryKey: ["tasks", "comments", id],
    queryFn: () => apiClient.get(id),
  });
};
