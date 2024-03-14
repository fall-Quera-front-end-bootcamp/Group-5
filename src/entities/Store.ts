import { LoginResponse, LoginServerResponse } from "./Auth";
import { WorkspaceType, ProjectType } from "./Workspace";

export interface ParamsType {
  workspaceId?: string;
  projectId?: string;
  taskId?: string;
  boardId?: string;
}

export interface AuthStore {
  user: LoginResponse;
  params: ParamsType;
  login: (newUser: LoginServerResponse) => void;
  logout: () => void;
  setWorkspaceId: (id: number) => void;
  setProjectId: (id: number) => void;
  setBoardId: (id: number) => void;
  setTaskId: (id: number) => void;
}

export interface WorkspaceStore {
  workspaces: WorkspaceType[];
  setWorkspaces: (data: WorkspaceType[]) => void;
}

export interface ProjectStore {
  projects: ProjectType[];
  setProjects: (data: ProjectType[]) => void;
}

export type useType = LoginResponse;
export type WorkspacesType = WorkspaceType[];
export type ProjectsType = ProjectType[];
