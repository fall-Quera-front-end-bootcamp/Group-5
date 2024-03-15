import { useMutation, useQuery } from "@tanstack/react-query";
import { BoardType } from "../entities/Workspace";
import { boardApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useBoards = () => {
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  const apiClient = boardApiClient();
  return useQuery<BoardType[], Error>({
    queryKey: ["workspaces", workspaceId, "projects", projectId, "boards"],
    queryFn: apiClient.getAll,
  });
};

export const useAddBoard = () => {
  const apiClient = boardApiClient();
  return useMutation<BoardType, Error, BoardType>({
    mutationFn: apiClient.post,
  });
};

export const useGetBoard = (id: string) => {
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  const apiClient = boardApiClient();
  return useQuery<BoardType, Error>({
    queryKey: ["workspaces", workspaceId, "projects", projectId, "boards", id],
    queryFn: () => apiClient.get(id),
  });
};
