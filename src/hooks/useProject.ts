import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectType } from "../entities/Workspace";
import { projectApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useProjects = () => {
  const apiClient = projectApiClient();
  const { workspaceId } = useDataStore((s) => s.params);
  return useQuery<ProjectType[], Error>({
    queryKey: ["workspaces", workspaceId, "projects"],
    queryFn: apiClient.getAll,
  });
};

export const useAddProject = () => {
  const { workspaceId } = useDataStore((s) => s.params);
  const cacheKey = ["workspaces", workspaceId, "projects"];
  const queryClient = useQueryClient();
  const apiClient = projectApiClient();
  const projects = useDataStore((s) => s.projects);
  const setProjects = useDataStore((s) => s.setProjects);

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
      console.log(error, newProject);
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
