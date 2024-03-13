import { useMutation, useQuery } from "@tanstack/react-query";
import { MembersType } from "../entities/Workspace";
import { projectMembersApiClient } from "../services/apiServices";

export const useProjectMembers = () => {
  const apiClient = projectMembersApiClient();
  return useQuery<MembersType[], Error>({
    queryKey: ["projects"],
    queryFn: apiClient.getAll,
  });
};

export const useAddProjectMembers = () => {
  const apiClient = projectMembersApiClient();
  return useMutation<MembersType, Error, MembersType>({
    mutationFn: apiClient.post,
  });
};

export const useGetProjectMembers = (id: string) => {
  const apiClient = projectMembersApiClient();
  return useQuery<MembersType, Error>({
    queryKey: ["projects", id],
    queryFn: () => apiClient.get(id),
  });
};
