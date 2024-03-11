import { create } from "zustand";
import { LoginResponse, LoginServerResponse } from "./entities/Auth";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AuthStore {
  user: LoginResponse;
  login: (newUser: LoginServerResponse) => void;
  refreshToken: (accessToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as LoginResponse,
  login: (newUser) =>
    set(() => ({
      user: {
        id: newUser.user_id,
        email: newUser.email,
        username: newUser.username,
        access: newUser.access,
        refresh: newUser.refresh,
      },
    })),
  refreshToken: (accessToken) => set(() => ({ user: { access: accessToken } })),
  logout: () => set(() => ({ user: {} as LoginResponse })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("User info", useAuthStore);

export default useAuthStore;
