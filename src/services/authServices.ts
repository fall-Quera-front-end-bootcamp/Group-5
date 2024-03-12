import { LoginResponse } from "../entities/Auth";
import APIClient from "./apiClient";

export const signupApiClient = new APIClient<LoginResponse>("accounts/");
export const loginApiClient = new APIClient<LoginResponse>("accounts/login/");
