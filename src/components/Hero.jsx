import Spline from '@splinetool/react-spline';
import { Shield, Mic, MessageCircle, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B0E14] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0E14]/20 via-[#0B0E14]/40 to-[#0B0E14]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        {/* Eyebrow + title */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 shadow backdrop-blur pointer-events-none">
            <Shield size={14} /> HIPAA-ready • Secure by design
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Vylex AI — Calm, private support with a clinical edge
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Real-time voice therapy and reflective chat guidance. Designed with privacy, empathy, and measurable progress at its core.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-600/30 hover:bg-indigo-500">
              Start Free Trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white/90 font-medium ring-1 ring-white/15 hover:bg-white/15">
              Explore Features
            </a>
          </div>

          {/* Quick capability bullets */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2"><Mic size={18} /><span className="text-sm">Natural voice conversations</span></div>
            <div className="flex items-center gap-2"><MessageCircle size={18} /><span className="text-sm">Therapeutic chat insights</span></div>
            <div className="flex items-center gap-2"><Sparkles size={18} /><span className="text-sm">Personalized daily plans</span></div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Star className="text-amber-400" size={16} />
              <span>4.9/5 average session rating</span>
            </div>
            <div className="hidden md:block h-5 w-px bg-white/10" />
            <div className="flex items-center gap-6">
              <span className="uppercase tracking-wider text-xs text-white/50">Trusted by teams at</span>
              <div className="flex items-center gap-6 opacity-80">
                <span className="font-semibold">CalmCare</span>
                <span className="font-semibold">MindfulCo</span>
                <span className="font-semibold">Serene Labs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cards row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Evidence-based', desc: 'Grounded in CBT, DBT and mindfulness playbooks.' },
            { title: 'Always available', desc: '24/7 access from any device, anywhere.' },
            { title: 'Privacy-first', desc: 'Your data stays encrypted. You’re in control.' },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient to blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0E14] to-transparent" />
    </section>
  );
}
