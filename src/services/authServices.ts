import { LoginResponse } from "../entities/Auth";
import useAuthStore from "../store";
import { AuthAPIClient } from "./apiClient";

export const signupApiClient = new AuthAPIClient<LoginResponse>("accounts/");
export const loginApiClient = new AuthAPIClient<LoginResponse>(
  "accounts/login/"
);
export const updateApiClient = () => {
  const { id } = useAuthStore((s) => s.user);
  return new AuthAPIClient<LoginResponse>(`accounts/${id}/`);
};
