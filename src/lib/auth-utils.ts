// src/lib/auth-utils.ts

export const getFacebookAuthUrl = () => {
  const FB_APP_ID = "1518996699642238"; // మీ App ID
  const REDIRECT_URI = encodeURIComponent(
    "https://zany-space-fishstick-969r47pr959gc756g.github.dev/api/auth/callback"
  );
  const SCOPES = "pages_manage_posts,public_profile,pages_read_engagement,pages_show_list";
  
  return `https://www.facebook.com/v18.0/dialog/oauth?client_id=${FB_APP_ID}&redirect_uri=${REDIRECT_URI}&state=facebook&scope=${SCOPES}`;
};

export const getLinkedInAuthUrl = () => {
  // రేపు లింక్డిన్ యాడ్ చేయాలంటే ఇక్కడ రాస్తాం
  return "#";
};