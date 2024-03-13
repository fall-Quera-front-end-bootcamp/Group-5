import { APIClient } from "./apiClient";
import { WorkspaceType } from "../entities/Workspace";
import { ProjectType } from "../entities/Project";
import useAuthStore from "../store";

export const workspaceApiClient = new APIClient<WorkspaceType>("workspaces/");

export const projectApiClient = () => {
  const { workspaceId } = useAuthStore((s) => s.params);
  return new APIClient<ProjectType>(`workspaces/${workspaceId!}/projects/`);
};
