import React, { useState } from 'react';
import { Send, Loader2, MessageSquare } from 'lucide-react';

const tones = [
  { name: 'Viral', icon: '🚀', color: 'text-orange-400' },
  { name: 'Professional', icon: '💼', color: 'text-blue-400' },
  { name: 'Funny', icon: '🤣', color: 'text-yellow-400' },
  { name: 'Educational', icon: '📚', color: 'text-green-400' }
];

const TweetForm = ({ onSubmit, isLoading }) => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Viral');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit(topic, tone);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-[2rem] w-full max-w-xl glow-primary">
      <div className="space-y-6">
        <div>
          <label htmlFor="topic" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
            <MessageSquare className="w-4 h-4 text-primary-500" />
            What's on your mind?
          </label>
          <div className="relative group">
            <textarea
              id="topic"
              rows="4"
              className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all placeholder-slate-600 text-slate-100 resize-none"
              placeholder="e.g. The future of AI Agents in coding..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none group-hover:bg-primary-500/[0.02] transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-4">
            Pick your vibe
          </label>
          <div className="grid grid-cols-2 gap-3">
            {tones.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setTone(t.name)}
                className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                  tone === t.name
                    ? 'bg-primary-500/10 border-primary-500 text-white shadow-lg'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="text-lg">{t.icon}</span>
                <span className="text-sm font-bold">{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !topic.trim()}
          className="relative group w-full overflow-hidden px-8 py-4 bg-primary-600 hover:bg-primary-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all shadow-[0_10px_30px_-5px_rgba(14,165,233,0.3)] active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <div className="flex items-center justify-center gap-2">
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Crafting Masterpiece...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Generate Tweet</span>
              </>
            )}
          </div>
        </button>
      </div>
    </form>
  );
};

export default TweetForm;
