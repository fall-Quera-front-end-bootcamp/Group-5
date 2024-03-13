import { useMutation, useQuery } from "@tanstack/react-query";
import { WorkspaceType } from "../entities/Workspace";
import { workspaceApiClient } from "../services/workspaceServices";

export const useWorkspaces = () => {
  return useQuery<WorkspaceType[], Error>({
    queryKey: ["workspaces"],
    queryFn: workspaceApiClient.getAll,
  });
};

export const useAddWorkspaces = () => {
  return useMutation<WorkspaceType, Error, WorkspaceType>({
    mutationFn: workspaceApiClient.post,
  });
};

export const useGetWorkspace = (id: string) => {
  return useQuery<WorkspaceType, Error>({
    queryKey: ["workspaces", id],
    queryFn: () => workspaceApiClient.get(id),
  });
};
