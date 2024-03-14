import { useMutation, useQuery } from "@tanstack/react-query";
import { MembersType } from "../entities/Workspace";
import { projectMembersApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useProjectMembers = () => {
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  const apiClient = projectMembersApiClient();
  return useQuery<MembersType[], Error>({
    queryKey: ["workspaces", workspaceId, "projects", projectId, "members"],
    queryFn: apiClient.getAll,
  });
};

export const useAddProjectMembers = () => {
  const apiClient = projectMembersApiClient();
  return useMutation<MembersType, Error, MembersType>({
    mutationFn: apiClient.post,
  });
};

export const useGetProjectMember = (id: string) => {
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  const apiClient = projectMembersApiClient();
  return useQuery<MembersType, Error>({
    queryKey: ["workspaces", workspaceId, "projects", projectId, "member", id],
    queryFn: () => apiClient.get(id),
  });
};
