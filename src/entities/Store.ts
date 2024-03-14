import { LoginResponse, LoginServerResponse } from "./Auth";

import { ProjectType, WorkspaceType } from "./Workspace";


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

export interface DataStore {
  workspaces: WorkspacesType;
  projects: ProjectsType;
  setWorkspaces: (data: WorkspacesType) => void;
  setProjects: (data: ProjectsType) => void;
}

export interface ProjectStore {
  projects: ProjectType[];
  setProjects: (data: ProjectType[]) => void;
}

export type useType = LoginResponse;
export type WorkspacesType = WorkspaceType[];
export type ProjectsType = ProjectType[];
