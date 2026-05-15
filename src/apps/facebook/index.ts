// Facebook Platform Module
import { PlatformModule, PostContent } from '@/types/platform';
import { FacebookAuthService } from './auth';
import { FacebookApiService } from './api';
import FacebookDashboard from './dashboard';

export const facebookModule: PlatformModule = {
  name: 'facebook',
  displayName: 'Facebook',
  auth: new FacebookAuthService(),
  api: new FacebookApiService(),
  post: async (content: PostContent) => {
    await facebookModule.api.postContent(content);
  },
  dashboard: FacebookDashboard,
};