// Main app entry point - register platforms
import { multiPostService } from './multi-post/index';
import { facebookModule } from '../apps/facebook/index';
import { linkedinModule } from '../apps/linkedin/index';
import { xModule } from '../apps/x/index';
import { instagramModule } from '../apps/instagram/index';

// Register all platform modules
multiPostService.registerPlatform(facebookModule);
multiPostService.registerPlatform(linkedinModule);
multiPostService.registerPlatform(xModule);
multiPostService.registerPlatform(instagramModule);

// Export for use in components
export { multiPostService };