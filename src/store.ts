import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import {
  AuthStore,
  ParamsType,
  WorkspaceStore,
  WorkspacesType,
  useType,
} from "./entities/Store";

const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "{}") as useType,
  params: {} as ParamsType,
  login: (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    set(() => ({ user: newUser }));
  },
  logout: () => {
    localStorage.removeItem("user");
    set(() => ({ user: {} as useType }));
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
  workspaces: [] as WorkspacesType,
  setWorkspaces: (data) => set(() => ({ workspaces: [...data] })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("User info", useAuthStore);

export default useAuthStore;
