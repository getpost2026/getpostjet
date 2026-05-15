// Instagram Platform Module
import { PlatformModule, PostContent } from '@/types/platform';
import { InstagramAuthService } from './auth';
import { InstagramApiService } from './api';
import InstagramDashboard from './dashboard';

export const instagramModule: PlatformModule = {
  name: 'instagram',
  displayName: 'Instagram',
  auth: new InstagramAuthService(),
  api: new InstagramApiService(),
  post: async (content: PostContent) => {
    await instagramModule.api.postContent(content);
  },
  dashboard: InstagramDashboard,
};