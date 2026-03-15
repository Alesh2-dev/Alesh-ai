import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import TweetForm from './components/TweetForm';
import TweetDisplay from './components/TweetDisplay';
import { generateTweet } from './services/api';
import { Sparkles, AlertCircle, ArrowRight, Twitter } from 'lucide-react';

function App() {
  const [generatedTweet, setGeneratedTweet] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (topic, tone) => {
    setIsLoading(true);
    setError('');
    
    // Smooth scroll to generator result
    try {
      const tweet = await generateTweet(topic, tone);
      setGeneratedTweet(tweet);
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Something went wrong. Please check your connection.';
      setError(errorMsg);
      console.error(err);
    } finally {

      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary-500/30">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-400 text-xs font-bold mb-8 animate-float">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New: Premium AI Tones now available</span>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <button className="hover:text-white flex items-center gap-1">
                Explore tones <ArrowRight className="w-3 h-3" />
              </button>

            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Generate <span className="text-gradient">Viral</span> <br />
              Tweets in Seconds.
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Stop staring at a blank screen. Our advanced AI crafts high-engagement tweets 
              tailored to your unique voice and topic.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
              <a href="#generator" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary-500/20 active:scale-95">
                Start Generating for Free
              </a>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all active:scale-95">
                View Showcase
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-10 border-t border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] font-black text-slate-600 mb-6">Trusted by the world's best creators</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale invert">
                <Twitter className="w-8 h-8" />
                <Twitter className="w-8 h-8" />
                <Twitter className="w-8 h-8" />
                <Twitter className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Generator Section */}
        <section id="generator" className="py-24 bg-slate-900/20 relative">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Write. Generate. Scale.</h2>
              <p className="text-slate-400">Fill in the details below to generate your next big hit.</p>
            </div>

            <TweetForm onSubmit={handleGenerate} isLoading={isLoading} />

            {error && (
              <div className="mt-8 flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-400/10 border border-red-400/20 text-red-400 text-sm animate-shake">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-semibold">{error}</p>
              </div>
            )}

            <TweetDisplay tweet={generatedTweet} />
          </div>
        </section>

        <Features />

        {/* Final CTA */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-transparent pointer-events-none" />
             <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to dominate <br /> your timeline?</h2>
             <button className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl text-lg hover:bg-slate-200 transition-all relative z-10 active:scale-95 shadow-2xl">
                Get Started Now — It's Free
             </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center">
            <Twitter className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold tracking-tight text-white text-sm">Alesh<span className="text-primary-500">.ai</span></span>

        </div>
        <p className="text-slate-500 text-sm">
          &copy; 2026 AI Tweet Generator. Built by{' '}
          <a 
            href="https://x.com/farmingdev1" 
            target="_blank" 
            rel="noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors font-semibold"
          >
            @farmingdev1
          </a>
        </p>

      </footer>
    </div>
  );
}

export default App;
