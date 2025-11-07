import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Initialize dark mode and sync with html class
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Voice Therapy', href: '#voice' },
    { name: 'Chat', href: '#chat' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-zinc-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 grid place-items-center text-white shadow-lg">
              <Sparkles size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Vylex AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/80 hover:text-white"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
            >
              Start Free Trial
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
