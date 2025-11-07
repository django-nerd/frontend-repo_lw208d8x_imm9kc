import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: 'for 7 days',
      cta: 'Start Trial',
      features: [
        'Unlimited chat sessions',
        '2 voice therapy sessions (15 min each)',
        'Daily mood check-ins',
        'Personalized wellness plan preview',
      ],
      highlight: true,
    },
    {
      name: 'Vylex Plus',
      price: '$19',
      period: '/month',
      cta: 'Subscribe',
      features: [
        'Unlimited chat & summaries',
        '8 voice therapy sessions / month',
        'Advanced insights & trends',
        'Emergency grounding toolkit',
        'Priority support',
      ],
    },
    {
      name: 'Vylex Pro',
      price: '$39',
      period: '/month',
      cta: 'Go Pro',
      features: [
        'Unlimited voice therapy',
        'Custom exercises & programs',
        'Session transcripts & exports',
        'Early access to new features',
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Start with a 7-day free trial. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${plan.highlight ? 'border-indigo-600 shadow-xl ring-1 ring-indigo-600/10 bg-white' : 'border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70'}`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Best for starting</span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-zinc-600 dark:text-zinc-400">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-2 font-medium shadow-sm ${plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
