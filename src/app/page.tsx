"use client";
import React, { useState } from "react";
import { Send, Link as LinkIcon, X, Share2, LayoutDashboard } from "lucide-react";
import { getFacebookAuthUrl } from "@/lib/auth-utils";

export default function SocialSaaS() {
  const [content, setContent] = useState("");
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 1. సెపరేట్ లాజిక్ ఫైల్ నుండి లింక్ తీసుకుంటున్నాం
  const handleConnect = () => {
    if (showPopup?.id === "facebook") {
      window.location.href = getFacebookAuthUrl();
    }
  };

  // 2. మనం నిన్న క్రియేట్ చేసిన సెపరేట్ API Route ని పిలుస్తున్నాం
  const handlePublish = async () => {
    if (!content || selectedApps.length === 0) return alert("Select platform & write content");
    
    setLoading(true);
    try {
      // మనం క్రియేట్ చేసిన సెపరేట్ ఫేస్‌బుక్ రూట్ కి పంపుతున్నాం
      if (selectedApps.includes('facebook')) {
        const res = await fetch('/api/publish/facebook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content })
        });
        const data = await res.json();
        console.log("FB Result:", data);
      }
      alert("Success! Check console.");
    } catch (err) {
      alert("Failed to publish");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-200 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-blue-600 p-2 rounded-xl text-white"><Share2 size={24} /></div>
          <h2 className="text-2xl font-black text-slate-800">PostJet</h2>
        </div>

        <div className="mt-auto border-t pt-8">
          <p className="text-xs font-bold text-slate-400 uppercase mb-4">Connections</p>
          <button 
            onClick={() => setShowPopup({id: 'facebook', name: 'Facebook'})}
            className="flex items-center justify-between w-full p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border transition-all"
          >
            <span className="text-sm font-bold text-slate-700">Facebook</span>
            <LinkIcon size={14} className="text-slate-400" />
          </button>
        </div>
      </aside>

      {/* MAIN EDITOR */}
      <main className="flex-1 p-12 max-w-4xl">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">Post Studio</h1>
        </header>

        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8">
          <textarea 
            className="w-full h-64 p-6 bg-slate-50 rounded-[24px] text-lg outline-none focus:ring-4 ring-blue-50 border border-slate-100 transition-all resize-none"
            placeholder="Write your post here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedApps(prev => prev.includes('facebook') ? [] : ['facebook'])}
                className={`px-6 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                  selectedApps.includes('facebook') ? "bg-blue-600 text-white border-transparent shadow-lg" : "bg-white text-slate-400 border-slate-100"
                }`}
              >
                Facebook
              </button>
            </div>

            <button 
              onClick={handlePublish}
              disabled={loading}
              className="bg-slate-900 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl transition-all disabled:opacity-50"
            >
              {loading ? "Processing..." : <><Send size={20}/> Publish Now</>}
            </button>
          </div>
        </div>
      </main>

      {/* MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[32px] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="h-2 bg-blue-600"></div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Connect {showPopup.name}</h3>
              <p className="text-slate-500 mb-8 font-medium text-sm">We need permission to post to your page.</p>
              <button 
                onClick={handleConnect}
                className="w-full bg-blue-600 text-white py-5 rounded-[20px] font-black text-lg shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Continue to {showPopup.name}
              </button>
              <button onClick={() => setShowPopup(null)} className="mt-4 text-slate-400 font-bold">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}