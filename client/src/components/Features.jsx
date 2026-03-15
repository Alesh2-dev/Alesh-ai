import React from 'react';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-primary-400" />,
    title: "AI-Powered Tones",
    description: "Choose from specialized tones designed for high engagement and viral potential.",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Instant Results",
    description: "Generates high-quality tweets in under 2 seconds.",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Safe & Reliable",
    description: "Enterprise-grade reliability using industry-leading AI models.",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Multi-Topic",
    description: "From tech tutorials to funny personal anecdotes, our AI covers everything.",
    className: "md:col-span-2 md:row-span-1"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful features for creators</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to scale your Twitter presence without the creative burnout.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div 
            key={i} 
            className={`glass p-8 rounded-3xl group hover:border-primary-500/30 transition-all ${f.className}`}
          >
            <div className="mb-4 p-3 w-fit rounded-2xl bg-slate-800/50 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
