import { useState, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden">
      <img
        src="/peak-mark.svg"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-[480px] max-w-none opacity-[0.06] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1680px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pb-12 border-b border-gray-800">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Peak Peptides" className="w-12 h-12" />
              <span className="font-black text-2xl tracking-tight">PEAK PEPTIDES</span>
            </div>
            <p className="text-gray-500 text-sm">
              Pharmaceutical-grade peptides helping elite athletes build muscle, recover faster, and perform at their peak.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <h4 className="font-black text-sm uppercase tracking-widest mb-3 text-red-500">Get 20% Off Your First Order</h4>
            {subscribed ? (
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wide text-sm py-3.5">
                <Check className="w-5 h-5 text-red-500" />
                You're In — Check Your Inbox
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border border-gray-800 focus-within:border-red-600/50 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 hover:bg-red-700 transition-colors font-bold uppercase tracking-wide text-sm flex items-center gap-2 whitespace-nowrap"
                >
                  Sign Up
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-800">
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href={anchor('features')} className="hover:text-red-500 transition-colors uppercase tracking-wider">Protocol</a></li>
              <li><a href={anchor('pricing')} className="hover:text-red-500 transition-colors uppercase tracking-wider">Access</a></li>
              <li><a href={anchor('testimonials')} className="hover:text-red-500 transition-colors uppercase tracking-wider">Results</a></li>
              <li><Link to="/shop" className="hover:text-red-500 transition-colors uppercase tracking-wider">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase tracking-wider">About</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase tracking-wider">Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase tracking-wider">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase tracking-wider">Privacy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase tracking-wider">Terms</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase tracking-wider">Refund</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Guarantee</h4>
            <div className="flex items-start gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
              <p className="uppercase tracking-wider">60-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            © 2026 Peak Peptides. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 uppercase tracking-wider">
            Results vary. Individual results depend on commitment and protocol adherence.
          </p>
        </div>
      </div>
    </footer>
  );
}
