import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectType } from "../entities/Workspace";
import { projectApiClient } from "../services/apiServices";
import { useDataStore } from "../store";
import { APIClient } from "../services/apiClient";

export const useProjects = (id: string) => {
  const apiClient = new APIClient<ProjectType>(`workspaces/${id}/projects/`);
  return useQuery<ProjectType[], Error>({
    queryKey: ["projects", id],
    queryFn: apiClient.getAll,
  });
};

export const useAddProject = (id: string) => {
  const cacheKey = ["projects", id];
  const queryClient = useQueryClient();
  const apiClient = projectApiClient();
  const { projects, setProjects } = useDataStore();
  return useMutation<ProjectType, Error, ProjectType>({
    mutationFn: apiClient.post,

    onMutate: (newProject: ProjectType) => {
      const previousData =
        queryClient.getQueryData<ProjectType[]>(cacheKey) || [];
      setProjects(previousData);

      queryClient.setQueryData<ProjectType[]>(cacheKey, (data = []) => [
        ...data,
        newProject,
      ]);

      return { previousData };
    },
    onSuccess: (savedProject, newProject) => {
      queryClient.setQueryData<ProjectType[]>(cacheKey, (data) =>
        data?.map((data) => (data === newProject ? savedProject : data))
      );
    },
    onError: (error, newProject, context) => {
      if (!context) return;
      queryClient.setQueryData<ProjectType[]>(cacheKey, projects);
    },
  });
};

export const useGetProject = (id: string) => {
  const apiClient = projectApiClient();
  return useQuery<ProjectType, Error>({
    queryKey: ["project", id],
    queryFn: () => apiClient.get(id),
  });
};
