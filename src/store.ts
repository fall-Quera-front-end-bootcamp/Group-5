import { create } from "zustand";
import { LoginResponse, LoginServerResponse } from "./entities/Auth";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { ParamsType } from "./entities/Workspace";

interface AuthStore {
  user: LoginResponse;
  params: ParamsType;
  login: (newUser: LoginServerResponse) => void;
  logout: () => void;
  setWorkspace: (id: number) => void;
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
  setWorkspace: (id) => set(() => ({ params: { workspaceId: String(id) } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("User info", useAuthStore);

export default useAuthStore;
