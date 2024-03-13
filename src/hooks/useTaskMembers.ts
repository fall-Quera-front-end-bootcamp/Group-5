import { useMutation, useQuery } from "@tanstack/react-query";
import { MembersType } from "../entities/Workspace";
import { taskMembersApiClient } from "../services/apiServices";

export const useTastMemberss = () => {
  const apiClient = taskMembersApiClient();
  return useQuery<MembersType[], Error>({
    queryKey: ["tasks", "members"],
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
  const apiClient = taskMembersApiClient();
  return useQuery<MembersType, Error>({
    queryKey: ["tasks", "members", id],
    queryFn: () => apiClient.get(id),
  });
};
