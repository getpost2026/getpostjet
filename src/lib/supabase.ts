import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const publishAndCleanup = async (content: string, selectedApps: string[], file: File | null) => {
  let storagePath = null;

  try {
    // 1. ఫైల్ (Image/Video) ఉంటే అప్‌లోడ్ చేయడం
    if (file) {
      const fileExt = file.name.split('.').pop();
      storagePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('post-images')
        .upload(storagePath, file);

      if (uploadError) throw uploadError;
    }

    // 2. హిస్టరీ కోసం డేటాబేస్ లో రికార్డ్ (వీడియో అయితే వీడియో అని సేవ్ అవుతుంది)
    const { error: dbError } = await supabase.from('posts').insert([{
      content,
      platforms: selectedApps,
      image_url: file ? (file.type.startsWith('video/') ? "Video Post: Success & Deleted" : "Image Post: Success & Deleted") : "Text Only",
      status: 'published',
      created_at: new Date()
    }]);

    if (dbError) throw dbError;

    // 3. స్టోరేజ్ క్లీనప్ (వెంటనే డిలీట్ - బిల్లు పడకుండా)
    if (storagePath) {
      await supabase.storage.from('post-images').remove([storagePath]);
    }

    return { success: true };
  } catch (error: any) {
    console.error("Action Error:", error);
    return { success: false, error: error.message };
  }
};