import { APIClient } from "./apiClient";
import { WorkspaceType } from "../entities/Workspace";

export const workspaceApiClient = new APIClient<WorkspaceType>("workspaces/");
