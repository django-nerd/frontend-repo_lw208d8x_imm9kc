import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Chat from './components/Chat';
import Voice from './components/Voice';
import { Mail, Twitter, Shield, BookOpen } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0B0E14] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
              <span className="text-lg font-semibold tracking-tight">Vylex AI</span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-xs">Futuristic, private mental health support through voice and chat — designed for real progress.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#chat" className="hover:text-white flex items-center gap-2"><BookOpen size={14}/>Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Shield size={14}/>Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Stay in touch</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Email" href="mailto:hello@vylex.ai" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 hover:bg-white/10"><Mail size={16} /></a>
              <a aria-label="Twitter" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 hover:bg-white/10"><Twitter size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60 border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} Vylex AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Chat />
        <Voice />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
