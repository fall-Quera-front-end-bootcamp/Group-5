import { create } from "zustand";
import { LoginResponse } from "./entities/Auth";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AuthStore {
  user: LoginResponse;
  login: (newUser: LoginResponse) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as LoginResponse,
  login: (newUser) => set(() => ({ user: { ...newUser } })),
  logout: () => set(() => ({ user: {} as LoginResponse })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useAuthStore);

export default useAuthStore;
