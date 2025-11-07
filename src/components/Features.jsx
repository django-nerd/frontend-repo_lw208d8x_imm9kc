import { Bot, Headphones, MessagesSquare, BrainCircuit, ShieldCheck, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Headphones className="h-5 w-5" />, 
      title: 'Voice Assistant Therapy', 
      desc: 'Have calming, natural conversations with an AI therapist trained on evidence-based techniques.',
    },
    {
      icon: <MessagesSquare className="h-5 w-5" />, 
      title: 'Reflective Chat', 
      desc: 'Text with an empathetic counselor who summarizes patterns and suggests coping strategies.',
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />, 
      title: 'Personalized Plans', 
      desc: 'Daily check-ins and tailored exercises rooted in CBT, DBT, and mindfulness practices.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />, 
      title: 'Private & Secure', 
      desc: 'Data encrypted in transit and at rest. You control what’s shared. Export or delete anytime.',
    },
    {
      icon: <Clock className="h-5 w-5" />, 
      title: '24/7 Availability', 
      desc: 'Support whenever you need it. Sessions that fit your schedule from anywhere.',
    },
    {
      icon: <Bot className="h-5 w-5" />, 
      title: 'Multimodal Intelligence', 
      desc: 'Understands tone and context to respond with empathy and helpful next steps.',
    },
  ];

  return (
    <section id="features" className="relative bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Care that meets you where you are</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Built for accessibility, safety, and real progress—guided by modern clinical frameworks.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-600 grid place-items-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
