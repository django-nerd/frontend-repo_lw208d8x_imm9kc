import Spline from '@splinetool/react-spline';
import { Shield, Mic, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Zn7XRxnnbSat5OJG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white shadow backdrop-blur pointer-events-none">
            <Shield size={14} /> HIPAA-ready • Secure by design
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Vylex AI: Your always-on mental health companion
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-xl">
            Experience calming, real-time voice therapy and supportive chat counseling. Start your guided wellness journey with a free trial—no commitment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-indigo-700">
              Start Free Trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/90 px-6 py-3 text-zinc-900 font-medium shadow hover:bg-white">
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2"><Mic size={18} /><span className="text-sm">Natural voice conversations</span></div>
            <div className="flex items-center gap-2"><MessageCircle size={18} /><span className="text-sm">Therapeutic chat insights</span></div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-indigo-950/50 to-indigo-950" />
    </section>
  );
}
