import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-gradient-to-tr from-indigo-600 via-sky-600 to-emerald-500 p-[1px] shadow-xl">
          <div className="rounded-3xl bg-white dark:bg-zinc-950 px-8 py-12 md:px-12 md:py-16">
            <div className="md:flex items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Begin your journey with Vylex AI</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-300">Sign up in seconds and get a full week of supportive voice and chat therapy—free.</p>
              </div>
              <a href="#pricing" className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700">
                Start Free Trial <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
