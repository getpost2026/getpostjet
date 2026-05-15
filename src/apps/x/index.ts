// X Platform Module
import { PlatformModule, PostContent } from '@/types/platform';
import { XAuthService } from './auth';
import { XApiService } from './api';
import XDashboard from './dashboard';

export const xModule: PlatformModule = {
  name: 'x',
  displayName: 'X (Twitter)',
  auth: new XAuthService(),
  api: new XApiService(),
  post: async (content: PostContent) => {
    await xModule.api.postContent(content);
  },
  dashboard: XDashboard,
};