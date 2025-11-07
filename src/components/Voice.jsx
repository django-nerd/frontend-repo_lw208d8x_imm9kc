import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Voice() {
  return {
    /* Voice assistant full-bleed section with Spline background and overlay controls */
  } && (
    <section id="voice" className="relative min-h-[70vh] bg-[#0B0E14] text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0E14]/10 via-[#0B0E14]/40 to-[#0B0E14]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Voice Assistant</h3>
              <p className="mt-1 text-white/70 text-sm max-w-xl">A calm, minimal interface to talk things through. Tap start and speak naturally — you can pause anytime.</p>
            </div>
            <a href="#chat" className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 font-medium shadow hover:bg-zinc-100">
              Go to chat <ArrowRight size={16} />
            </a>
          </div>

          {/* Controls */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button className="rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-500">Start Session</button>
            <button className="rounded-xl bg-white/10 px-4 py-3 font-medium text-white hover:bg-white/15">Pause</button>
            <button className="rounded-xl bg-white/10 px-4 py-3 font-medium text-white hover:bg-white/15">End</button>
          </div>
        </div>
      </div>

      {/* Bottom blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0E14] to-transparent" />
    </section>
  );
}
