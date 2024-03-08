import { create } from "zustand";
import { LoginResponse } from "./entities/Auth";

interface AuthStore {
  user: LoginResponse;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as LoginResponse,
  logout: () => set(() => ({ user: {} as LoginResponse })),
}));

export default useAuthStore;
