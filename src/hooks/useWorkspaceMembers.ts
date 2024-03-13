import { useMutation, useQuery } from "@tanstack/react-query";
import { MembersType } from "../entities/Workspace";
import { workspaceMembersApiClient } from "../services/apiServices";

export const useWorkspaces = () => {
  const apiClient = workspaceMembersApiClient();
  return useQuery<MembersType[], Error>({
    queryKey: ["workspaces", "members"],
    queryFn: apiClient.getAll,
  });
};

export const useAddWorkspace = () => {
  const apiClient = workspaceMembersApiClient();
  return useMutation<MembersType, Error, MembersType>({
    mutationFn: apiClient.post,
  });
};

export const useGetWorkspace = (id: string) => {
  const apiClient = workspaceMembersApiClient();
  return useQuery<MembersType, Error>({
    queryKey: ["workspaces", "members", id],
    queryFn: () => apiClient.get(id),
  });
};
