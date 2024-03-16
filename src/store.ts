import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import {
  AuthStore,
  ParamsType,
  DataStore,
  WorkspacesType,
  useType,
  ProjectsType,
} from "./entities/Store";

const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "{}") as useType,
  login: (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    set(() => ({ user: newUser }));
  },
  logout: () => {
    localStorage.removeItem("user");
    set(() => ({ user: {} as useType }));
  },
}));

export const useDataStore = create<DataStore>((set) => ({
  params: {} as ParamsType,
  workspaces: [] as WorkspacesType,
  projects: [] as ProjectsType,
  setWorkspaces: (data) => set(() => ({ workspaces: [...data] })),
  setProjects: (data) => set(() => ({ projects: [...data] })),
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

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("User info", useAuthStore);
  mountStoreDevtool("Data info", useDataStore);
}
export default useAuthStore;
