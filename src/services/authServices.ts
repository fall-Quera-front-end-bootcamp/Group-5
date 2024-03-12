import { LoginResponse } from "../entities/Auth";
import { AuthAPIClient } from "./apiClient";

export const signupApiClient = new AuthAPIClient<LoginResponse>("accounts/");
export const loginApiClient = new AuthAPIClient<LoginResponse>(
  "accounts/login/"
);
