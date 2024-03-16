import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  const cacheKey = ["workspaces", workspaceId, "projects", projectId, "boards"];
  const boards = useDataStore((s) => s.boards);
  const setBoards = useDataStore((s) => s.setBoards);

  const apiClient = boardApiClient();
  return useMutation<BoardType, Error, BoardType>({
    mutationFn: apiClient.post,

    onMutate: (newBoards: BoardType) => {
      const previousData =
        queryClient.getQueryData<BoardType[]>(cacheKey) || [];
      setBoards(previousData);

      queryClient.setQueryData<BoardType[]>(cacheKey, (data = []) => [
        ...data,
        newBoards,
      ]);

      return { previousData };
    },
    onSuccess: (savedBoards, newBoards) => {
      queryClient.setQueryData<BoardType[]>(cacheKey, (data) =>
        data?.map((data) => (data === newBoards ? savedBoards : data))
      );
    },
    onError: (error, newBoards, context) => {
      console.log(error, newBoards);
      if (!context) return;
      queryClient.setQueryData<BoardType[]>(cacheKey, boards);
    },
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
