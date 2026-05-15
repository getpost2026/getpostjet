// LinkedIn Platform Module
import { PlatformModule, PostContent } from '@/types/platform';
import { LinkedInAuthService } from './auth';
import { LinkedInApiService } from './api';
import LinkedInDashboard from './dashboard';

export const linkedinModule: PlatformModule = {
  name: 'linkedin',
  displayName: 'LinkedIn',
  auth: new LinkedInAuthService(),
  api: new LinkedInApiService(),
  post: async (content: PostContent) => {
    await linkedinModule.api.postContent(content);
  },
  dashboard: LinkedInDashboard,
};