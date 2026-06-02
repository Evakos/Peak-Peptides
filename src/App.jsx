import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-peak-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-peak-dark/95 backdrop-blur-md border-b border-peak-border' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-peak-gold to-peak-gold-dark flex items-center justify-center">
              <span className="text-peak-dark font-bold text-sm">P</span>
            </div>
            <span className="font-display text-xl tracking-wider text-white">PEAK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#protocol" className="hover:text-peak-gold transition-colors">Protocol</a>
            <a href="#benefits" className="hover:text-peak-gold transition-colors">Benefits</a>
            <a href="#science" className="hover:text-peak-gold transition-colors">Science</a>
            <a href="#testimonials" className="hover:text-peak-gold transition-colors">Results</a>
          </div>
          <button className="bg-peak-gold hover:bg-peak-gold-light text-peak-dark px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-peak-gold/20">
            Begin Protocol
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-peak-accent/30 via-peak-dark to-peak-darker" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-peak-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peak-gold/3 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-peak-gold text-sm tracking-[0.3em] uppercase font-medium">Elite Performance Protocol</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            Unlock Your
            <br />
            <span className="bg-gradient-to-r from-peak-gold via-peak-gold-light to-peak-gold bg-clip-text text-transparent">Peak Potential</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A scientifically formulated peptide protocol designed for optimal cognitive function, physical recovery, and cellular regeneration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-peak-gold hover:bg-peak-gold-light text-peak-dark px-10 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-peak-gold/25">
              Start Your Journey
            </button>
            <button className="border border-peak-border hover:border-peak-gold/50 text-gray-300 px-10 py-4 rounded-full text-base transition-all">
              Learn More
            </button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Clinically Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>GMP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Third-Party Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-peak-gold text-sm tracking-[0.3em] uppercase font-medium">The Protocol</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">Your Daily Regimen</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A meticulously designed protocol delivered in precise doses for maximum bioavailability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Morning Activation', desc: 'Start with our cognitive enhancement complex for peak mental clarity and focus throughout the day.', icon: '🌅' },
              { step: '02', title: 'Midday Recovery', desc: 'Cellular repair and regeneration formula to maintain energy levels and support physical recovery.', icon: '⚡' },
              { step: '03', title: 'Evening Regeneration', desc: 'Nighttime restoration blend that optimizes sleep quality and promotes deep cellular repair.', icon: '🌙' },
            ].map((item) => (
              <div key={item.step} className="group relative bg-peak-surface border border-peak-border rounded-2xl p-8 hover:border-peak-gold/30 transition-all duration-500">
                <div className="text-4xl mb-6">{item.icon}</div>
                <span className="text-peak-gold/40 text-sm font-mono">{item.step}</span>
                <h3 className="font-display text-xl text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-peak-gold/0 via-peak-gold/20 to-peak-gold/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 bg-peak-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-peak-gold text-sm tracking-[0.3em] uppercase font-medium">Benefits</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6">Engineered for Excellence</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our protocol targets four key areas of human performance, backed by cutting-edge research and decades of biochemical expertise.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Cognitive Function', value: '94%', desc: 'Improved mental clarity and focus' },
                  { label: 'Physical Recovery', value: '87%', desc: 'Faster muscle recovery and repair' },
                  { label: 'Sleep Quality', value: '92%', desc: 'Deeper, more restorative sleep' },
                  { label: 'Cellular Health', value: '96%', desc: 'Enhanced cellular regeneration' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-peak-border pb-4">
                    <div>
                      <span className="text-white font-medium">{item.label}</span>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="text-peak-gold font-display text-2xl">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-peak-gold/10 to-peak-accent/30 border border-peak-border flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-peak-gold to-peak-gold-dark flex items-center justify-center">
                    <span className="text-peak-dark text-3xl font-bold">P</span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">Peak Peptides</h3>
                  <p className="text-gray-500 text-sm">Elite Performance Protocol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-peak-gold text-sm tracking-[0.3em] uppercase font-medium">The Science</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">Backed by Research</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every component of our protocol is supported by peer-reviewed studies and clinical trials.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Bioavailability', desc: 'Optimized delivery systems for maximum absorption and efficacy.', stat: '98%' },
              { title: 'Purity', desc: 'All compounds tested at 99.9% purity with no contaminants.', stat: '99.9%' },
              { title: 'Stability', desc: 'Advanced formulation ensures long-term stability and potency.', stat: '24mo' },
              { title: 'Safety', desc: 'Rigorous safety protocols and third-party verification.', stat: 'GMP' },
            ].map((item) => (
              <div key={item.title} className="bg-peak-surface border border-peak-border rounded-xl p-6 text-center hover:border-peak-gold/20 transition-all">
                <span className="text-peak-gold font-display text-3xl block mb-3">{item.stat}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-peak-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-peak-gold text-sm tracking-[0.3em] uppercase font-medium">Results</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. James Mitchell', role: 'Neurologist', quote: 'The cognitive benefits are remarkable. My patients report unprecedented mental clarity and focus.' },
              { name: 'Sarah Chen', role: 'Elite Athlete', quote: 'Recovery time has been cut in half. This protocol is a game-changer for my training regimen.' },
              { name: 'Marcus Williams', role: 'Biohacker', quote: 'I\'ve tried countless protocols. Nothing comes close to the results I\'ve seen with Peak Peptides.' },
            ].map((item) => (
              <div key={item.name} className="bg-peak-surface border border-peak-border rounded-xl p-8">
                <div className="text-peak-gold mb-4">★★★★★</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peak-gold/30 to-peak-accent flex items-center justify-center text-sm text-peak-gold">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-peak-dark via-peak-accent/20 to-peak-dark" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Ready to Reach Your{' '}
            <span className="bg-gradient-to-r from-peak-gold to-peak-gold-light bg-clip-text text-transparent">Peak</span>?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join thousands who have transformed their performance with our scientifically validated protocol.
          </p>
          <button className="bg-peak-gold hover:bg-peak-gold-light text-peak-dark px-12 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-peak-gold/25">
            Begin Your Protocol
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-peak-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-peak-gold to-peak-gold-dark flex items-center justify-center">
              <span className="text-peak-dark font-bold text-xs">P</span>
            </div>
            <span className="font-display text-lg text-white">PEAK</span>
          </div>
          <p className="text-gray-600 text-sm">© 2026 Peak Peptides. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-peak-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-peak-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-peak-gold transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
