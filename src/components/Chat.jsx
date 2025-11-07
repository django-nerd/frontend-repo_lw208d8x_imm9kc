import { useEffect, useRef } from 'react';
import { Mic, Send, Sparkles } from 'lucide-react';

export default function Chat() {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const openVoice = () => {
    // Navigate to the voice assistant section
    window.location.hash = '#voice';
  };

  return (
    <section id="chat" className="bg-[#0B0E14] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[70vh]">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
              <span className="text-sm font-semibold">Your Sessions</span>
            </div>
            <button className="w-full text-left rounded-lg px-3 py-2 text-sm bg-white/10">New chat</button>
            <div className="mt-2 space-y-1 text-sm text-white/70">
              <button className="w-full text-left rounded-lg px-3 py-2 hover:bg-white/5">Morning check-in</button>
              <button className="w-full text-left rounded-lg px-3 py-2 hover:bg-white/5">Reframing stress</button>
              <button className="w-full text-left rounded-lg px-3 py-2 hover:bg-white/5">Coping strategies</button>
            </div>
            <div className="mt-auto pt-4 text-xs text-white/50">Encrypted • Private</div>
          </aside>

          {/* Chat area */}
          <div className="lg:col-span-3 flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/20 grid place-items-center text-indigo-300"><Sparkles size={16} /></div>
                <div>
                  <div className="text-sm font-medium">Vylex Copilot</div>
                  <div className="text-xs text-white/60">Empathetic AI counselor</div>
                </div>
              </div>
              <button onClick={openVoice} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                <Mic size={16} /> Start voice
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/20 grid place-items-center text-indigo-300"><Sparkles size={16} /></div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white/10 px-4 py-3 text-sm">
                  Hi! I’m here with you. What would you like support with today?
                </div>
              </div>

              <div className="flex items-start gap-3 justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-white px-4 py-3 text-sm text-zinc-900">
                  I’m feeling overwhelmed about work. Can we plan my day?
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/20 grid place-items-center text-indigo-300"><Sparkles size={16} /></div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white/10 px-4 py-3 text-sm">
                  Absolutely. Let’s break it into 3 focused blocks with short breaks. What’s the most important task you’d like to start with?
                </div>
              </div>

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0B0E14] px-2">
                <button onClick={openVoice} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:bg-white/10" aria-label="Open voice assistant">
                  <Mic size={18} />
                </button>
                <input
                  className="flex-1 bg-transparent px-2 py-2 text-sm placeholder:text-white/40 focus:outline-none"
                  placeholder="Message Vylex…"
                />
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-500" aria-label="Send">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
