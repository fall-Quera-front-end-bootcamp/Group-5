import { useMutation, useQuery } from "@tanstack/react-query";
import { ProjectType } from "../entities/Workspace";
import { projectApiClient } from "../services/apiServices";

export const useProjects = () => {
  const apiClient = projectApiClient();
  return useQuery<ProjectType[], Error>({
    queryKey: ["projects"],
    queryFn: apiClient.getAll,
  });
};

export const useAddProject = () => {
  const apiClient = projectApiClient();
  return useMutation<ProjectType, Error, ProjectType>({
    mutationFn: apiClient.post,
  });
};

export const useGetProject = (id: string) => {
  const apiClient = projectApiClient();
  return useQuery<ProjectType, Error>({
    queryKey: ["projects", id],
    queryFn: () => apiClient.get(id),
  });
};
