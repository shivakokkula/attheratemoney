import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, BarChart3, Car, Home, Briefcase,
  ShieldCheck, Clock, ThumbsUp, DollarSign, Calculator,
  ArrowRight, CheckCircle2, Phone, Mail, MapPin, Wrench,
  Percent
} from 'lucide-react';

const BrandLogo = ({ className = "" }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <div className="flex items-baseline space-x-1">
      <span className="text-xl md:text-2xl font-serif text-[#0C1839] font-bold tracking-wider">AT THE RATE</span>
      <span className="text-2xl md:text-3xl font-serif text-[#C99E2A] italic leading-none">@</span>
      <span className="text-xl md:text-2xl font-serif text-[#0C1839] font-bold tracking-wider">MONEY</span>
    </div>
    <div className="flex items-center space-x-2 mt-1">
      <div className="h-[1px] bg-[#C99E2A] flex-grow"></div>
      <span className="text-[8px] md:text-[10px] tracking-[0.2em] text-[#0C1839] font-semibold uppercase">Business Loan | Asset Loan</span>
      <div className="h-[1px] bg-[#C99E2A] flex-grow"></div>
    </div>
  </div>
);

const BrandLogoLight = ({ className = "" }) => (
  <div className={`flex flex-col justify-center ${className}`}>
    <div className="flex items-baseline space-x-1">
      <span className="text-xl md:text-2xl font-serif text-white font-bold tracking-wider">AT THE RATE</span>
      <span className="text-2xl md:text-3xl font-serif text-[#C99E2A] italic leading-none">@</span>
      <span className="text-xl md:text-2xl font-serif text-white font-bold tracking-wider">MONEY</span>
    </div>
    <div className="flex items-center space-x-2 mt-1">
      <div className="h-[1px] bg-[#C99E2A] flex-grow"></div>
      <span className="text-[8px] md:text-[10px] tracking-[0.2em] text-slate-300 font-semibold uppercase">Business Loan | Asset Loan</span>
      <div className="h-[1px] bg-[#C99E2A] flex-grow"></div>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Business Loans",
      desc: "Empower your business growth with our tailored funding solutions, designed for small to medium enterprises to scale efficiently.",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: "Asset Finance",
      desc: "Acquire the vehicles and equipment your business needs to operate without disrupting your vital cash flow.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Car Finance",
      desc: "Personalised car finance solutions for everyday people. We help you find the perfect loan for your next new or used vehicle.",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Home Loans",
      desc: "Whether it's your first home, an investment property, or you're looking to refinance, we secure the ideal mortgage structure.",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "Equipment Finance",
      desc: "Seamless financing for the heavy machinery, technology, and specialized tools you need to operate effectively.",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Personal Loans",
      desc: "Flexible options for home renovations, travel, medical expenses, or any other personal milestone in your life.",
      icon: <DollarSign className="w-8 h-8" />,
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-[#C99E2A] selection:text-[#0C1839]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="flex-shrink-0">
              <BrandLogo />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-[#C99E2A] transition-colors">Services</a>
              <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-[#C99E2A] transition-colors">About Us</a>
              <a href="#process" className="text-sm font-semibold text-slate-700 hover:text-[#C99E2A] transition-colors">How It Works</a>
              <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-[#C99E2A] transition-colors">Contact</a>
              <button className="bg-[#0C1839] hover:bg-[#152754] text-white px-6 py-2.5 rounded text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#0C1839] hover:text-[#C99E2A] transition-colors"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col space-y-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#C99E2A] rounded-md">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#C99E2A] rounded-md">About Us</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#C99E2A] rounded-md">How It Works</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#C99E2A] rounded-md">Contact</a>
            <button className="w-full bg-[#0C1839] text-white px-6 py-3 rounded text-base font-semibold text-center mt-4">
              Get an Instant Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0C1839]">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#C99E2A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C99E2A]/20 text-[#C99E2A] text-sm font-semibold mb-6 border border-[#C99E2A]/30">
                <span className="flex h-2 w-2 rounded-full bg-[#C99E2A] mr-2"></span>
                Fast, Flexible Finance Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Empowering Your <br />
                <span className="text-[#C99E2A]">Business & Asset</span> Goals.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                We navigate the complex Australian lending market to secure the most competitive rates and flexible terms tailored specifically for your unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#C99E2A] hover:bg-[#b58d24] text-[#0C1839] px-8 py-4 rounded font-bold text-lg transition-all shadow-[0_0_20px_rgba(201,158,42,0.3)] hover:shadow-[0_0_25px_rgba(201,158,42,0.5)] flex justify-center items-center">
                  Apply Now <ChevronRight className="w-5 h-5 ml-1" />
                </button>
                <button className="bg-transparent border border-slate-500 hover:border-white text-white px-8 py-4 rounded font-semibold text-lg transition-all flex justify-center items-center">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C99E2A]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Loan Calculator</p>
                    <h3 className="text-2xl font-bold text-[#0C1839]">Estimate Repayments</h3>
                  </div>
                  <div className="bg-[#0C1839]/5 p-3 rounded-full">
                    <Calculator className="w-6 h-6 text-[#C99E2A]" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Loan Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-slate-400 font-semibold">$</span>
                      <input type="text" disabled value="50,000" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 pl-8 pr-4 text-slate-700 font-semibold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term</label>
                    <input type="text" disabled value="5 Years" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-slate-700 font-semibold" />
                  </div>
                  <button className="w-full bg-[#0C1839] text-white py-4 rounded-lg font-bold hover:bg-[#152754] transition-colors mt-2">
                    Calculate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
            <div className="px-4">
              <p className="text-3xl font-bold text-[#0C1839] mb-1">60+</p>
              <p className="text-sm font-medium text-slate-500">Lender Panel</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-[#0C1839] mb-1">100%</p>
              <p className="text-sm font-medium text-slate-500">Online & Paperless</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-[#0C1839] mb-1">24/7</p>
              <p className="text-sm font-medium text-slate-500">Application Access</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold text-[#0C1839] mb-1">AUS</p>
              <p className="text-sm font-medium text-slate-500">Nationwide Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#C99E2A] font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0C1839] mb-6">Comprehensive Finance Solutions</h3>
            <p className="text-lg text-slate-600">
              We provide tailored financial solutions for individuals and businesses. Whether you're purchasing a fleet of vehicles, a new home, or funding a personal dream, we have you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 flex flex-col h-full group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-lg bg-[#C99E2A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C99E2A] transition-colors duration-300">
                  <div className="text-[#C99E2A] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#0C1839] mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-[#0C1839] font-bold group-hover:text-[#C99E2A] transition-colors">
                  Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#C99E2A] font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0C1839] mb-6">
                Your Interest Is Our First Priority
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Unlike traditional banks, we work exclusively for you. We are not owned by any lenders, which means our advice is 100% unbiased. Our primary objective is to collaborate with you to secure the most competitive finance rate available.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-[#C99E2A]" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-[#0C1839]">Special Rates Access</h5>
                    <p className="text-slate-600 mt-1">We work with a number of lenders you cannot apply to directly, meaning our rates are often significantly lower than standard bank offerings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-[#C99E2A]" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-[#0C1839]">Paperless & Online</h5>
                    <p className="text-slate-600 mt-1">Experience a seamless application process. We utilize cutting-edge AI and digital infrastructure for a fast, completely online experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ThumbsUp className="w-6 h-6 text-[#C99E2A]" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-[#0C1839]">Tailored Solutions</h5>
                    <p className="text-slate-600 mt-1">Whether you have a pristine borrowing record or need a second opportunity, we are devoted to identifying the ideal loan structure for your circumstances.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0C1839] rounded-2xl overflow-hidden relative shadow-2xl">
                {/* Decorative Elements replacing an image to ensure it works beautifully without assets */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C1839] to-[#1a3375] opacity-90"></div>
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#C99E2A] rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#C99E2A] rounded-full blur-3xl opacity-20"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-8 border-white/10 m-6 rounded-xl">
                  <Percent className="w-20 h-20 text-[#C99E2A] mb-6 opacity-80" />
                  <h4 className="text-3xl font-bold text-white mb-4">Securing Your Future</h4>
                  <p className="text-slate-300 text-lg">We've helped thousands across Australia secure the right financial solutions to grow their wealth and businesses.</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:flex items-center space-x-4">
                <div className="bg-[#C99E2A]/10 p-4 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-[#C99E2A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Approval Rate</p>
                  <p className="text-2xl font-bold text-[#0C1839]">Industry Leading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-28 bg-[#0C1839] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#C99E2A] font-bold tracking-widest uppercase text-sm mb-3">Simple Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">How To Get Started</h3>
            <p className="text-lg text-slate-300">
              We've refined our application process to ensure it's as fast and stress-free as possible. Get your finance sorted in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-[#C99E2A]/50 to-transparent"></div>

            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-[#1a3375] rounded-full flex items-center justify-center border-4 border-[#0C1839] shadow-xl relative z-10 mb-6">
                <span className="text-3xl font-bold text-[#C99E2A]">1</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Instant Quote</h4>
              <p className="text-slate-400">Fill out our simple online form to get a complimentary quote without any obligation or upfront credit hit.</p>
            </div>

            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-[#1a3375] rounded-full flex items-center justify-center border-4 border-[#0C1839] shadow-xl relative z-10 mb-6">
                <span className="text-3xl font-bold text-[#C99E2A]">2</span>
              </div>
              <h4 className="text-xl font-bold mb-3">We Compare</h4>
              <p className="text-slate-400">Our brokers analyze your unique situation against our panel of 60+ lenders to secure the lowest possible rate.</p>
            </div>

            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-[#C99E2A] rounded-full flex items-center justify-center border-4 border-[#0C1839] shadow-xl relative z-10 mb-6">
                <span className="text-3xl font-bold text-[#0C1839]">3</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Get Approved</h4>
              <p className="text-slate-400">Once you select the best option, we handle the paperwork to ensure fast approval and quick settlement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C99E2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#0C1839"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0C1839] mb-6">Ready to secure your finance?</h2>
          <p className="text-xl text-[#0C1839]/80 mb-10 font-medium">
            Join thousands of Australians who have trusted At The Rate @ Money to find their perfect financial solution.
          </p>
          <button className="bg-[#0C1839] hover:bg-[#152754] text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center">
            Apply Now <ArrowRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#081026] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <BrandLogoLight className="mb-6" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A dedicated team of asset and mortgage finance brokers, committed to delivering exceptional service and convenient financial solutions.
              </p>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C99E2A] hover:text-[#0C1839] transition-colors">
                  <span className="font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C99E2A] hover:text-[#0C1839] transition-colors">
                  <span className="font-bold">f</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Business Loans</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Asset Finance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Car Finance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Home Loans</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Equipment Finance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Calculators & Tools</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-slate-400 hover:text-[#C99E2A] text-sm transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#C99E2A] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Serving clients Nationwide across Australia</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#C99E2A] mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">1800 000 000</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[#C99E2A] mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">info@attheratemoney.com.au</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} AT THE RATE @ MONEY. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for secure and tailored financial solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}