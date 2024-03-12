import { LoginResponse, RefreshTokenData } from "../entities/Auth";
import { AuthAPIClient } from "./apiClient";

export const signupApiClient = new AuthAPIClient<LoginResponse>("accounts/");
export const loginApiClient = new AuthAPIClient<LoginResponse>(
  "accounts/login/"
);
export const refreshApiClient = new AuthAPIClient<RefreshTokenData>(
  "accounts/refresh/"
);
