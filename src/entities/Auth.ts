export default interface FormsType {
  [key: string]: {
    title: string;
    label: string;
    button: string;
    schema: Record<string, any>;
    fields: { key: string; type: string; label: string }[];
  };
}

export interface LoginServerResponse {
  user_id?: number;
  email?: string;
  username?: string;
  access?: string;
  refresh?: string;
}

export interface LoginResponse {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  access?: string;
  refresh?: string;
}

export interface RefreshTokenData {
  refresh: string;
}

export interface RefreshTokenResponse {
  access: string;
  refresh: string;
}
