import { useMutation, useQuery } from "@tanstack/react-query";
import { MembersType } from "../entities/Workspace";
import { taskMembersApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useTastMemberss = () => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );
  const apiClient = taskMembersApiClient();
  return useQuery<MembersType[], Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      taskId,
      "members",
    ],
    queryFn: apiClient.getAll,
  });
};

export const useAddTastMembers = () => {
  const apiClient = taskMembersApiClient();
  return useMutation<MembersType, Error, MembersType>({
    mutationFn: apiClient.post,
  });
};

export const useGetTastMembers = (id: string) => {
  const { workspaceId, projectId, boardId, taskId } = useDataStore(
    (s) => s.params
  );

  const apiClient = taskMembersApiClient();
  return useQuery<MembersType, Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      taskId,
      "members",
      id,
    ],
    queryFn: () => apiClient.get(id),
  });
};
