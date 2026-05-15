// Subscription tiers
export enum SubscriptionTier {
  FREE = 'free',
  PRO = 'pro',
}

export interface SubscriptionLimits {
  maxConnections: number;
  unlimitedPosts: boolean;
}

export const getSubscriptionLimits = (tier: SubscriptionTier): SubscriptionLimits => {
  switch (tier) {
    case SubscriptionTier.FREE:
      return { maxConnections: 3, unlimitedPosts: false };
    case SubscriptionTier.PRO:
      return { maxConnections: Infinity, unlimitedPosts: true };
    default:
      return { maxConnections: 0, unlimitedPosts: false };
  }
};

// Function to check if user can connect more platforms
export const canConnectPlatform = (tier: SubscriptionTier, currentConnections: number): boolean => {
  const limits = getSubscriptionLimits(tier);
  return currentConnections < limits.maxConnections;
};