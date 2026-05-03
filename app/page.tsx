export default function Home() {
  const faqs = [
    {
      q: 'How does it detect domain searches?',
      a: 'We monitor GoDaddy domain availability signals and search patterns to flag when your registered domains are being actively looked up by third parties.'
    },
    {
      q: 'What alert methods are supported?',
      a: 'You receive instant email notifications and can configure a custom webhook URL to pipe alerts into Slack, Discord, or any HTTP endpoint.'
    },
    {
      q: 'Which domains can I monitor?',
      a: 'Any domain you own or plan to register. Add up to 50 domains on the Pro plan and get alerted the moment suspicious search activity is detected.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the moment someone<br />
          <span className="text-[#58a6ff]">eyes your domain</span> on GoDaddy
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Domain snipers search your brand before they pounce. Get real-time alerts via email or webhook so you can act first — before it&apos;s too late.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Setup in under 2 minutes.</p>
      </section>

      {/* How it works strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { step: '01', title: 'Add your domains', desc: 'Paste the domains you want to protect into your dashboard.' },
          { step: '02', title: 'We watch GoDaddy', desc: 'Our background jobs poll domain search signals around the clock.' },
          { step: '03', title: 'Get instant alerts', desc: 'Email or webhook fires the second suspicious activity is detected.' }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] font-mono text-sm mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor up to 50 domains',
              'Real-time email alerts',
              'Webhook integrations (Slack, Discord)',
              'Search activity dashboard',
              'Alert history & logs',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Domain Hijack Alerter. All rights reserved.
      </footer>
    </main>
  )
}
