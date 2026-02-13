import React, { useState, useEffect, useRef } from 'react';

interface LandingPageProps {
  onNavigateToDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToDashboard }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Lazy load hero image
  useEffect(() => {
    const img = new Image();
    img.src = 'https://c.ndtvimg.com/2025-02/1luqrq88_bioluminescent-beaches-_625x300_26_February_25.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738';
    img.onload = () => {
      setImageLoaded(true);
      setIsVisible(true);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Full-Page Image */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Lazy Loading */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: imageLoaded 
              ? 'url(https://c.ndtvimg.com/2025-02/1luqrq88_bioluminescent-beaches-_625x300_26_February_25.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738)'
              : 'none',
            backgroundColor: '#0a0a0a'
          }}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] animate-pulse" />
        )}
        
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-[#0a0a0a]/60 transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        {/* Header with Dashboard Button - Overlay on Hero */}
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 signature-gradient rounded-[12px] flex items-center justify-center text-white shadow-xl shadow-teal-500/10 transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80">Patron<span className="text-white/80">OS</span></span>
            </div>
            <button
              onClick={onNavigateToDashboard}
              className="bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 hover:border-white/40 hover:shadow-lg"
            >
              Dashboard
            </button>
          </div>
        </header>

        {/* Hero Content - Centered on Image */}
        <div className={`relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.1] mb-8">
            Predictable income for creators<br />
            <span className="signature-text-gradient inline-block transition-transform duration-500 hover:scale-105">who refuse to be disposable</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-normal leading-[1.8] max-w-3xl mx-auto mb-12">
            Turn your most aligned supporters into reliable monthly patron income — without algorithms, burnout, or constant launching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#0a0a0a] px-8 py-4 rounded-full text-base font-semibold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto">
              Start your patron community
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-base font-semibold border-2 border-white/30 hover:border-white/50 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
              See how it works
            </button>
          </div>
        </div>
      </section>

      {/* Trust / Positioning Strip */}
      <section 
        ref={(el) => { if (el) sectionsRef.current[0] = el; }}
        className="bg-[#f9fafb] border-y border-[#e5e7eb] py-16 opacity-0"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-center text-base md:text-lg text-[#6b7280] font-normal leading-[1.7]">
            <span className="font-semibold text-[#0a0a0a]">Built by people who believe:</span><br className="hidden md:block" />
            Creativity is essential infrastructure. Community is economic stability. Nothing that holds life, story, or effort should be disposable.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section 
        ref={(el) => { if (el) sectionsRef.current[1] = el; }}
        className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40 opacity-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-12 text-center leading-[1.2]">
          The creator economy is loud — but not stable
        </h2>
        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.15em]">You're told to:</h3>
            <ul className="space-y-5 text-[#4a4a4a] font-normal leading-[1.7]">
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Post more</span>
              </li>
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Launch more</span>
              </li>
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Be everywhere</span>
              </li>
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Perform constantly</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.15em]">And still:</h3>
            <ul className="space-y-5 text-[#4a4a4a] font-normal leading-[1.7]">
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Income fluctuates</span>
              </li>
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Algorithms change</span>
              </li>
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Audiences feel shallow</span>
              </li>
              <li className="flex items-start space-x-3 group/item transition-all duration-300 hover:translate-x-1">
                <span className="text-[#9ca3af] mt-1.5 group-hover/item:text-[#4ade80] transition-colors duration-300">→</span>
                <span className="group-hover/item:text-[#0a0a0a] transition-colors duration-300">Burnout becomes normal</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-[#0a0a0a] leading-[1.6]">
            You don't need more attention.<br />
            <span className="text-[#4a4a4a] font-normal">You need reliable support from people who actually care.</span>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        ref={(el) => { if (el) sectionsRef.current[2] = el; }}
        className="bg-[#f9fafb] py-24 md:py-40 opacity-0"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-8 text-center leading-[1.2]">
            A different model: patron income
          </h2>
          <p className="text-xl text-[#4a4a4a] font-normal text-center mb-20 max-w-3xl mx-auto leading-[1.7]">
            Instead of chasing thousands of casual followers…
          </p>
          <div className="bg-white p-12 md:p-20 rounded-2xl border border-[#e5e7eb] hover:shadow-xl transition-all duration-500 hover:border-[#d1d5db]">
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-10 leading-[1.3]">
              Build a smaller circle of people who:
            </h3>
            <ul className="space-y-6 mb-16">
              <li className="flex items-start space-x-4 group/item transition-all duration-300 hover:translate-x-2">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7] group-hover/item:text-[#0a0a0a] transition-colors duration-300">Believe in your work</p>
              </li>
              <li className="flex items-start space-x-4 group/item transition-all duration-300 hover:translate-x-2">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7] group-hover/item:text-[#0a0a0a] transition-colors duration-300">Want you to keep creating</p>
              </li>
              <li className="flex items-start space-x-4 group/item transition-all duration-300 hover:translate-x-2">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7] group-hover/item:text-[#0a0a0a] transition-colors duration-300">Support you monthly</p>
              </li>
            </ul>
            <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-[#e5e7eb]">
              <div className="text-center hover-lift">
                <p className="text-2xl font-bold text-[#0a0a0a] mb-2 leading-[1.3]">Predictable income.</p>
              </div>
              <div className="text-center hover-lift">
                <p className="text-2xl font-bold text-[#0a0a0a] mb-2 leading-[1.3]">Deeper relationships.</p>
              </div>
              <div className="text-center hover-lift">
                <p className="text-2xl font-bold text-[#0a0a0a] mb-2 leading-[1.3]">Work that actually matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        ref={(el) => { if (el) sectionsRef.current[3] = el; }}
        className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40 opacity-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-20 text-center leading-[1.2]">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 hover-lift group">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              1
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-4 leading-[1.3]">Create your patron space</h3>
            <p className="text-[#4a4a4a] font-normal leading-[1.7]">
              Set your tiers. Share your mission. Invite people into deeper connection.
            </p>
          </div>
          <div className="space-y-4 hover-lift group">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              2
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-4 leading-[1.3]">Your supporters become patrons</h3>
            <p className="text-[#4a4a4a] font-normal leading-[1.7]">
              Simple monthly support. Clear value. Real relationship.
            </p>
          </div>
          <div className="space-y-4 hover-lift group">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              3
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-4 leading-[1.3]">Income stabilises → creation deepens</h3>
            <p className="text-[#4a4a4a] font-normal leading-[1.7]">
              Less hustle. More focus. Better work. Stronger community.
            </p>
          </div>
        </div>
      </section>

      {/* For Creators (ICP) */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-12 text-center leading-[1.2]">
            This is for you if you:
          </h2>
          <div className="bg-white p-12 md:p-20 rounded-2xl border border-[#e5e7eb]">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-[#4ade80] mt-0.5">✔</span>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">Care more about depth than scale</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-[#4ade80] mt-0.5">✔</span>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">Are tired of algorithm pressure</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-[#4ade80] mt-0.5">✔</span>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">Want fewer, more committed supporters</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-[#4ade80] mt-0.5">✔</span>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">Are building work around creativity, healing, education, or culture</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-[#4ade80] mt-0.5">✔</span>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">Want a sustainable creative life — not a content treadmill</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40">
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-16 text-center leading-[1.2]">
          What makes this different
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.15em]">No feeds</h3>
            <h3 className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.15em]">No growth hacks</h3>
            <h3 className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-[0.15em]">No "engagement strategies"</h3>
          </div>
          <div className="space-y-6">
            <p className="text-xl font-semibold text-[#0a0a0a] leading-[1.6]">
              Just:<br />
              <span className="text-[#4a4a4a] font-normal">Creator → Patron → Relationship → Sustainability</span>
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-white p-12 md:p-20 rounded-2xl border border-[#e5e7eb]">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-8 leading-[1.3]">
              A note from our founder
            </h2>
            <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7] mb-8">
              This platform was built on one belief:
            </p>
            <p className="text-xl font-semibold text-[#0a0a0a] mb-10 leading-[1.6]">
              People don't heal, create, or survive alone.<br />
              They do it inside systems that hold them.
            </p>
            <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7] mb-10">
              We built this to help creators build those systems — economically and culturally.
            </p>
            <p className="text-base text-[#6b7280] font-medium">
              — Mara Elion, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40">
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-16 text-center leading-[1.2]">
          Creators using this platform are:
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-10 bg-[#f9fafb] rounded-2xl border border-[#e5e7eb] hover-lift hover:bg-white hover:shadow-lg transition-all duration-300">
            <p className="text-lg font-semibold text-[#0a0a0a] leading-[1.6]">Replacing launch income with recurring support</p>
          </div>
          <div className="text-center p-10 bg-[#f9fafb] rounded-2xl border border-[#e5e7eb] hover-lift hover:bg-white hover:shadow-lg transition-all duration-300">
            <p className="text-lg font-semibold text-[#0a0a0a] leading-[1.6]">Working fewer hours for more stable revenue</p>
          </div>
          <div className="text-center p-10 bg-[#f9fafb] rounded-2xl border border-[#e5e7eb] hover-lift hover:bg-white hover:shadow-lg transition-all duration-300">
            <p className="text-lg font-semibold text-[#0a0a0a] leading-[1.6]">Building communities that stay</p>
          </div>
        </div>
        <p className="text-center text-sm text-[#9ca3af] font-medium mt-12">(Insert case studies later)</p>
      </section>

      {/* Objection Handling */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-white p-12 md:p-20 rounded-2xl border border-[#e5e7eb]">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-10 text-center leading-[1.3]">
              "Will people really support me monthly?"
            </h2>
            <p className="text-xl font-semibold text-[#0a0a0a] mb-8 text-center leading-[1.6]">Yes — when:</p>
            <ul className="space-y-6 mb-16">
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2.5 flex-shrink-0"></div>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">They understand why you create</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2.5 flex-shrink-0"></div>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">They see the impact of their support</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2.5 flex-shrink-0"></div>
                <p className="text-lg text-[#4a4a4a] font-normal leading-[1.7]">They feel part of something real</p>
              </li>
            </ul>
            <p className="text-center text-lg text-[#4a4a4a] font-normal leading-[1.7]">
              Patronage isn't new.<br />
              We just rebuilt it for the internet.
            </p>
          </div>
        </div>
      </section>

      {/* Final Value Close */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40">
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#0a0a0a] mb-12 text-center leading-[1.2]">
          You don't need millions of followers
        </h2>
        <div className="text-center space-y-8 mb-20">
          <p className="text-xl font-semibold text-[#0a0a0a] leading-[1.6]">You need:</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="px-8 py-5 bg-[#f9fafb] rounded-2xl border border-[#e5e7eb]">
              <p className="text-lg font-bold text-[#0a0a0a] leading-[1.3]">The right 100</p>
            </div>
            <span className="text-[#9ca3af] font-bold">→</span>
            <div className="px-8 py-5 bg-[#f9fafb] rounded-2xl border border-[#e5e7eb]">
              <p className="text-lg font-bold text-[#0a0a0a] leading-[1.3]">Then the right 500</p>
            </div>
            <span className="text-[#9ca3af] font-bold">→</span>
            <div className="px-8 py-5 bg-[#f9fafb] rounded-2xl border border-[#e5e7eb]">
              <p className="text-lg font-bold text-[#0a0a0a] leading-[1.3]">Then the right 1,000</p>
            </div>
          </div>
          <p className="text-xl font-semibold text-[#0a0a0a] mt-12 leading-[1.6]">
            People who want you to keep creating.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a0a0a] py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white mb-8 leading-[1.2]">
            Build the community that sustains you
          </h2>
          <p className="text-xl text-[#9ca3af] font-normal mb-12 leading-[1.7]">
            Start your patron community today.
          </p>
          <button className="bg-white text-[#0a0a0a] px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#f9fafb] transition-subtle shadow-xl">
            Create your patron space
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 signature-gradient rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-[#0a0a0a]">Patron<span className="text-[#6b7280]">OS</span></span>
          </div>
          <p className="text-sm text-[#6b7280] font-normal">
            Making creative lives financially sustainable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
