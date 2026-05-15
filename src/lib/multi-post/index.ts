// Multi-post service
import { PlatformModule, PostContent } from '@/types/platform';

export class MultiPostService {
  private platforms: Map<string, PlatformModule> = new Map();

  registerPlatform(platform: PlatformModule) {
    this.platforms.set(platform.name, platform);
  }

  async postToPlatforms(selectedPlatforms: string[], content: PostContent): Promise<void> {
    const promises = selectedPlatforms
      .filter(name => this.platforms.has(name))
      .map(name => this.platforms.get(name)!.post(content));

    await Promise.all(promises);
  }

  getAvailablePlatforms(): string[] {
    return Array.from(this.platforms.keys());
  }
}

export const multiPostService = new MultiPostService();