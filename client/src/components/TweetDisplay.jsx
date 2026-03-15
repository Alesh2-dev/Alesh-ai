import React, { useState } from 'react';
import { Copy, Check, Twitter, Share2 } from 'lucide-react';

const TweetDisplay = ({ tweet }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tweet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!tweet) return null;

  return (
    <div className="w-full max-w-xl mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="glass rounded-[2rem] overflow-hidden">
        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Magic Result</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">AI Output</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold text-xs ${
                copied 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-95'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="p-8">
          <p className="text-xl text-slate-100 leading-relaxed font-medium">
            {tweet}
          </p>
        </div>
        <div className="px-8 py-4 bg-slate-950/30 border-t border-white/5 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800" />
            ))}
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Liked by 1,249 other creators</p>
        </div>
      </div>
    </div>
  );
};

export default TweetDisplay;
