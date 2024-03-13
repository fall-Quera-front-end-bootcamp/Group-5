import { useMutation, useQuery } from "@tanstack/react-query";
import { BoardType } from "../entities/Workspace";
import { boardApiClient } from "../services/apiServices";

export const useBoards = () => {
  const apiClient = boardApiClient();
  return useQuery<BoardType[], Error>({
    queryKey: ["boards"],
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
  const apiClient = boardApiClient();
  return useQuery<BoardType, Error>({
    queryKey: ["boards", id],
    queryFn: () => apiClient.get(id),
  });
};
