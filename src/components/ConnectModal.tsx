"use client";
import { X, Link2 } from "lucide-react";

export default function ConnectModal({ isOpen, onClose, platform }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-slate-600 transition-colors">
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Link2 size={32} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-2">Connect {platform}</h2>
          <p className="text-slate-500 mb-10 text-sm leading-relaxed">
            మీ {platform} పేజీలలో నేరుగా పోస్ట్ చేయడానికి మా యాప్‌కి అనుమతి ఇవ్వండి. ఇది సురక్షితం.
          </p>
          
          <button 
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center space-x-3 active:scale-95"
            onClick={() => alert(`${platform} Login API ఇంకా సెట్ చేయలేదు. నెక్స్ట్ స్టెప్ లో చేద్దాం!`)}
          >
            <span>Continue with {platform}</span>
          </button>
          
          <p className="mt-6 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
            Secure OAuth 2.0 Encryption
          </p>
        </div>
      </div>
    </div>
  );
}