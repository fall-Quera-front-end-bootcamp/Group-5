import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectType } from "../entities/Workspace";
import { projectApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

const CACHE_KEY_PROJECT = ["projects"];

export const useProjects = () => {
  const apiClient = projectApiClient();
  return useQuery<ProjectType[], Error>({
    queryKey: CACHE_KEY_PROJECT,
    queryFn: apiClient.getAll,
  });
};

export const useAddProject = () => {
  const queryClient = useQueryClient();
  const apiClient = projectApiClient();
  const { projects, setProjects } = useDataStore();
  return useMutation<ProjectType, Error, ProjectType>({
    mutationFn: apiClient.post,

    onMutate: (newProject: ProjectType) => {
      const previousData =
        queryClient.getQueryData<ProjectType[]>(CACHE_KEY_PROJECT) || [];
      setProjects(previousData);

      queryClient.setQueryData<ProjectType[]>(
        CACHE_KEY_PROJECT,
        (data = []) => [...data, newProject]
      );

      return { previousData };
    },
    onSuccess: (savedProject, newProject) => {
      queryClient.setQueryData<ProjectType[]>(CACHE_KEY_PROJECT, (data) =>
        data?.map((data) => (data === newProject ? savedProject : data))
      );
    },
    onError: (error, newProject, context) => {
      if (!context) return;
      queryClient.setQueryData<ProjectType[]>(CACHE_KEY_PROJECT, projects);
    },
  });
};

export const useGetProject = (id: string) => {
  const apiClient = projectApiClient();
  return useQuery<ProjectType, Error>({
    queryKey: ["projects", id],
    queryFn: () => apiClient.get(id),
  });
};
