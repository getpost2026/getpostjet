// Platform module interface
export interface AuthService {
  authenticate(): Promise<void>;
  isAuthenticated(): boolean;
  logout(): Promise<void>;
}

export interface ApiService {
  getUserProfile(): Promise<any>;
  postContent(content: PostContent): Promise<void>;
}

export interface DashboardComponentProps {
  // Add common props if needed
}

export interface PlatformModule {
  name: string;
  displayName: string;
  auth: AuthService;
  api: ApiService;
  post: (content: PostContent) => Promise<void>;
  dashboard: React.ComponentType<DashboardComponentProps>;
}

export interface PostContent {
  text: string;
  media?: string[];
  scheduledAt?: Date;
}