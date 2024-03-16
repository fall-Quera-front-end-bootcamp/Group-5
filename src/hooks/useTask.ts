import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TaskType } from "../entities/Workspace";
import { taskApiClient } from "../services/apiServices";
import { useDataStore } from "../store";

export const useTasks = () => {
  const { workspaceId, projectId, boardId } = useDataStore((s) => s.params);

  const apiClient = taskApiClient();
  return useQuery<TaskType[], Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
    ],
    queryFn: apiClient.getAll,
  });
};

export const useAddTask = () => {
  const queryClient = useQueryClient();
  const { workspaceId, projectId, boardId } = useDataStore((s) => s.params);
  const cacheKey = [
    "workspaces",
    workspaceId,
    "projects",
    projectId,
    "boards",
    boardId,
    "tasks",
  ];
  const tasks = useDataStore((s) => s.tasks);
  const setTasks = useDataStore((s) => s.setTasks);

  const apiClient = taskApiClient();
  return useMutation<TaskType, Error, TaskType>({
    mutationFn: apiClient.post,

    onMutate: (newTask: TaskType) => {
      const previousData = queryClient.getQueryData<TaskType[]>(cacheKey) || [];
      setTasks(previousData);

      queryClient.setQueryData<TaskType[]>(cacheKey, (data = []) => [
        ...data,
        newTask,
      ]);

      return { previousData };
    },
    onSuccess: (savedTask, newBoards) => {
      queryClient.setQueryData<TaskType[]>(cacheKey, (data) =>
        data?.map((data) => (data === newBoards ? savedTask : data))
      );
    },
    onError: (error, newBoards, context) => {
      console.log(error, newBoards);
      if (!context) return;
      queryClient.setQueryData<TaskType[]>(cacheKey, tasks);
    },
  });
};

export const useGetTask = (id: string) => {
  const { workspaceId, projectId, boardId } = useDataStore((s) => s.params);
  const apiClient = taskApiClient();
  return useQuery<TaskType, Error>({
    queryKey: [
      "workspaces",
      workspaceId,
      "projects",
      projectId,
      "boards",
      boardId,
      "tasks",
      ,
      id,
    ],
    queryFn: () => apiClient.get(id),
  });
};
