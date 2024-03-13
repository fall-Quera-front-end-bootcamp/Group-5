import { create } from "zustand";
import { LoginResponse, LoginServerResponse } from "./entities/Auth";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { WorkspaceType } from "./entities/Workspace";

export interface ParamsType {
  workspaceId?: string;
  projectId?: string;
  taskId?: string;
  boardId?: string;
}

interface AuthStore {
  user: LoginResponse;
  params: ParamsType;
  login: (newUser: LoginServerResponse) => void;
  logout: () => void;
  setWorkspaceId: (id: number) => void;
  setProjectId: (id: number) => void;
  setBoardId: (id: number) => void;
  setTaskId: (id: number) => void;
}

interface WorkspaceStore {
  workspaces: WorkspaceType[];
  setWorkspaces: (data: WorkspaceType[]) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "{}") as LoginResponse,
  params: {} as ParamsType,
  login: (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    set(() => ({ user: newUser }));
  },
  logout: () => {
    localStorage.removeItem("user");
    set(() => ({ user: {} as LoginResponse }));
  },
  setWorkspaceId: (id) => set(() => ({ params: { workspaceId: String(id) } })),
  setProjectId: (id) =>
    set(({ params: { workspaceId } }) => ({
      params: { workspaceId, projectId: String(id) },
    })),
  setBoardId: (id) =>
    set(({ params: { workspaceId, projectId } }) => ({
      params: { workspaceId, projectId, boardId: String(id) },
    })),
  setTaskId: (id) =>
    set(({ params: { workspaceId, projectId, boardId } }) => ({
      params: { workspaceId, projectId, boardId, taskId: String(id) },
    })),
}));

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  workspaces: [] as WorkspaceType[],
  setWorkspaces: (data) => set(() => ({ workspaces: [...data] })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("User info", useAuthStore);

export default useAuthStore;
