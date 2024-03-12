import { create } from "zustand";
import { LoginResponse, LoginServerResponse } from "./entities/Auth";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AuthStore {
  user: LoginResponse;
  login: (newUser: LoginServerResponse) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "{}") as LoginResponse,
  login: (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    set(() => ({ user: newUser }));
  },
  logout: () => {
    localStorage.removeItem("user");
    set(() => ({ user: {} as LoginResponse }));
  },
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("User info", useAuthStore);

export default useAuthStore;
