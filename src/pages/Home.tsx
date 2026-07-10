import { ArrowRight, ArrowUpRight, Check, Zap, Clock, Shield, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/Animated';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        <img
          src="/hero.png"
          alt="Athlete flexing"
          className="absolute bottom-0 right-0 h-[105%] w-auto max-w-none object-contain grayscale opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-[1680px] mx-auto px-6 md:px-12 xl:px-20 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600/10 text-red-500 px-4 py-2 border border-red-600/20 text-xs font-bold mb-6 uppercase tracking-widest">
              Elite Access Only
            </div>
            <h1 className="text-6xl md:text-7xl 2xl:text-8xl font-black mb-6 leading-[0.95] tracking-tight uppercase">
              The Underground<br/>
              <span className="text-red-500">Performance Protocol</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
              Pharmaceutical-grade peptides. Custom protocols. Zero compromises.
            </p>
            <div className="border-l-2 border-red-600 pl-6 mb-8">
              <p className="text-gray-300 italic">
                "We don't market to everyone. We work with athletes who refuse to accept mediocrity."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#pricing" className="bg-red-600 text-white px-10 py-4 hover:bg-red-700 transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm border border-red-500 shadow-lg shadow-red-600/20">
                Request Access
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="bg-transparent text-white px-10 py-4 hover:bg-white/5 transition-all flex items-center justify-center gap-2 font-semibold uppercase tracking-wide text-sm border border-gray-700">
                View Protocol
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800 max-w-xl">
              <div>
                <div className="font-black text-3xl text-red-500">38K+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Elite Athletes</div>
              </div>
              <div>
                <div className="font-black text-3xl text-red-500">99%</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Purity Grade</div>
              </div>
              <div>
                <div className="font-black text-3xl text-red-500">+12 lbs</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Avg. Gain</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 right-6 hidden lg:block w-80">
            <div className="relative">
              <span className="absolute -top-12 -left-12 h-24 w-24 block z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <g transform="translate(50,50)">
                    <circle className="pulse-radar-circle" cx="0" cy="0" r="6" />
                    <circle className="pulse-core-circle" cx="0" cy="0" r="6" />
                  </g>
                </svg>
              </span>
            <div className="bg-black/80 backdrop-blur-sm p-6 border border-red-600/30">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Protocol Results</div>
                  <div className="font-black text-3xl text-red-500">+12-18 lbs</div>
                  <div className="text-gray-400 text-sm mt-1">Lean Muscle | 90 Days</div>
                </div>
                <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center">
                  <img src="/icons/hero-badge.svg" alt="" className="w-8 h-8" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-red-700 via-red-600 to-red-800 overflow-hidden">
        <AnimatedSection className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 items-start">
            <div className="flex items-center justify-center mb-12 lg:mb-0 lg:h-full">
              <div className="text-center lg:text-left lg:-rotate-90 lg:whitespace-nowrap">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[0.95]">
                  Natural Limits.<br className="lg:hidden"/><span className="hidden lg:inline"> </span>Broken.
                </h2>
                <p className="text-black/70 text-sm uppercase tracking-widest mt-3">What's holding you back?</p>
              </div>
            </div>

            <div>
            <div className="grid md:grid-cols-3 gap-5 mt-8 lg:mt-0">
            <div className="relative flex items-center min-h-[300px] bg-black/85 border border-black hover:border-white/40 transition-colors p-8">
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/40" />
              <p className="text-gray-200 text-lg">Training plateaus despite perfect programming</p>
            </div>
            <div className="relative flex items-center min-h-[300px] bg-black/85 border border-black hover:border-white/40 transition-colors p-8">
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/40" />
              <p className="text-gray-200 text-lg">Recovery time killing your training frequency</p>
            </div>
            <div className="relative flex items-center min-h-[300px] bg-black/85 border border-black hover:border-white/40 transition-colors p-8">
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/40" />
              <p className="text-gray-200 text-lg">Stubborn fat despite single-digit body fat goals</p>
            </div>
            <div className="relative flex items-center min-h-[300px] bg-black/85 border border-black hover:border-white/40 transition-colors p-8">
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/40" />
              <p className="text-gray-200 text-lg">Age stealing your performance edge</p>
            </div>
            <div className="relative flex items-center min-h-[300px] bg-black/85 border border-black hover:border-white/40 transition-colors p-8">
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/40" />
              <p className="text-gray-200 text-lg">Joint pain limiting your intensity</p>
            </div>
            <div className="relative flex items-center min-h-[300px] bg-black/85 border border-black hover:border-white/40 transition-colors p-8">
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/40" />
              <p className="text-gray-200 text-lg">Natural limits holding you back</p>
            </div>
          </div>


          <div className="text-center mt-12 pt-8 border-t border-black/30 relative z-10">
            <p className="text-black/70 mb-2 uppercase tracking-wide">Your genetics aren't the problem.</p>
            <p className="text-xl font-bold text-white uppercase tracking-wide">Your <span className="text-black">protocol</span> is.</p>
          </div>
            </div>
          </div>
        </AnimatedSection>
      </section>




      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <AnimatedSection className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight uppercase">The <span className="text-red-500">Protocol</span></h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Pharmaceutical-grade. Zero Shortcuts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">
                <img src="/icons/target.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Pharma-Grade</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                99%+ purity. Third-party tested. Custom blends engineered for muscle growth, fat loss, and recovery.
              </p>
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">$297/mo Value</div>
            </div>
            <div className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">
                <img src="/icons/activity.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Custom Protocols</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Dosing and stacking tailored to your goals, experience, and body composition. No cookie-cutter BS.
              </p>
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">$197 Value</div>
            </div>
            <div className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">
                <img src="/icons/users.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Expert Coaching</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Direct access to peptide specialists. Training, nutrition, protocol optimization—all covered.
              </p>
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">$397/mo Value</div>
            </div>
            <div className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">
                <img src="/icons/shield.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Lab Reports</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Third-party testing for every batch. Bloodwork monitoring included. Safety isn't optional.
              </p>
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">$147/mo Value</div>
            </div>
            <div className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">
                <img src="/icons/award.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Elite Training</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Optimized programs designed to maximize peptide synergy. Built by championship coaches.
              </p>
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">$97 Value</div>
            </div>
            <div className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6">
                <img src="/icons/heart.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Recovery Stack</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Advanced protocols for sleep optimization, nutrition timing, and faster recovery between sessions.
              </p>
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">$87 Value</div>
            </div>
          </div>
          <div className="text-center mt-12 pt-12 border-t border-gray-800">
            <div className="inline-block">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Total Protocol Value</p>
              <p className="text-4xl font-black">
                <span className="line-through text-gray-700">$1,222</span>{' '}
                <span className="text-red-500">$297</span><span className="text-gray-600 text-2xl">/mo</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Scarcity Banner */}
      <section className="py-6 px-6 bg-black">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Limited Protocol Slots • <span className="text-white">27 Openings Remaining</span>
          </p>
        </AnimatedSection>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-black">
        <AnimatedSection className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight uppercase">The <span className="text-red-500">Process</span></h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Three Steps to Peak Performance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="w-16 h-16 bg-red-600/10 border border-red-600/30 flex items-center justify-center text-2xl font-black text-red-500 mx-auto mb-6">
                01
              </div>
              <div className="relative overflow-hidden border border-gray-800 mb-6 h-48 bg-zinc-950">
                <img src="/assessment.jpg" alt="Athlete assessment" className="w-full h-full object-cover grayscale" />
              </div>
              <h3 className="text-lg font-black mb-3 uppercase tracking-wide">Assessment</h3>

              <p className="text-gray-400 text-sm">
                Complete detailed intake about goals, training history, and performance metrics.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="w-16 h-16 bg-red-600/10 border border-red-600/30 flex items-center justify-center text-2xl font-black text-red-500 mx-auto mb-6">
                02
              </div>
              <div className="relative overflow-hidden border border-gray-800 mb-6 h-48 bg-zinc-950">
                <img src="/protocol.jpg" alt="Peak Peptides protocol case" className="w-full h-full object-cover grayscale" />
              </div>
              <h3 className="text-lg font-black mb-3 uppercase tracking-wide">Protocol Design</h3>

              <p className="text-gray-400 text-sm">
                Receive custom peptide stack, dosing schedule, and complete protocol documentation.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="w-16 h-16 bg-red-600/10 border border-red-600/30 flex items-center justify-center text-2xl font-black text-red-500 mx-auto mb-6">
                03
              </div>
              <div className="relative overflow-hidden border border-gray-800 mb-6 h-48 bg-zinc-950">
                <img src="/performance.jpg" alt="Athlete performing a heavy deadlift" className="w-full h-full object-cover grayscale" />
              </div>
              <h3 className="text-lg font-black mb-3 uppercase tracking-wide">Transformation</h3>

              <p className="text-gray-400 text-sm">
                Build lean muscle, accelerate recovery, and perform at your absolute peak.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-gradient-to-b from-red-700 via-red-600 to-red-800 overflow-hidden">
        <img
          src="/peak-mark-black.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-none opacity-[0.12] pointer-events-none"
        />
        <AnimatedSection className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 tracking-tight uppercase text-white">Access <span className="text-black">Tiers</span></h2>
            <p className="text-black/70 text-sm uppercase tracking-widest">Select Your Protocol Level</p>
          </div>
          <div className="relative grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-white/30 z-0"></div>
            {/* Starter Plan */}
            <div className="relative z-10 bg-black/85 p-8 border border-black">
              <div className="text-xs text-gray-600 uppercase tracking-widest mb-4">Level 01</div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Foundation</h3>
              <p className="text-gray-500 mb-8 text-sm">Entry protocol</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">$497</span>
                  <span className="text-gray-600">/mo</span>
                </div>
                <div className="text-xs text-gray-600 mt-2">Regular: $997</div>
              </div>
              <Link to="/shop" className="w-full block text-center bg-gray-800 text-white py-4 hover:bg-gray-700 transition-colors mb-8 font-bold uppercase tracking-wide text-sm border border-gray-700">
                Request Access
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">1 pharma-grade blend</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Protocol documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Lab reports</span>
                </li>
              </ul>
            </div>

            {/* Elite Plan - FEATURED */}
            <div className="relative z-10 bg-black p-8 border border-black transform md:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-1 text-xs font-bold uppercase tracking-widest">
                Recommended
              </div>
              <div className="text-xs text-red-500 uppercase tracking-widest mb-4">Level 02</div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-white">Elite</h3>
              <p className="text-gray-500 mb-8 text-sm">Full protocol</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-red-500">$297</span>
                  <span className="text-gray-600">/mo</span>
                </div>
                <div className="text-xs text-gray-600 mt-2">Regular: $997 • <span className="text-red-500">Save $700</span></div>
              </div>
              <Link to="/shop" className="w-full block text-center bg-red-600 text-white py-4 hover:bg-red-700 transition-colors mb-8 font-bold uppercase tracking-wide text-sm border border-red-500 shadow-lg shadow-red-600/30">
                Secure Access
              </Link>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Everything in Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-semibold">3-peptide stack protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-semibold">1-on-1 specialist calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-semibold">Custom training system</span>
                </li>
              </ul>
            </div>

            {/* Champion Plan */}
            <div className="relative z-10 bg-black/85 p-8 border border-black">
              <div className="bg-red-600/10 text-red-500 px-3 py-1 border border-red-600/30 text-xs font-bold inline-block mb-4 uppercase tracking-widest">
                Pro Athlete
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest mb-4">Level 03</div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-white">Apex</h3>
              <p className="text-gray-500 mb-8 text-sm">Maximum protocol</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">$697</span>
                  <span className="text-gray-600">/mo</span>
                </div>
                <div className="text-xs text-gray-600 mt-2">Regular: $1,997</div>
              </div>
              <Link to="/shop" className="w-full block text-center bg-gray-800 text-white py-4 hover:bg-gray-700 transition-colors mb-8 font-bold uppercase tracking-wide text-sm border border-gray-700">
                Apply Now
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Everything in Elite</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-semibold">5+ peptide advanced stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-semibold">Weekly blood monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-semibold">Dedicated specialist</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12 pt-12 border-t border-black/30">
            <div className="inline-flex items-center gap-3">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-black/70 text-sm uppercase tracking-widest">60-Day Protocol Guarantee</span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 px-6 bg-black">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-black text-white mb-6 tracking-tight uppercase">
            Ready To Break Through<br/>Your <span className="text-red-500">Natural Limits?</span>
          </h3>
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
            38,492 Athletes. Real Protocols. Real Results.
          </p>
          <a href="#pricing" className="bg-red-600 text-white px-12 py-4 hover:bg-red-700 transition-all inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm border border-red-500 shadow-lg shadow-red-600/20">
            Request Access
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-8 flex items-center justify-center gap-8 text-xs text-gray-600 uppercase tracking-widest">
            <span>60-Day Guarantee</span>
            <span className="text-gray-800">•</span>
            <span>Pharma-Grade</span>
            <span className="text-gray-800">•</span>
            <span>Lab Tested</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-black">
        <AnimatedSection className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 tracking-tight uppercase">Why <span className="text-red-500">Peak Peptides</span></h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest text-center mb-12">Comparison vs Alternatives</p>
          <div className="overflow-x-auto border border-gray-800">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800 bg-black">
                  <th className="text-left p-4 font-black uppercase tracking-wide text-sm text-white">Feature</th>
                  <th className="p-4 bg-black border-l border-gray-800">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 text-red-500" />
                      <span className="font-black text-red-500 uppercase tracking-wide text-sm">Peak Peptides</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-l border-gray-800 text-gray-500 text-sm uppercase tracking-wide">Supplements</th>
                  <th className="p-4 text-center border-l border-gray-800 text-gray-500 text-sm uppercase tracking-wide">TRT Clinics</th>
                  <th className="p-4 text-center border-l border-gray-800 text-gray-500 text-sm uppercase tracking-wide">Underground</th>
                </tr>
              </thead>
              <tbody className="bg-zinc-950">
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">Pharma-grade quality</td>
                  <td className="p-4 bg-black text-center border-l border-gray-800">
                    <Check className="w-5 h-5 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <Check className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">Third-party lab tested</td>
                  <td className="p-4 bg-black text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <Check className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <Check className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">Custom protocols</td>
                  <td className="p-4 bg-black text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">Expert coaching included</td>
                  <td className="p-4 bg-black text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <Check className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">Bloodwork monitoring</td>
                  <td className="p-4 bg-black text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">Legal & safe</td>
                  <td className="p-4 bg-black text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-400 text-sm">60-day guarantee</td>
                  <td className="p-4 bg-black text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <Check className="w-5 h-5 text-gray-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <X className="w-5 h-5 text-gray-700 mx-auto" />
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-800">
                  <td className="p-4 text-gray-400 text-sm font-black uppercase tracking-wide">Monthly Cost</td>
                  <td className="p-4 bg-black text-center border-l border-gray-800">
                    <div className="font-black text-red-500 text-lg">$297</div>
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <div className="text-gray-600 text-sm">$50-150</div>
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <div className="text-gray-600 text-sm">$500-1,200</div>
                  </td>
                  <td className="p-4 text-center border-l border-gray-800">
                    <div className="text-gray-600 text-sm">$200-600</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-12">
            <a href="#pricing" className="bg-red-600 text-white px-10 py-4 hover:bg-red-700 transition-colors inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm border border-red-500 shadow-lg shadow-red-600/20">
              Request Access
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-black">
        <AnimatedSection className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight uppercase"><span className="text-red-500">Proven</span> Results</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">38,492+ Elite Transformations</p>
          </div>

          {/* Featured Transformation */}
          <div className="bg-zinc-950 border border-gray-800 p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-500 text-xl">★</span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase">"Gained 23 Pounds of Pure Muscle in 90 Days"</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  "I've been training for 12 years and thought I'd maxed out my natural potential. Peak proved me wrong.
                  Within 90 days, I gained 23 pounds of lean muscle mass, my recovery time cut in half, and I'm lifting heavier than ever.
                  My body composition completely transformed. The peptide protocols are next-level, and the expert coaching made all the difference.
                  This is the real deal."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                    alt="Jake B."
                    className="w-14 h-14 object-cover grayscale border border-gray-700 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-white">Jake B.</div>
                    <div className="text-gray-500 text-sm">Age 34 • Competitive Bodybuilder</div>
                    <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                  </div>
                </div>

              </div>
              <div className="bg-black border border-gray-800 p-6">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-zinc-950 p-4 border border-gray-800">
                      <div className="text-3xl font-black text-gray-500">187</div>
                      <div className="text-xs text-gray-600 uppercase tracking-widest">Before</div>
                    </div>
                    <div className="bg-zinc-950 p-4 border border-gray-800">
                      <div className="text-3xl font-black text-red-500">210</div>
                      <div className="text-xs text-gray-600 uppercase tracking-widest">After</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-red-500">+23 lbs</div>
                  <div className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Lean Muscle • 90 Days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "Added 17 lbs of lean muscle in 12 weeks! Recovery time is insane - I can train 6 days a week now.
                Best decision I've made for my physique!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                  alt="Marcus C."
                  className="w-12 h-12 object-cover grayscale border border-gray-700 rounded-full"
                />
                <div>
                  <div className="font-bold text-white text-sm">Marcus C.</div>
                  <div className="text-sm text-gray-600">+17 lbs muscle</div>
                  <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "The peptide specialist helped me dial in the perfect stack. Strength gains are unreal and I'm finally seeing abs at 45!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                  alt="Tyler R."
                  className="w-12 h-12 object-cover grayscale border border-gray-700 rounded-full"
                />
                <div>
                  <div className="font-bold text-white text-sm">Tyler R.</div>
                  <div className="text-sm text-gray-600">Body recomp</div>
                  <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "Not just gains - my sleep quality improved, skin looks younger, and energy is incredible.
                Feel like I'm in my 20s again!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                  alt="Lisa S."
                  className="w-12 h-12 object-cover grayscale border border-gray-700 rounded-full"
                />
                <div>
                  <div className="font-bold text-white text-sm">Lisa S.</div>
                  <div className="text-sm text-gray-600">Anti-aging</div>
                  <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "Was skeptical about peptides, but the results speak for themselves.
                PRs on all my lifts and recovery that lets me train like an athlete again at 52!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                  alt="David C."
                  className="w-12 h-12 object-cover grayscale border border-gray-700 rounded-full"
                />
                <div>
                  <div className="font-bold text-white text-sm">David C.</div>
                  <div className="text-sm text-gray-600">Performance</div>
                  <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "Best investment in my physique. The custom protocol and coaching made it foolproof.
                Gained 14 lbs of muscle, dropped 8% body fat!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                  alt="Alex S."
                  className="w-12 h-12 object-cover grayscale border border-gray-700 rounded-full"
                />
                <div>
                  <div className="font-bold text-white text-sm">Alex S.</div>
                  <div className="text-sm text-gray-600">+14 lbs muscle</div>
                  <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                "Finally broke through my plateau! The peptide stack plus training program took me to a whole new level.
                Competition ready in 16 weeks!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100&q=80"
                  alt="Nina K."
                  className="w-12 h-12 object-cover grayscale border border-gray-700 rounded-full"
                />
                <div>
                  <div className="font-bold text-white text-sm">Nina K.</div>
                  <div className="text-sm text-gray-600">Competitor</div>
                  <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Verified</div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-red-700 via-red-600 to-red-800 overflow-hidden">
        <AnimatedSection className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 items-center">
            <div className="flex items-center justify-center mb-12 lg:mb-0 lg:h-full">
              <div className="text-center lg:text-left lg:-rotate-90 lg:whitespace-nowrap">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[0.95]">
                  Zero<span className="hidden lg:inline"> </span><br className="lg:hidden"/>Risk.
                </h2>
                <p className="text-black/70 text-sm uppercase tracking-widest mt-3">60-Day Guarantee</p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-black/20 border border-black/30 flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <img src="/icons/shield-white.svg" alt="" className="w-10 h-10" />
              </div>
              <p className="text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Try the protocol completely <span className="font-bold text-white">risk-free for 60 days</span>. If you don't see measurable gains,
                or if you're not completely satisfied for ANY reason, we'll refund every penny.
                No questions asked. No hassles.
              </p>
              <div className="max-w-2xl mx-auto lg:mx-0">
                <p className="text-sm text-gray-300 uppercase tracking-widest mb-6">
                  What This Means:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-left">
                  <div className="bg-black/85 border border-black p-6 flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-white text-sm">Zero Risk</div>
                      <div className="text-xs text-gray-500">60 days to test everything</div>
                    </div>
                  </div>
                  <div className="bg-black/85 border border-black p-6 flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-white text-sm">Full Refund</div>
                      <div className="text-xs text-gray-500">100% money back, no questions</div>
                    </div>
                  </div>
                  <div className="bg-black/85 border border-black p-6 flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-white text-sm">Keep Bonuses</div>
                      <div className="text-xs text-gray-500">Even if you request refund</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-black">
        <AnimatedSection className="max-w-[1440px] mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 tracking-tight uppercase">Common <span className="text-red-500">Questions</span></h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest text-center mb-12">Everything You Need To Know</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Are peptides safe?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yes, when used properly under expert guidance. All our peptides are pharmaceutical-grade with 99%+ purity and
                third-party tested. We provide complete protocols, dosing guidelines, and regular bloodwork monitoring to ensure
                safety. Our team includes licensed medical professionals who oversee all protocols.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">How quickly will I see results?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Most members notice improved recovery and energy within 7-10 days. Visible muscle growth typically begins around
                week 3-4. On average, our members gain 8-15 lbs of lean muscle in 90 days with proper training and nutrition.
                Fat loss and body composition changes are noticeable within 4-6 weeks.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Do I need to inject peptides?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Most peptides are administered via subcutaneous injection (similar to insulin). We provide complete injection
                training videos and guides. The needles are small and the process is simple. Some peptides are available in
                oral or nasal spray form - we'll customize your protocol based on your comfort level.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Will I lose my gains when I stop?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No! Unlike synthetic hormones, peptides help your body optimize its own natural processes. The muscle you build
                is real tissue that stays with you. We also provide post-cycle protocols to help you maintain your results and
                transition smoothly.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Do you ship internationally?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We currently ship to the US, Canada, UK, Australia, and select European countries. Shipping is discreet and
                includes cold-chain packaging to maintain peptide stability. All products include lab reports and documentation.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Can I cancel anytime?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yes! There are no long-term contracts. You can cancel your subscription at any time. We recommend completing
                at least one full 12-week cycle for optimal results, but you're protected by our 60-day money-back guarantee.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Is this suitable for women?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Absolutely! We have specific protocols designed for women focused on fat loss, muscle tone, anti-aging, and
                recovery. Many of our female members use peptides for body composition, skin health, and overall wellness.
                All protocols are customized to your specific goals.
              </p>
            </div>
            <div className="bg-zinc-950 border border-gray-800 p-6">
              <h3 className="font-black text-lg mb-3 text-white uppercase tracking-wide">Do I need a prescription?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No prescription required. All protocols are reviewed by our licensed medical team before dispatch, and every
                order ships with full lab documentation and dosing guidelines so you're never guessing.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-black">
        <AnimatedSection className="max-w-5xl mx-auto">
          <div className="bg-black border-2 border-red-600/30 p-12 text-center text-white shadow-2xl shadow-red-600/10">
            <div className="inline-block bg-red-600 text-white px-6 py-2 border border-red-500 font-bold text-xs mb-6 uppercase tracking-widest">
              Limited Availability • {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight uppercase">
              Stop Settling For Mediocre Gains<br/>
              <span className="text-red-500">Break Your Natural Limits</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
              38,492+ elite athletes are building lean muscle, recovering faster, and performing at their peak with Peak.
              Take action today and transform your physique.
            </p>

            <div className="bg-zinc-950 border border-gray-800 p-6 mb-8 max-w-2xl mx-auto">
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm text-gray-400">Pharma-grade peptides worth $297/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm text-gray-400">Custom protocols & expert coaching worth $397/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm text-gray-400">FREE bonuses worth $381 (training programs + bloodwork)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm text-gray-400">60-day money-back guarantee</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs text-gray-600 uppercase tracking-widest mb-2">Regular Price: <span className="line-through">$997/month</span></div>
              <div className="text-6xl font-black mb-2 text-red-500">$297<span className="text-2xl text-gray-400">/mo</span></div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">Save $700/month • Limited Time</div>
            </div>

            <Link to="/shop" className="bg-red-600 text-white px-12 py-5 hover:bg-red-700 transition-colors inline-flex items-center gap-3 font-bold uppercase tracking-wide text-sm border border-red-500 shadow-lg shadow-red-600/30 mb-6">
              Secure Your Spot Now
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex items-center justify-center gap-8 text-xs text-gray-600 uppercase tracking-widest flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-500" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>

          {/* Final Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-xs uppercase tracking-widest">847 Athletes Joined • Last 24 Hours</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-red-600/20 border border-red-600/30"></div>
              ))}
              <div className="w-10 h-10 bg-red-600/10 border border-red-600/30 flex items-center justify-center text-xs font-black text-red-500">
                +800
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
