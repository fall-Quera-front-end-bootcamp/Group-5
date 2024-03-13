import { LoginResponse } from "./Auth";

export interface WorkspaceType {
  id?: number;
  name?: string;
  color?: string;
}

export interface ProjectType {
  id?: number;
  name: string;
}

export interface MembersType {
  id?: number;
  user: LoginResponse | string;
  is_super_access?: boolean;
}

export interface BoardType {
  id?: number;
  name: string;
  order: number;
  tasks?: string;
  tasks_count?: string;
  is_archive: boolean;
  color: string;
}

export interface TaskType {
  id?: 0;
  name: string;
  description: string;
  deadline?: string;
  priority: number;
  attachment: string;
  thumbnail: string;
  order: number;
  members?: string;
  created_at?: string;
}

export interface CommnetType {
  id?: number;
  author: number;
  attachment: string;
  text: string;
}

export interface LogType {
  id: number;
  task: number;
  old_priority: number;
  new_priority: number;
}
