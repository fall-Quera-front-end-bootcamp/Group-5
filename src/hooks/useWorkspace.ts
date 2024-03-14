import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WorkspaceType } from "../entities/Workspace";
import { workspaceApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

const CACHE_KEY_WORKSPACE = ["workspaces"];

export const useWorkspaces = () => {
  return useQuery<WorkspaceType[], Error>({
    queryKey: CACHE_KEY_WORKSPACE,
    queryFn: workspaceApiClient.getAll,
  });
};

export const useAddWorkspace = () => {
  const queryClient = useQueryClient();
  const { workspaces, setWorkspaces } = useDataStore();

  return useMutation<WorkspaceType, Error, WorkspaceType>({
    mutationFn: workspaceApiClient.post,

    onMutate: (newWorkspace: WorkspaceType) => {
      const previousData =
        queryClient.getQueryData<WorkspaceType[]>(CACHE_KEY_WORKSPACE) || [];
      setWorkspaces(previousData);

      queryClient.setQueryData<WorkspaceType[]>(
        CACHE_KEY_WORKSPACE,
        (data = []) => [...data, newWorkspace]
      );

      return { previousData };
    },
    onSuccess: (savedWorkspace, newWorkspace) => {
      queryClient.setQueryData<WorkspaceType[]>(CACHE_KEY_WORKSPACE, (data) =>
        data?.map((data) => (data === newWorkspace ? savedWorkspace : data))
      );
    },
    onError: (error, newWorkspace, context) => {
      if (!context) return;
      queryClient.setQueryData<WorkspaceType[]>(
        CACHE_KEY_WORKSPACE,
        workspaces
      );
    },
  });
};

export const useGetWorkspace = (id: string) => {
  return useQuery<WorkspaceType, Error>({
    queryKey: ["workspaces", id],
    queryFn: () => workspaceApiClient.get(id),
  });
};
