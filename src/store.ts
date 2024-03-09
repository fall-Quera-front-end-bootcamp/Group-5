import { create } from "zustand";
import { LoginResponse } from "./entities/Auth";

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

export default useAuthStore;
