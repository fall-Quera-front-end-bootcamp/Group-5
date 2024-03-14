import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectType } from "../entities/Workspace";
import { useProjectStore } from "../store";
import { projectApiClient } from "../services/apiServices";

const CACHE_KEY_WORKSPACE = ["workspaces"];

export const useProjects = () => {
  const apiClient = projectApiClient();
  return useQuery<ProjectType[], Error>({
    queryKey: ["projects"],
    queryFn: apiClient.getAll,
  });
};

export const useAddProject = () => {
  const queryClient = useQueryClient();
  const apiClient = projectApiClient();
  const { projects, setProjects } = useProjectStore();

  return useMutation<ProjectType, Error, ProjectType>({
    mutationFn: apiClient.post,

    onMutate: (newWorkspace: ProjectType) => {
      const previousData =
        queryClient.getQueryData<ProjectType[]>(CACHE_KEY_WORKSPACE) || [];
      setProjects(previousData);

      queryClient.setQueryData<ProjectType[]>(
        CACHE_KEY_WORKSPACE,
        (data = []) => [...data, newWorkspace]
      );

      return { previousData };
    },
    onSuccess: (savedWorkspace, newWorkspace) => {
      queryClient.setQueryData<ProjectType[]>(CACHE_KEY_WORKSPACE, (data) =>
        data?.map((data) => (data === newWorkspace ? savedWorkspace : data))
      );
    },
    onError: (error, newWorkspace, context) => {
      if (!context) return;
      queryClient.setQueryData<ProjectType[]>(
        CACHE_KEY_WORKSPACE,
        projects
      );
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
