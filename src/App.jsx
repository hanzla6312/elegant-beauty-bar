import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Camera, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  Heart, 
  Droplets, 
  Zap, 
  ShieldCheck, 
  Sun, 
  Smile, 
  Flame, 
  Waves, 
  Dumbbell, 
  Sparkle,
  Star,
  Check,
  Menu,
  User,
  Mail,
  Info
} from 'lucide-react';

// Brand Logo Component recreating the exact circular badge style from screenshots
const BrandLogo = ({ className = "h-12 w-12", textClassName = "text-xl" }) => (
  <div className="flex items-center gap-3">
    <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-tr from-[#E8D5C8] via-[#FDF8F5] to-[#D4AF37]/30 p-1 shadow-sm border border-[#C5A059]/40 shrink-0 ${className}`}>
      <div className="w-full h-full rounded-full bg-[#FDF8F5] border border-[#C5A059]/30 flex flex-col items-center justify-center text-center p-1">
        <span className="font-serif text-[10px] tracking-widest text-[#3A2312] uppercase font-semibold leading-none">Elegant</span>
        <span className="text-[6px] tracking-wider text-[#8C6D58] uppercase mt-[1px]">Beauty Bar</span>
      </div>
    </div>
    <div className="flex flex-col">
      <span className={`font-serif font-bold tracking-wider text-[#3A2312] leading-tight ${textClassName}`}>
        ELEGANT
      </span>
      <span className="text-[10px] tracking-[0.25em] text-[#8C6D58] uppercase font-medium">
        BEAUTY BAR LTD
      </span>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('aftercare');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    notes: ''
  });

  // Services derived directly from your image list + additional classic options
  const advancedTreatments = [
    {
      id: 'hydrafacial',
      name: 'HydraFacial',
      icon: Droplets,
      badge: 'Best Seller',
      description: 'Deep cleansing, exfoliation, and intense hydration with nourishing serums for an immediate radiant glow.',
      duration: '45 mins',
      price: '£85'
    },
    {
      id: 'microneedling',
      name: 'Microneedling',
      icon: Sparkles,
      badge: 'Skin Renewal',
      description: 'Stimulates natural collagen production to firm skin, diminish fine lines, and repair acne scars.',
      duration: '60 mins',
      price: '£110'
    },
    {
      id: 'rf-therapy',
      name: 'Radio Frequency',
      icon: Zap,
      badge: 'Lifting & Firming',
      description: 'Non-invasive thermal therapy targeting deeper dermal layers for tight, contoured, and youthful skin.',
      duration: '50 mins',
      price: '£95'
    },
    {
      id: 'diamond-derm',
      name: 'Diamond Dermabrasion',
      icon: Sparkle,
      badge: 'Exfoliation',
      description: 'Precision crystal-free resurfacing that gently buff away dead skin cells, polishing skin surface.',
      duration: '45 mins',
      price: '£75'
    },
    {
      id: 'sonic-therapy',
      name: 'Sonic Sound Therapy',
      icon: Waves,
      badge: 'Calming Boost',
      description: 'Ultrasonic wave technology enhancing cellular absorption of premium skincare nutrition.',
      duration: '40 mins',
      price: '£70'
    },
    {
      id: 'light-therapy',
      name: 'LED Light Therapy',
      icon: Sun,
      badge: 'Targeted Care',
      description: 'Custom light wavelengths targeting acne bacteria, reducing inflammation, and revitalizing tone.',
      duration: '30 mins',
      price: '£50'
    },
    {
      id: 'chemical-peels',
      name: 'Chemical Peels',
      icon: ShieldCheck,
      badge: 'Deep Rejuvenation',
      description: 'Customized clinical solution that accelerates skin cell turnover for unmatched clarity and smooth texture.',
      duration: '45 mins',
      price: '£80'
    }
  ];

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName || 'HydraFacial');
    setBookingSubmitted(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds on success
      setTimeout(() => {
        setIsBookingOpen(false);
        setBookingSubmitted(false);
      }, 2500);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#3A2312] font-sans selection:bg-[#E8D5C8] selection:text-[#3A2312]">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#3A2312] text-[#FDF8F5] text-xs py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
        <span>Exciting New Advanced Facial & Skin Rejuvenation Treatments Available Now!</span>
        <span className="hidden md:inline-block text-[#C5A059]">•</span>
        <button 
          onClick={() => handleOpenBooking()}
          className="hidden md:inline underline hover:text-[#C5A059] transition-colors font-semibold"
        >
          Book Your Glow Today
        </button>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#FDF8F5]/90 backdrop-blur-md border-b border-[#E8D5C8]/60 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="hover:opacity-95 transition-opacity">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#treatments" className="hover:text-[#C5A059] transition-colors">New Treatments</a>
            <a href="#aftercare" className="hover:text-[#C5A059] transition-colors">Aftercare & Tips</a>
            <a href="#benefits" className="hover:text-[#C5A059] transition-colors">Why Choose Us</a>
            <a href="#reviews" className="hover:text-[#C5A059] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://www.instagram.com/elegant_beauty_bar_ltd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#E8D5C8] hover:border-[#C5A059] hover:bg-[#F7ECE1] transition-all text-[#3A2312]"
              aria-label="Instagram"
            >
              <Camera className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleOpenBooking()}
              className="bg-[#3A2312] text-[#FDF8F5] hover:bg-[#52351E] px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-[#C5A059]/30 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#3A2312] hover:text-[#C5A059] focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FDF8F5] border-b border-[#E8D5C8] px-4 pt-2 pb-6 space-y-3 font-medium text-sm">
            <a 
              href="#treatments" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 border-b border-[#F7ECE1]"
            >
              New Treatments
            </a>
            <a 
              href="#aftercare" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 border-b border-[#F7ECE1]"
            >
              Aftercare & Tips
            </a>
            <a 
              href="#benefits" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 border-b border-[#F7ECE1]"
            >
              Why Choose Us
            </a>
            <a 
              href="#reviews" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 border-b border-[#F7ECE1]"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 border-b border-[#F7ECE1]"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleOpenBooking();
                }}
                className="w-full bg-[#3A2312] text-[#FDF8F5] py-3 rounded-full font-medium flex justify-center items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-[#FDF8F5] via-[#F7ECE1]/60 to-[#FDF8F5]">
        {/* Soft background luxury glow details */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8D5C8]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4E8DF] border border-[#C5A059]/30 text-xs font-semibold tracking-wider text-[#8C6D58] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Advanced Skincare • Professional Care
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A2312] leading-[1.15] font-normal tracking-tight">
                Enhance Your <span className="italic font-serif font-light text-[#8C6D58]">Natural Glow</span> & Confidence.
              </h1>

              <p className="text-base sm:text-lg text-[#5A4232] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <strong className="font-semibold text-[#3A2312]">Elegant Beauty Bar Ltd</strong>. Experience tailored advanced facials, precision skin rejuvenation, and luxury beauty care designed to bring out your best skin.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handleOpenBooking()}
                  className="w-full sm:w-auto bg-[#3A2312] hover:bg-[#52351E] text-[#FDF8F5] px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 border border-[#C5A059]/40 group"
                >
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                  <span>Book Your Treatment</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#treatments"
                  className="w-full sm:w-auto bg-white/80 hover:bg-white text-[#3A2312] border border-[#E8D5C8] hover:border-[#C5A059] px-8 py-4 rounded-full font-medium transition-all text-center shadow-sm"
                >
                  Explore New Treatments
                </a>
              </div>

              {/* Highlights row */}
              <div className="pt-8 border-t border-[#E8D5C8]/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2312]">100%</p>
                  <p className="text-xs text-[#8C6D58] uppercase tracking-wider mt-1">Tailored Care</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2312]">7+</p>
                  <p className="text-xs text-[#8C6D58] uppercase tracking-wider mt-1">New Facial Therapies</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2312]">5★</p>
                  <p className="text-xs text-[#8C6D58] uppercase tracking-wider mt-1">Client Satisfaction</p>
                </div>
              </div>

            </div>

            {/* Hero Right Column - Image Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border frame */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C5A059]/30 to-[#E8D5C8] transform rotate-2 scale-102" />
                
                <div className="relative bg-[#FDF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8D5C8]">
                  <div className="flex justify-center mb-6">
                    <BrandLogo className="h-16 w-16" textClassName="text-2xl" />
                  </div>

                  <div className="bg-[#F7ECE1]/60 rounded-2xl p-5 border border-[#E8D5C8]/60 space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase">Now Offering</p>
                      <h3 className="font-serif text-xl text-[#3A2312] mt-1">Advanced Facial Rejuvenation</h3>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#5A4232]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>HydraFacial & Deep Hydration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>Microneedling & Collagen Boost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>Radio Frequency Tightening</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>Diamond Dermabrasion & Peels</span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <button 
                        onClick={() => handleOpenBooking()}
                        className="w-full bg-[#3A2312] text-[#FDF8F5] py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#52351E] transition-colors flex items-center justify-center gap-1.5"
                      >
                        Reserve Your Slot
                      </button>
                    </div>
                  </div>

                  <p className="text-center font-serif italic text-xs text-[#8C6D58] mt-4">
                    "Your Beauty, Our Passion."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE BRAND PILLARS / BENEFITS SECTION */}
      <section id="benefits" className="py-16 bg-[#FDF8F5] border-y border-[#E8D5C8]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase">The Elegant Promise</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2312] mt-2">Real Results, Exceptional Experience</h2>
            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#F7ECE1]/40 rounded-2xl p-8 text-center border border-[#E8D5C8]/80 hover:border-[#C5A059] transition-all hover:-translate-y-1 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#FDF8F5] border border-[#C5A059]/40 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#3A2312] mb-3">ENHANCE</h3>
              <p className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase mb-2">YOUR NATURAL GLOW</p>
              <p className="text-sm text-[#5A4232] leading-relaxed">
                Customized non-invasive treatments that activate your skin's inner radiance and leave you luminous.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F7ECE1]/40 rounded-2xl p-8 text-center border border-[#E8D5C8]/80 hover:border-[#C5A059] transition-all hover:-translate-y-1 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#FDF8F5] border border-[#C5A059]/40 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <Smile className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#3A2312] mb-3">IMPROVE</h3>
              <p className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase mb-2">SKIN TEXTURE</p>
              <p className="text-sm text-[#5A4232] leading-relaxed">
                Target uneven surfaces, fine lines, and blemishes with precision exfoliation and deep tissue renewal.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F7ECE1]/40 rounded-2xl p-8 text-center border border-[#E8D5C8]/80 hover:border-[#C5A059] transition-all hover:-translate-y-1 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#FDF8F5] border border-[#C5A059]/40 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <Sun className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#3A2312] mb-3">REFRESH</h3>
              <p className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase mb-2">YOUR COMPLEXION</p>
              <p className="text-sm text-[#5A4232] leading-relaxed">
                Rejuvenate tired skin with restorative therapies that nourish, hydrate, and maintain flawless clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ADVANCED TREATMENTS SECTION */}
      <section id="treatments" className="py-20 bg-gradient-to-b from-[#FDF8F5] via-[#F7ECE1]/30 to-[#FDF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase">Exciting New Additions</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2312] mt-2">Our Advanced Facial & Skin Treatments</h2>
            <p className="text-sm sm:text-base text-[#5A4232] mt-4">
              We are delighted to announce that a range of advanced facial and skin rejuvenation treatments are now available at the salon.
            </p>
            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTreatments.map((treatment) => {
              const IconComponent = treatment.icon;
              return (
                <div 
                  key={treatment.id}
                  className="bg-white rounded-2xl p-6 border border-[#E8D5C8] shadow-sm hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7ECE1] flex items-center justify-center text-[#3A2312] group-hover:bg-[#3A2312] group-hover:text-[#FDF8F5] transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider text-[#8C6D58] bg-[#F7ECE1]/80 px-3 py-1 rounded-full border border-[#E8D5C8]">
                        {treatment.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#3A2312] font-semibold mb-2">{treatment.name}</h3>
                    <p className="text-xs text-[#5A4232] leading-relaxed mb-6">{treatment.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#F7ECE1] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#8C6D58] block">{treatment.duration}</span>
                      <span className="font-serif font-bold text-lg text-[#3A2312]">{treatment.price}</span>
                    </div>

                    <button
                      onClick={() => handleOpenBooking(treatment.name)}
                      className="bg-[#F7ECE1] hover:bg-[#3A2312] hover:text-[#FDF8F5] text-[#3A2312] px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <span>Book</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-[#3A2312] rounded-3xl p-8 sm:p-10 text-[#FDF8F5] text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDF8F5]">Unsure Which Facial Suite Fits You Best?</h3>
              <p className="text-xs sm:text-sm text-[#E8D5C8] leading-relaxed">
                Whether you're looking to refresh your complexion, improve skin texture or enhance your natural glow, our expert team provides personalized skin consultations before every session.
              </p>
              <button
                onClick={() => handleOpenBooking('Custom Consultation')}
                className="mt-4 bg-[#C5A059] hover:bg-[#b08d47] text-[#3A2312] font-semibold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* AFTERCARE & TIPS INTERACTIVE SECTION */}
      <section id="aftercare" className="py-20 bg-[#FDF8F5] border-t border-[#E8D5C8]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase">Beauty Guide & Care</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2312] mt-2">Aftercare & Return Maintenance</h2>
            <p className="text-xs sm:text-sm text-[#5A4232] mt-2">
              Keep your skin smooth, healthy, and irritation-free with our official therapist guide.
            </p>
            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
          </div>

          {/* Interactive Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#F7ECE1] p-1.5 rounded-full border border-[#E8D5C8] inline-flex">
              <button
                onClick={() => setActiveTab('aftercare')}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  activeTab === 'aftercare'
                    ? 'bg-[#3A2312] text-[#FDF8F5] shadow-md'
                    : 'text-[#8C6D58] hover:text-[#3A2312]'
                }`}
              >
                Waxing Aftercare
              </button>
              <button
                onClick={() => setActiveTab('returnGuide')}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  activeTab === 'returnGuide'
                    ? 'bg-[#3A2312] text-[#FDF8F5] shadow-md'
                    : 'text-[#8C6D58] hover:text-[#3A2312]'
                }`}
              >
                Return Schedule Guide
              </button>
            </div>
          </div>

          {/* TAB 1: AFTERCARE */}
          {activeTab === 'aftercare' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8D5C8] shadow-lg animate-fadeIn">
              <div className="text-center mb-8">
                <span className="font-serif italic text-lg text-[#8C6D58]">For the next 24 hours, please avoid:</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FDF8F5] border border-[#F7ECE1]">
                  <div className="w-12 h-12 rounded-full bg-[#F7ECE1] border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#3A2312]">
                    <Sparkles className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#3A2312]">Deodorant, Perfume & Makeup</h4>
                    <p className="text-xs text-[#8C6D58] mt-0.5">Allows pores to breathe and prevents blockage</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FDF8F5] border border-[#F7ECE1]">
                  <div className="w-12 h-12 rounded-full bg-[#F7ECE1] border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#3A2312]">
                    <Sun className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#3A2312]">Self-Tanning Products</h4>
                    <p className="text-xs text-[#8C6D58] mt-0.5">Prevents uneven discoloration on freshly waxed skin</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FDF8F5] border border-[#F7ECE1]">
                  <div className="w-12 h-12 rounded-full bg-[#F7ECE1] border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#3A2312]">
                    <Dumbbell className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#3A2312]">Exercise & Swimming</h4>
                    <p className="text-xs text-[#8C6D58] mt-0.5">Avoid friction, sweat, and pool chlorine irritation</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FDF8F5] border border-[#F7ECE1]">
                  <div className="w-12 h-12 rounded-full bg-[#F7ECE1] border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#3A2312]">
                    <Flame className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#3A2312]">High Heat (Saunas / Hot Baths)</h4>
                    <p className="text-xs text-[#8C6D58] mt-0.5">Keep temperature cool to calm sensitive skin</p>
                  </div>
                </div>
              </div>

              {/* PRO TIP CALLOUT */}
              <div className="bg-[#F7ECE1] rounded-2xl p-6 border border-[#C5A059]/40 text-center">
                <span className="font-serif italic font-semibold text-[#3A2312] text-lg block mb-1">
                  — Pro-Tip for Ingrowns —
                </span>
                <p className="text-xs sm:text-sm text-[#5A4232] font-medium">
                  ✨ Wait 3 days after your wax, then exfoliate every 4–7 days.
                </p>
                <p className="text-xs text-[#8C6D58] mt-2">
                  Follow these tips to keep your skin smooth, healthy, and irritation-free!
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: RETURN GUIDE */}
          {activeTab === 'returnGuide' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8D5C8] shadow-lg animate-fadeIn">
              <div className="text-center mb-8 max-w-xl mx-auto">
                <h3 className="font-serif text-2xl text-[#3A2312]">Waxing Return Schedule</h3>
                <p className="text-xs text-[#8C6D58] mt-2">
                  For optimal, long-lasting results, we recommend maintaining a consistent treatment schedule:
                </p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto mb-8">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-[#FDF8F5] border border-[#E8D5C8]">
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#3A2312]">Facial Waxing</h4>
                    <p className="text-xs text-[#8C6D58]">Lip, chin, eyebrows & full face</p>
                  </div>
                  <span className="text-xs font-bold text-[#3A2312] bg-[#F7ECE1] px-4 py-2 rounded-full border border-[#C5A059]/40">
                    Every 2–4 weeks
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-2xl bg-[#FDF8F5] border border-[#E8D5C8]">
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#3A2312]">Arms, Underarms & Bikini</h4>
                    <p className="text-xs text-[#8C6D58]">Sensitive zones & precision touchups</p>
                  </div>
                  <span className="text-xs font-bold text-[#3A2312] bg-[#F7ECE1] px-4 py-2 rounded-full border border-[#C5A059]/40">
                    Every 4–6 weeks
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-2xl bg-[#FDF8F5] border border-[#E8D5C8]">
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#3A2312]">Full & Half Legs</h4>
                    <p className="text-xs text-[#8C6D58]">Smooth leg maintenance cycle</p>
                  </div>
                  <span className="text-xs font-bold text-[#3A2312] bg-[#F7ECE1] px-4 py-2 rounded-full border border-[#C5A059]/40">
                    Every 4–6 weeks
                  </span>
                </div>
              </div>

              <p className="text-center text-xs text-[#8C6D58] italic max-w-lg mx-auto">
                Consistent maintenance supports the natural hair growth cycle, promoting finer regrowth and smoother skin over time.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* TESTIMONIALS / CLIENT FEEDBACK */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-[#FDF8F5] to-[#F7ECE1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#8C6D58] uppercase">Client Love</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A2312] mt-2">What Our Clients Say</h2>
            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The HydraFacial transformed my skin before my wedding! So professional and welcoming environment.",
                author: "Sophie M.",
                service: "HydraFacial Client",
                rating: 5
              },
              {
                quote: "Extremely neat, gentle waxing service and amazing skincare advice. The return guide tips really helped!",
                author: "Elena R.",
                service: "Regular Waxing Client",
                rating: 5
              },
              {
                quote: "Had Radio Frequency and Microneedling sessions here. My skin texture has never felt so firm and fresh.",
                author: "Amara K.",
                service: "Skin Rejuvenation",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E8D5C8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#C5A059] mb-4">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A4232] italic leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F7ECE1]">
                  <p className="font-serif font-semibold text-sm text-[#3A2312]">{review.author}</p>
                  <p className="text-[11px] text-[#8C6D58]">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-[#3A2312] text-[#FDF8F5] pt-16 pb-12 border-t border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#52351E]">
            
            {/* Col 1: Brand */}
            <div className="space-y-4">
              <BrandLogo textClassName="text-xl text-[#FDF8F5]" />
              <p className="text-xs text-[#E8D5C8] leading-relaxed pt-2">
                Advanced skincare and professional beauty treatments delivering real, visible skin results.
              </p>
              <div className="pt-2">
                <a 
                  href="https://www.instagram.com/elegant_beauty_bar_ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#C5A059] hover:underline"
                >
                  <Camera className="w-4 h-4" />
                  <span>@elegant_beauty_bar_ltd</span>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-serif text-base text-[#FDF8F5] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs text-[#E8D5C8]">
                <li><a href="#treatments" className="hover:text-[#C5A059] transition-colors">Advanced Treatments</a></li>
                <li><a href="#aftercare" className="hover:text-[#C5A059] transition-colors">Waxing Aftercare</a></li>
                <li><a href="#aftercare" className="hover:text-[#C5A059] transition-colors">Return Schedule</a></li>
                <li><a href="#benefits" className="hover:text-[#C5A059] transition-colors">Why Choose Us</a></li>
              </ul>
            </div>

            {/* Col 3: Opening Hours */}
            <div>
              <h4 className="font-serif text-base text-[#FDF8F5] mb-4">Salon Hours</h4>
              <ul className="space-y-2 text-xs text-[#E8D5C8]">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-[#FDF8F5]">9:30 AM - 6:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-[#FDF8F5]">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#C5A059]">By Appointment</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Appointments */}
            <div>
              <h4 className="font-serif text-base text-[#FDF8F5] mb-4">Bookings & Contact</h4>
              <p className="text-xs text-[#E8D5C8] mb-4">
                Ready to glow? Secure your luxury facial or beauty service with us online.
              </p>
              <button
                onClick={() => handleOpenBooking()}
                className="w-full bg-[#C5A059] hover:bg-[#b08d47] text-[#3A2312] font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Book Appointment
              </button>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89282]">
            <p>© {new Date().getFullYear()} Elegant Beauty Bar Ltd. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 font-serif italic">Your Beauty, Our Passion.</p>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FDF8F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8D5C8] shadow-2xl relative overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#8C6D58] hover:text-[#3A2312] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <span className="text-[10px] font-semibold tracking-widest text-[#8C6D58] uppercase">Appointment Request</span>
                  <h3 className="font-serif text-2xl text-[#3A2312] mt-1">Book Your Treatment</h3>
                  <p className="text-xs text-[#5A4232] mt-1">
                    Select your service and preferred date at Elegant Beauty Bar Ltd.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A2312] uppercase tracking-wider mb-1">
                      Selected Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white border border-[#E8D5C8] rounded-xl px-4 py-2.5 text-xs text-[#3A2312] focus:outline-none focus:border-[#C5A059]"
                      required
                    >
                      {advancedTreatments.map((t) => (
                        <option key={t.id} value={t.name}>{t.name} ({t.price})</option>
                      ))}
                      <option value="Waxing Service">Waxing Service</option>
                      <option value="Custom Consultation">Skin Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A2312] uppercase tracking-wider mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="w-full bg-white border border-[#E8D5C8] rounded-xl px-3 py-2.5 text-xs text-[#3A2312] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3A2312] uppercase tracking-wider mb-1">
                        Time Slot
                      </label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                        className="w-full bg-white border border-[#E8D5C8] rounded-xl px-3 py-2.5 text-xs text-[#3A2312] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option>10:00 AM</option>
                        <option>11:30 AM</option>
                        <option>01:00 PM</option>
                        <option>02:30 PM</option>
                        <option>04:00 PM</option>
                        <option>05:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3A2312] uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full bg-white border border-[#E8D5C8] rounded-xl px-4 py-2.5 text-xs text-[#3A2312] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A2312] uppercase tracking-wider mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                        className="w-full bg-white border border-[#E8D5C8] rounded-xl px-3 py-2.5 text-xs text-[#3A2312] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#3A2312] uppercase tracking-wider mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="07123 456789"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                        className="w-full bg-white border border-[#E8D5C8] rounded-xl px-3 py-2.5 text-xs text-[#3A2312] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-[#3A2312] hover:bg-[#52351E] text-[#FDF8F5] py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all border border-[#C5A059]/40"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F7ECE1] rounded-full border border-[#C5A059] flex items-center justify-center mx-auto text-[#3A2312]">
                  <Check className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-2xl text-[#3A2312]">Booking Request Received!</h3>
                <p className="text-xs text-[#5A4232] max-w-xs mx-auto">
                  Thank you, <strong className="text-[#3A2312]">{bookingData.name}</strong>. We look forward to seeing you for your <strong className="text-[#3A2312]">{selectedService}</strong> treatment.
                </p>
                <span className="inline-block text-[10px] text-[#8C6D58] bg-[#F7ECE1] px-4 py-1.5 rounded-full">
                  Confirmation sent to {bookingData.email || 'your email'}
                </span>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}