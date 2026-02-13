import React from 'react';

interface LandingPageProps {
  onNavigateToDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToDashboard }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Dashboard Button */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 signature-gradient rounded-[12px] flex items-center justify-center text-white shadow-xl shadow-teal-500/10">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Patron<span className="text-slate-400">OS</span></span>
          </div>
          <button
            onClick={onNavigateToDashboard}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Dashboard
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
          Predictable Income for Creators<br />
          <span className="signature-text-gradient">Who Refuse to Be Disposable</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
          Turn your most aligned supporters into reliable monthly patron income — without algorithms, burnout, or constant launching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 w-full sm:w-auto">
            Start Your Patron Community
          </button>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all w-full sm:w-auto">
            See How It Works
          </button>
        </div>
      </section>

      {/* Trust / Positioning Strip */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-center text-sm md:text-base text-slate-700 font-medium leading-relaxed">
            <span className="font-semibold text-slate-900">Built by people who believe:</span><br className="hidden md:block" />
            Creativity is essential infrastructure. Community is economic stability. Nothing that holds life, story, or effort should be disposable.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8 text-center">
          The Creator Economy Is Loud — But Not Stable
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">You're told to:</h3>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Post more</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Launch more</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Be everywhere</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Perform constantly</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">And still:</h3>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Income fluctuates</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Algorithms change</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Audiences feel shallow</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-slate-400 mt-1">→</span>
                <span>Burnout becomes normal</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-slate-900">
            You don't need more attention.<br />
            <span className="text-slate-600 font-medium">You need reliable support from people who actually care.</span>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 text-center">
            A Different Model: Patron Income
          </h2>
          <p className="text-xl text-slate-600 font-medium text-center mb-16 max-w-3xl mx-auto">
            Instead of chasing thousands of casual followers…
          </p>
          <div className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Build a smaller circle of people who:
            </h3>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 font-medium">Believe in your work</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 font-medium">Want you to keep creating</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 font-medium">Support you monthly</p>
              </li>
            </ul>
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900 mb-2">Predictable income.</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900 mb-2">Deeper relationships.</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900 mb-2">Work that actually matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-16 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Create Your Patron Space</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Set your tiers. Share your mission. Invite people into deeper connection.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Your Supporters Become Patrons</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Simple monthly support. Clear value. Real relationship.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Income Stabilises → Creation Deepens</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Less hustle. More focus. Better work. Stronger community.
            </p>
          </div>
        </div>
      </section>

      {/* For Creators (ICP) */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8 text-center">
            This is for you if you:
          </h2>
          <div className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-green-500 mt-0.5">✔</span>
                <p className="text-lg text-slate-700 font-medium">Care more about depth than scale</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-green-500 mt-0.5">✔</span>
                <p className="text-lg text-slate-700 font-medium">Are tired of algorithm pressure</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-green-500 mt-0.5">✔</span>
                <p className="text-lg text-slate-700 font-medium">Want fewer, more committed supporters</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-green-500 mt-0.5">✔</span>
                <p className="text-lg text-slate-700 font-medium">Are building work around creativity, healing, education, or culture</p>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl text-green-500 mt-0.5">✔</span>
                <p className="text-lg text-slate-700 font-medium">Want a sustainable creative life — not a content treadmill</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-12 text-center">
          What Makes This Different
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No feeds</h3>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No growth hacks</h3>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No "engagement strategies"</h3>
          </div>
          <div className="space-y-6">
            <p className="text-xl font-semibold text-slate-900 leading-relaxed">
              Just:<br />
              <span className="text-slate-600 font-medium">Creator → Patron → Relationship → Sustainability</span>
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
              A Note From Our Founder
            </h2>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
              This platform was built on one belief:
            </p>
            <p className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
              People don't heal, create, or survive alone.<br />
              They do it inside systems that hold them.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
              We built this to help creators build those systems — economically and culturally.
            </p>
            <p className="text-base text-slate-600 font-medium">
              — Mara Elion, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-12 text-center">
          Creators using this platform are:
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-lg font-semibold text-slate-900">Replacing launch income with recurring support</p>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-lg font-semibold text-slate-900">Working fewer hours for more stable revenue</p>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-lg font-semibold text-slate-900">Building communities that stay</p>
          </div>
        </div>
        <p className="text-center text-sm text-slate-400 font-medium mt-8">(Insert case studies later)</p>
      </section>

      {/* Objection Handling */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8 text-center">
              "Will people really support me monthly?"
            </h2>
            <p className="text-xl font-semibold text-slate-900 mb-6 text-center">Yes — when:</p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 font-medium">They understand why you create</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 font-medium">They see the impact of their support</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full signature-gradient mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 font-medium">They feel part of something real</p>
              </li>
            </ul>
            <p className="text-center text-lg text-slate-600 font-medium">
              Patronage isn't new.<br />
              We just rebuilt it for the internet.
            </p>
          </div>
        </div>
      </section>

      {/* Final Value Close */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8 text-center">
          You Don't Need Millions of Followers
        </h2>
        <div className="text-center space-y-6 mb-16">
          <p className="text-xl font-semibold text-slate-900">You need:</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-lg font-bold text-slate-900">The right 100</p>
            </div>
            <span className="text-slate-400 font-bold">→</span>
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-lg font-bold text-slate-900">Then the right 500</p>
            </div>
            <span className="text-slate-400 font-bold">→</span>
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-lg font-bold text-slate-900">Then the right 1,000</p>
            </div>
          </div>
          <p className="text-xl font-semibold text-slate-900 mt-8">
            People who want you to keep creating.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Build the Community That Sustains You
          </h2>
          <p className="text-xl text-slate-300 font-medium mb-10">
            Start your patron community today.
          </p>
          <button className="bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all shadow-xl">
            Create Your Patron Space
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 signature-gradient rounded-lg flex items-center justify-center text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Patron<span className="text-slate-400">OS</span></span>
          </div>
          <p className="text-sm text-slate-400 font-medium">
            Making creative lives financially sustainable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
