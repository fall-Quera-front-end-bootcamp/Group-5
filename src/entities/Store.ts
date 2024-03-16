import { LoginResponse, LoginServerResponse } from "./Auth";
import { BoardType, ProjectType, TaskType, WorkspaceType } from "./Workspace";

export interface ParamsType {
  workspaceId?: string;
  projectId?: string;
  taskId?: string;
  boardId?: string;
}

export interface AuthStore {
  user: LoginResponse;
  login: (newUser: LoginServerResponse) => void;
  logout: () => void;
}

export interface DataStore {
  params: ParamsType;
  workspaces: WorkspacesType;
  projects: ProjectsType;
  boards: BoardsType;
  tasks: TasksType;

  setWorkspaces: (data: WorkspacesType) => void;
  setProjects: (data: ProjectsType) => void;
  setBoards: (data: BoardsType) => void;
  setTasks: (data: TasksType) => void;

  setWorkspaceId: (id: number) => void;
  setProjectId: (id: number) => void;
  setBoardId: (id: number) => void;
  setTaskId: (id: number) => void;
}

export type useType = LoginResponse;
export type WorkspacesType = WorkspaceType[];
export type ProjectsType = ProjectType[];
export type BoardsType = BoardType[];
export type TasksType = TaskType[];
