// Instagram API Service
import { ApiService, PostContent } from '@/types/platform';

export class InstagramApiService implements ApiService {
  async getUserProfile(): Promise<any> {
    return {}; // Placeholder
  }

  async postContent(content: PostContent): Promise<void> {
    console.log('Posting to Instagram:', content);
  }
}