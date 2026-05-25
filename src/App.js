import React, { useState, useMemo } from 'react';
import {
  Phone, Mail, Home, Car, User, Briefcase,
  Bike, Ship, Menu, X, Truck, Caravan, Wrench,
  FileText, CheckCircle2, Sparkles, Shield, Landmark, TrendingUp, Users
} from 'lucide-react';

// Custom SVG Icons
const Twitter = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>;
const Facebook = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const Instagram = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const Youtube = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>;
const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;

// Brand Logo component with modern glass glow
const BrandLogo = ({ className = "" }) => (
  <div className={`flex flex-col justify-center cursor-pointer select-none ${className}`}>
    <div className="flex items-center space-x-1.5">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 via-teal-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
        <span className="text-white text-lg font-black tracking-tighter">@</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">MONEY</span>
        <span className="text-[7.5px] tracking-[0.55em] text-emerald-400 font-bold uppercase leading-none mt-[1px]">C A P I T A L</span>
      </div>
    </div>
  </div>
);

const clampNumber = (num, min, max) => Math.min(Math.max(num, min), max);

const formatTenure = (months) => {
  if (months < 12) return `${months} Months`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return remainingMonths === 0 ? `${years} Year${years > 1 ? 's' : ''}` : `${years} Yr ${remainingMonths} Mo`;
};

const wizardLoanTypeOptions = [
  { value: 'Home Loan', icon: Home },
  { value: 'Car Loan', icon: Car },
  { value: 'Personal Loan', icon: User },
  { value: 'Business Loan', icon: Briefcase },
  { value: 'Equipment Loan', icon: Wrench },
  { value: 'Other', icon: Landmark }
];

const wizardTenurePresets = [12, 36, 60, 120, 360];

// Email configuration system
const EMAIL_CONFIG = {
  recipientEmail: "hello@atmoney.com.au",
  senderEmail: "hello@atmoney.com.au"
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [calculatorLoanAmount, setCalculatorLoanAmount] = useState(450000);
  const [calculatorTerm, setCalculatorTerm] = useState(15);
  const [calculatorRate, setCalculatorRate] = useState(4.8);
  const [calculatorExtraPayment, setCalculatorExtraPayment] = useState(0);
  const [isCalcScheduleOpen, setIsCalcScheduleOpen] = useState(false);

  // Dynamic States for Hero Mockups
  const [creditRiskTier, setCreditRiskTier] = useState('Platinum');
  const [checklistUploadState, setChecklistUploadState] = useState({
    'Driver License': 'Empty',
    'Tax Summary': 'Empty',
    'Balance Sheet': 'Empty',
    'Asset Registry': 'Empty'
  });
  const [businessDrawdownVal, setBusinessDrawdownVal] = useState(250000);
  const [drawdownDispatched, setDrawdownDispatched] = useState(false);
  const [drawdownSpinning, setDrawdownSpinning] = useState(false);

  // Onboarding Quote Wizard State
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardAmount, setWizardAmount] = useState(150000);
  const [wizardLoanType, setWizardLoanType] = useState('Home Loan');
  const [wizardTenureMonths, setWizardTenureMonths] = useState(60);
  const [wizardPurpose, setWizardPurpose] = useState('Primary Residence');
  const [wizardPurposeNotes, setWizardPurposeNotes] = useState('');
  const [wizardEmployment, setWizardEmployment] = useState('Full-Time');
  const [wizardName, setWizardName] = useState('');
  const [wizardEmail, setWizardEmail] = useState('');
  const [wizardPhone, setWizardPhone] = useState('');
  const [wizardSuccessMsg, setWizardSuccessMsg] = useState('');

  // Broker Partner Calculator state
  const [brokerSettledVolume, setBrokerSettledVolume] = useState(2500000);


  // Pre-compiled list of products (Reinvented descriptions, fully original)
  const products = [
    { title: "Home Loan", badge: "Popular", desc: "Competitive rates and flexible terms to help you buy your dream home.", icon: <Home className="w-6 h-6 text-emerald-400" /> },
    { title: "Car Loan", badge: "Fast Approval", desc: "Fast and easy car loans to get you on the road sooner.", icon: <Car className="w-6 h-6 text-teal-400" /> },
    { title: "Personal Loan", badge: "Low Rates", desc: "Quick personal loans for holidays, weddings, or debt consolidation.", icon: <User className="w-6 h-6 text-indigo-400" /> },
    { title: "Business Loan", badge: "Up to $1M", desc: "Flexible business loans to help your company grow and succeed.", icon: <Briefcase className="w-6 h-6 text-emerald-400" /> },
    { title: "Bike Loan", badge: "Easy Apply", desc: "Quick and easy motorcycle loans to get you riding sooner.", icon: <Bike className="w-6 h-6 text-teal-400" /> },
    { title: "Boat Loan", badge: "Flexible Terms", desc: "Finance your next boat or marine vessel with tailored, hassle-free loans.", icon: <Ship className="w-6 h-6 text-indigo-400" /> },
    { title: "Truck Loan", badge: "For Business", desc: "Commercial truck and vehicle loans to keep your business moving.", icon: <Truck className="w-6 h-6 text-emerald-400" /> },
    { title: "Caravan Loan", badge: "Get Exploring", desc: "Hit the road with flexible caravan loans for your next adventure.", icon: <Caravan className="w-6 h-6 text-teal-400" /> },
    { title: "Equipment Loan", badge: "Fast Loans", desc: "Finance the tools, machinery, and equipment your business needs.", icon: <Wrench className="w-6 h-6 text-indigo-400" /> }
  ];

  // Plagiarism-free dynamic copy mapping for hero views
  const heroData = {
    'Home': {
      title: "Premium Capital Solutions. Built for Growth.",
      desc: "Get access to competitive loan rates quickly and easily. Apply online today.",
      btn: "Request Loan"
    },
    'Car Loan': {
      title: "Get Quick Car Loans. Hit the Road.",
      desc: "Fast and easy car loans to get you on the road sooner.",
      btn: "Request Loan"
    },
    'Home Loan': {
      title: "Build Your Future. Expert Mortgages.",
      desc: "Competitive mortgage rates and flexible terms to help you buy your dream home.",
      btn: "Request Loan"
    },
    'Business Loan': {
      title: "Fast Business Funding. Grow Without Limits.",
      desc: "Flexible business loans up to $1,000,000 to help your company grow.",
      btn: "Request Loan"
    },
    'All Products': {
      title: "A Complete Range of Wholesale Loans.",
      desc: "Browse our complete range of simple loan products tailored to your needs.",
      btn: ""
    },
    'Personal Loan': {
      title: "Flexible Personal Loans. Made for You.",
      desc: "Quick personal loans for holidays, weddings, home improvements, or debt consolidation.",
      btn: "Request Loan"
    },
    'Bike Loan': {
      title: "Motorcycle Loans. Ride Easy.",
      desc: "Quick and easy motorcycle loans with competitive rates to get you riding sooner.",
      btn: "Request Loan"
    },
    'Boat Loan': {
      title: "Premium Boat Loans. Set Sail.",
      desc: "Finance your next boat or marine vessel with our tailored, hassle-free loans.",
      btn: "Request Loan"
    },
    'Truck Loan': {
      title: "Commercial Truck Loans. Keep Moving.",
      desc: "Commercial truck and vehicle loans designed to keep your business moving forward.",
      btn: "Request Loan"
    },
    'Caravan Loan': {
      title: "Caravan Loans. Explore Without Limits.",
      desc: "Hit the road with flexible caravan and camper trailer loans for your next adventure.",
      btn: "Request Loan"
    },
    'Equipment Loan': {
      title: "Custom Equipment Loans. Grow Your Business.",
      desc: "Finance the tools and equipment your business needs to operate smoothly.",
      btn: "Request Loan"
    }
  };

  // Navigations Links
  const navLinks = ['Home', 'Car Loan', 'Home Loan', 'Business Loan', 'All Products'];

  // Document Upload Mockup helper
  const handleChecklistUpload = (doc) => {
    setChecklistUploadState(prev => ({ ...prev, [doc]: 'Uploading' }));
    setTimeout(() => {
      setChecklistUploadState(prev => ({ ...prev, [doc]: 'Verified' }));
    }, 1500);
  };

  // Business Drawdown trigger
  const triggerDrawdown = () => {
    setDrawdownSpinning(true);
    setTimeout(() => {
      setDrawdownSpinning(false);
      setDrawdownDispatched(true);
    }, 2000);
  };

  // Interactive Repayments math
  const calculatedRepayments = useMemo(() => {
    const principal = calculatorLoanAmount;
    const rate = calculatorRate / 100;
    const years = calculatorTerm;
    const totalPayments = years * 12;

    // Standard Amortization math
    const monthlyRate = rate / 12;
    let monthlyBase = 0;
    if (monthlyRate > 0) {
      monthlyBase = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
    } else {
      monthlyBase = principal / totalPayments;
    }

    // Offset monthly reduction from extra payment
    const monthlyInstallment = Math.max(0, monthlyBase + calculatorExtraPayment);
    const totalInterestPayable = (monthlyBase * totalPayments) - principal;
    const extraSavings = Math.max(0, Math.min(totalInterestPayable, calculatorExtraPayment * 100)); // Dynamic simulation

    return {
      monthly: monthlyInstallment,
      fortnightly: monthlyInstallment / 2,
      weekly: monthlyInstallment / 4.33,
      totalInterest: Math.max(0, totalInterestPayable - extraSavings),
      principal: principal,
      totalCost: principal + Math.max(0, totalInterestPayable - extraSavings)
    };
  }, [calculatorLoanAmount, calculatorRate, calculatorTerm, calculatorExtraPayment]);

  // SVG Donut percentages
  const donutPercentages = useMemo(() => {
    const total = calculatedRepayments.totalCost;
    if (total === 0) return { principal: 100, interest: 0 };
    const pPercent = (calculatedRepayments.principal / total) * 100;
    const iPercent = (calculatedRepayments.totalInterest / total) * 100;
    return {
      principal: pPercent,
      interest: iPercent
    };
  }, [calculatedRepayments]);

  // Quote Wizard steps controller
  const handleWizardSubmit = () => {
    if (wizardStep < 4) {
      console.log(`[QuoteWizard] Navigating to next wizard step from: ${wizardStep}`);
      setWizardStep(prev => prev + 1);
    } else {
      console.log("[QuoteWizard] Submitting final loan pre-qualification request...");
      const emailBody = `Dear @money Capital Panel,\n\nI am requesting pre-qualification for a loan.\n\n` +
        `Loan Amount: $${wizardAmount.toLocaleString()}\n` +
        `Loan Type: ${wizardLoanType}\n` +
        `Term: ${wizardTenureMonths} months\n` +
        `Purpose: ${wizardPurpose}\n` +
        `Notes: ${wizardPurposeNotes || 'N/A'}\n` +
        `Applicant Name: ${wizardName}\n` +
        `Email Address: ${wizardEmail}\n` +
        `Contact Phone: ${wizardPhone}\n` +
        `Employment Status: ${wizardEmployment}\n\n` +
        `Please match my profile with the best lenders.\n\nRegards,\n${wizardName}`;

      console.log("[QuoteWizard] Email body constructed successfully:\n", emailBody);
      setWizardSuccessMsg("Processing your loan request...");

      console.log("[QuoteWizard] Attempting to send email via secure Express SMTP backend...");
      const payload = {
        subject: `Loan Qualification Request - ${wizardName}`,
        from_name: "@money Capital Onboarding",
        to_email: EMAIL_CONFIG.recipientEmail,
        message: emailBody,
        name: wizardName,
        email: wizardEmail,
        phone: wizardPhone,
        loan_amount: `$${wizardAmount.toLocaleString()}`,
        loan_type: wizardLoanType,
        term: `${wizardTenureMonths} months`,
        purpose: wizardPurpose,
        employment: wizardEmployment,
        notes: wizardPurposeNotes || 'N/A'
      };

      fetch("http://localhost:5001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        console.log(`[QuoteWizard] Express SMTP Backend Response Status: ${response.status} ${response.statusText}`);
        if (!response.ok) {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("[QuoteWizard] Express SMTP Backend Response Data:", data);
        if (data.success) {
          console.log("[QuoteWizard] Email sent successfully via Express SMTP backend!");
          setWizardSuccessMsg("Request submitted successfully!");
          setTimeout(() => {
            console.log("[QuoteWizard] Transitioning to wizard step 5 (success screen).");
            setWizardStep(5);
          }, 1000);
        } else {
          console.warn("[QuoteWizard] Express SMTP Backend returned failure status. Falling back to mailto client. Error:", data);
          triggerMailtoFallback(emailBody);
        }
      })
      .catch(err => {
        console.warn("[QuoteWizard] Failed to connect to Express SMTP backend (server might be offline). Falling back to mailto client. Error:", err);
        triggerMailtoFallback(emailBody);
      });
    }
  };

  const triggerMailtoFallback = (bodyContent) => {
    const subject = encodeURIComponent(`Loan Qualification Request - ${wizardName}`);
    const body = encodeURIComponent(bodyContent);
    console.log(`[QuoteWizard] Preparing mailto redirect to recipient: ${EMAIL_CONFIG.recipientEmail}`);
    console.log(`[QuoteWizard] Mailto Subject: Loan Qualification Request - ${wizardName}`);
    
    setWizardSuccessMsg("Your request has been prepared! Redirecting to email client...");
    setTimeout(() => {
      const mailtoUrl = `mailto:${EMAIL_CONFIG.recipientEmail}?subject=${subject}&body=${body}`;
      console.log(`[QuoteWizard] Redirecting window location to: ${mailtoUrl.substring(0, 120)}...`);
      window.location.href = mailtoUrl;
      console.log("[QuoteWizard] Transitioning to wizard step 5 (success screen).");
      setWizardStep(5);
    }, 1200);
  };

  // Dynamic visual switcher for Mockups
  const renderInteractiveMockup = (tab) => {
    if (tab === 'Home Loan') {
      return (
        <div className="w-full relative rounded-2xl border border-indigo-500/20 bg-slate-950/70 p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/5">
          <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[11px] font-bold tracking-widest text-emerald-400 uppercase">Document Vault</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">SSL Encrypted / ISO 27001</span>
          </div>

          <p className="text-xs text-slate-300 mb-4 font-semibold">Simulate credential verification uploads for underwriters:</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {Object.entries(checklistUploadState).map(([doc, state]) => (
              <div key={doc} className="rounded-xl border border-white/5 bg-slate-900/50 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-white tracking-wide">{doc}</span>
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                {state === 'Empty' && (
                  <button 
                    onClick={() => handleChecklistUpload(doc)}
                    className="w-full py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-[10px] font-bold text-indigo-300 hover:bg-indigo-600/40 hover:text-white transition-all text-center"
                  >
                    Upload File
                  </button>
                )}
                {state === 'Uploading' && (
                  <div className="w-full flex flex-col space-y-1">
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full animate-[pulse-soft_1.5s_infinite]"></div>
                    </div>
                    <span className="text-[9px] text-slate-400 text-center font-bold">Uploading...</span>
                  </div>
                )}
                {state === 'Verified' && (
                  <div className="w-full flex items-center justify-center space-x-1 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="text-[9px] font-black tracking-widest uppercase">Verified</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold border-t border-white/5 pt-4">
            <span className="flex items-center"><Shield className="w-3 h-3 text-emerald-400 mr-1" /> Pre-qualification Integrity Score</span>
            <span className="text-emerald-400 font-bold">98.4 / 100</span>
          </div>
        </div>
      );
    }

    // Default: Platinum / Gold holographic risk card
    return (
      <div className="w-full relative rounded-2xl border border-indigo-500/20 bg-slate-950/70 p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/5">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[11px] font-black tracking-widest text-indigo-400 uppercase">Risk Assessment</span>
          <div className="flex space-x-1.5">
            {['Platinum', 'Gold', 'Silver'].map(tier => (
              <button
                key={tier}
                onClick={() => setCreditRiskTier(tier)}
                className={`px-2.5 py-1 rounded text-[9px] font-black tracking-wide uppercase transition-all ${
                  creditRiskTier === tier 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* Credit Card Graphic Card with pulsing auroras */}
        <div className={`w-full aspect-[1.7/1] rounded-2xl p-5 relative overflow-hidden transition-all duration-700 ${
          creditRiskTier === 'Platinum' 
            ? 'bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 border border-emerald-500/30 shadow-lg shadow-emerald-500/5' 
            : creditRiskTier === 'Gold'
            ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-indigo-500/30 shadow-lg shadow-indigo-500/5'
            : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-white/10'
        }`}>
          {/* Holographic glowing blobs */}
          <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-40 transition-all ${
            creditRiskTier === 'Platinum' ? 'bg-emerald-500' : creditRiskTier === 'Gold' ? 'bg-indigo-500' : 'bg-slate-400'
          }`}></div>
          
          <div className="flex justify-between items-start mb-6">
            <BrandLogo className="scale-75 origin-left" />
            <div className="w-8 h-6 rounded bg-gradient-to-br from-amber-400 to-amber-600 opacity-80 flex items-center justify-center">
              {/* Card Chip */}
              <div className="w-5 h-4 border border-slate-950/30 rounded-sm"></div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Pre-Approved Loan Amount</div>
          <div className="text-2xl font-black text-white mb-auto tracking-tight">
            {creditRiskTier === 'Platinum' ? '$750,000' : creditRiskTier === 'Gold' ? '$450,000' : '$200,000'}
          </div>

          <div className="flex justify-between items-end mt-4">
            <div className="flex flex-col">
              <span className="text-[8px] text-slate-500 font-black uppercase tracking-wider">Interest Rate Quote</span>
              <span className="text-xs font-bold text-emerald-400">
                {creditRiskTier === 'Platinum' ? '4.85% p.a.' : creditRiskTier === 'Gold' ? '6.15% p.a.' : '7.80% p.a.'}
              </span>
            </div>
            <span className="text-[9px] font-mono text-slate-300">•••• •••• •••• 9012</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 italic text-center mt-4">
          *Real-time assessment using soft credit checks. No impact on your credit score.
        </p>
      </div>
    );
  };

  return (
    <div className="font-sans text-slate-200 min-h-screen bg-[#060814] grid-glow-background relative">
      
      {/* Background Glowing Aurora Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[120px] animate-aurora-1"></div>
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-950/15 blur-[120px] animate-aurora-2"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-950/10 blur-[150px]"></div>
      </div>

      {/* Top Utility Bar */}
      <div className="border-b border-white/5 bg-slate-950/80 backdrop-blur text-slate-300 py-2.5 px-4 sm:px-6 lg:px-8 text-xs font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex space-x-6 mb-2 sm:mb-0">
            <button onClick={() => { setActiveTab('Join as Broker'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">Partner Network</button>
            <button onClick={() => { setActiveTab('About Us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">About Us</button>
          </div>
          <div className="flex space-x-6">
            <a href="tel:1800010001" className="flex items-center hover:text-emerald-400 transition-colors font-bold">
              <Phone className="w-3.5 h-3.5 mr-2 text-emerald-400 animate-pulse" /> 1800 010 001
            </a>
            <a href="mailto:contact@money.com.au" className="flex items-center hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-indigo-400" /> contact@money.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Floating Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <nav className="max-w-7xl mx-auto rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-xl px-6 py-4 shadow-xl shadow-slate-950/50 flex justify-between items-center transition-all">
          <div onClick={() => setActiveTab('Home')} className="flex-shrink-0 flex items-center">
            <BrandLogo />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => { e.preventDefault(); setActiveTab(link); }}
                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                  activeTab === link 
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' 
                    : 'text-slate-400 border border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Action trigger button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => { setActiveTab('Request Loan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/25"
            >
              Request Loan
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-emerald-400 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Slide */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-3xl z-50">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => { e.preventDefault(); setActiveTab(link); setIsMenuOpen(false); }}
                  className={`text-sm font-bold uppercase tracking-widest p-3 rounded-xl text-left transition-all ${
                    activeTab === link 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link}
                </a>
              ))}
              <div className="border-t border-white/5 mt-4 pt-4">
                <button 
                  onClick={() => { setActiveTab('Request Loan'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest text-center"
                >
                  Request Loan
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Panel Content views */}
      {activeTab === 'Request Loan' ? (
        
        /* 5-Step Quote Wizard Onboarding */
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-indigo-500/20 bg-slate-950/60 p-8 md:p-12 backdrop-blur-2xl shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
            
            {/* Steps Visual Progress */}
            <div className="mb-10">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3">
                <span>Step {wizardStep} of 5</span>
                <span className="text-emerald-400 font-extrabold">{wizardStep * 20}% Complete</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${wizardStep * 20}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Loan Details */}
            {wizardStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Loan Details.</h2>
                  <p className="text-slate-400 text-sm">Select a loan type, amount, and repayment term. We'll tailor the next steps automatically.</p>
                </div>

                <div className="space-y-7">
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block">Loan Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {wizardLoanTypeOptions.map(({ value, icon: Icon }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setWizardLoanType(value)}
                          className={`py-3 px-3 rounded-2xl text-left border transition-all flex items-center space-x-3 ${
                            wizardLoanType === value
                              ? 'bg-emerald-500/10 border-emerald-500/40 text-white ring-1 ring-emerald-500/20'
                              : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${wizardLoanType === value ? 'text-emerald-400' : 'text-slate-400'}`} />
                          <span className="text-xs font-black tracking-wide">{value}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Amount</span>
                      <span className="text-3xl font-black text-emerald-400">${wizardAmount.toLocaleString()}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-1">
                        <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Enter Amount</label>
                        <input
                          type="number"
                          min="10000"
                          max="1500000"
                          step="1000"
                          value={wizardAmount}
                          onChange={(e) => {
                            const next = Number(e.target.value);
                            if (!Number.isFinite(next)) return;
                            setWizardAmount(clampNumber(next, 10000, 1500000));
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all font-semibold"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Slide</label>
                        <input 
                          type="range"
                          min="10000"
                          max="1500000"
                          step="10000"
                          value={wizardAmount}
                          onChange={(e) => setWizardAmount(clampNumber(Number(e.target.value), 10000, 1500000))}
                          className="slider-custom w-full cursor-pointer"
                        />
                        <div className="grid grid-cols-4 gap-2.5 mt-3">
                          {[50000, 150000, 500000, 1000000].map(val => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setWizardAmount(val)}
                              className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                                wizardAmount === val 
                                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                                  : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                              }`}
                            >
                              ${(val/1000)}k
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Repayment Term</span>
                      <span className="text-sm font-black text-indigo-400">{formatTenure(wizardTenureMonths)} ({wizardTenureMonths} months)</span>
                    </div>

                    <input
                      type="range"
                      min="6"
                      max="360"
                      step="6"
                      value={wizardTenureMonths}
                      onChange={(e) => setWizardTenureMonths(clampNumber(Number(e.target.value), 6, 360))}
                      className="slider-custom w-full cursor-pointer"
                    />

                    <div className="flex flex-wrap gap-2">
                      {wizardTenurePresets.map((months) => (
                        <button
                          key={months}
                          type="button"
                          onClick={() => setWizardTenureMonths(months)}
                          className={`px-3 py-2 rounded-xl text-[11px] font-black border transition-all ${
                            wizardTenureMonths === months
                              ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                              : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                          }`}
                        >
                          {formatTenure(months)}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-1">
                        <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Months</label>
                        <input
                          type="number"
                          min="6"
                          max="360"
                          step="1"
                          value={wizardTenureMonths}
                          onChange={(e) => {
                            const next = Number(e.target.value);
                            if (!Number.isFinite(next)) return;
                            setWizardTenureMonths(clampNumber(next, 6, 360));
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4 h-full flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Quick Tip</div>
                            <div className="text-xs text-slate-300 font-semibold mt-1">Longer term lowers repayments but increases total interest.</div>
                          </div>
                          <TrendingUp className="w-5 h-5 text-slate-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Purpose */}
            {wizardStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Purpose &amp; Notes.</h2>
                  <p className="text-slate-400 text-sm">This helps route your request to the right team. Keep it short.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Purchase / New', desc: 'New purchase, new asset, or first-time loan.' },
                    { label: 'Refinance', desc: 'Replace an existing loan or restructure terms.' },
                    { label: 'Cashflow / Working Capital', desc: 'Bridge gaps, inventory, payroll, or bills.' },
                    { label: 'Consolidation / Other', desc: 'Combine debts or a custom requirement.' }
                  ].map(pur => (
                    <button
                      key={pur.label}
                      onClick={() => setWizardPurpose(pur.label)}
                      className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        wizardPurpose === pur.label
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-white ring-1 ring-emerald-500/20'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-sm font-black uppercase tracking-wider block mb-1">{pur.label}</span>
                      <span className="text-[11px] text-slate-400 leading-normal">{pur.desc}</span>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Notes (Optional)</label>
                  <input
                    type="text"
                    value={wizardPurposeNotes}
                    onChange={(e) => setWizardPurposeNotes(e.target.value)}
                    placeholder="e.g., refinancing $220k, want 5-year term"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Qualification Coordinates */}
            {wizardStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Pre-Qualification Details.</h2>
                  <p className="text-slate-400 text-sm">Provide your details to match you with lenders.</p>
                </div>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Full-Time', 'Self-Employed', 'Contract / Other'].map(emp => (
                      <button
                        key={emp}
                        onClick={() => setWizardEmployment(emp)}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                          wizardEmployment === emp 
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-400' 
                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {emp}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Legal Identity Name</label>
                      <input 
                        type="text" 
                        value={wizardName}
                        onChange={(e) => setWizardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Email Address</label>
                        <input 
                          type="email" 
                          value={wizardEmail}
                          onChange={(e) => setWizardEmail(e.target.value)}
                          placeholder="john@firm.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Mobile Number</label>
                        <input 
                          type="tel" 
                          value={wizardPhone}
                          onChange={(e) => setWizardPhone(e.target.value)}
                          placeholder="0400 000 000"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Feasibility Report Summary */}
            {wizardStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Our system reviewed your details. Check your match summary.</h2>
                </div>
                
                <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Client Name</span>
                    <span className="text-sm font-black text-white">{wizardName || 'Prospect'}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Loan Amount</span>
                    <span className="text-sm font-black text-emerald-400">${wizardAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Loan Purpose</span>
                    <span className="text-sm font-black text-indigo-400">{wizardPurpose}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Match Rating</span>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">Excellent Match - Top Tier Qualified</span>
                    </div>
                  </div>
                </div>

                {wizardSuccessMsg && (
                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-bold text-center rounded-xl animate-[pulse-soft_1.5s_infinite]">
                    {wizardSuccessMsg}
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Matching Final Success State */}
            {wizardStep === 5 && (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <Sparkles className="w-8 h-8 text-emerald-400 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-white tracking-tight">Request Sent Successfully.</h2>
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    We have successfully processed your details and matched you with the top 3 lenders on our panel.
                  </p>
                </div>
                <button
                  onClick={() => { setWizardStep(1); setWizardSuccessMsg(''); }}
                  className="px-6 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 uppercase tracking-widest"
                >
                  Request Another Loan
                </button>
              </div>
            )}

            {/* Action Bar */}
            {wizardStep < 5 && (
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5">
                {wizardStep > 1 ? (
                  <button 
                    onClick={() => setWizardStep(prev => prev - 1)}
                    className="px-6 py-3 rounded-xl border border-white/5 bg-slate-900/50 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Back
                  </button>
                ) : <div />}
                
                <button
                  onClick={handleWizardSubmit}
                  disabled={wizardStep === 3 && (!wizardName || !wizardEmail || !wizardPhone)}
                  className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                    wizardStep === 3 && (!wizardName || !wizardEmail || !wizardPhone)
                      ? 'bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed'
                      : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25'
                  }`}
                >
                  {wizardStep === 4 ? 'Request Loan' : 'Next Step'}
                </button>
              </div>
            )}

          </div>
        </section>

      ) : activeTab === 'Contact Us' ? (
        
        /* Proper Contact Us Page */
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">Connect With Our Panel.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Reach out to our expert brokers for direct access to wholesale loans and custom credit options.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40">
                <h3 className="text-xl font-black text-white mb-6">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Office Address</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">Level 24, 100 Barangaroo Avenue<br/>Sydney NSW 2000, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Phone Support</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">1800 010 001<br/>Mon-Fri, 9am-5pm AEST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Email Address</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">contact@money.com.au</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40">
              <h3 className="text-xl font-black text-white mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all" required />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all" required />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all" required />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Message</label>
                  <textarea rows="4" placeholder="How can we assist you?" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full mt-2 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/25">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

      ) : activeTab === 'About Us' ? (
        
        /* Proper About Us Page */
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5">
              <Landmark className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-300">About @money Capital</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">Building the Future of Lending.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We connect you to wholesale credit markets to bring the best rates directly to you, making the process easy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white tracking-tight">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                At @money Capital, we believe that access to great loan options shouldn't be hard. Our mission is to make top-tier lending available to everyone, providing both businesses and individuals with the money they need to grow.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                By connecting directly with over 40+ wholesale lenders, our smart system matches your specific profile to the best lenders, ensuring you get the most competitive rates and terms available.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Direct Access to Wholesale Rates",
                  "Smart Lender Matching",
                  "Absolute Data Privacy & Security",
                  "Unbiased Loan Structuring"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
              <div className="glass-panel rounded-3xl p-8 relative border border-white/10 shadow-2xl bg-slate-900/40">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5 text-center">
                    <span className="text-3xl font-black text-emerald-400 block mb-2">$2B+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Funds Lent</span>
                  </div>
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5 text-center">
                    <span className="text-3xl font-black text-indigo-400 block mb-2">40+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lending Partners</span>
                  </div>
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5 text-center">
                    <span className="text-3xl font-black text-teal-400 block mb-2">98%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Approval Rate</span>
                  </div>
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5 text-center">
                    <span className="text-3xl font-black text-white block mb-2">24/7</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Broker Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      ) : activeTab === 'Join as Broker' ? (
        
        /* Proper Join as Broker Page */
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Partner Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">Scale Your Operations.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Join the @money Capital broker panel. Access wholesale loans and high commission structures designed for top professionals.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: <TrendingUp className="w-6 h-6 text-emerald-400" />, title: "High Commissions", desc: "Earn industry-leading upfront commissions up to 1.25% with transparent trail structures." },
              { icon: <Sparkles className="w-6 h-6 text-indigo-400" />, title: "Direct Lender Access", desc: "Avoid retail delays. Connect directly to 40+ top lenders and private funds." },
            ].map((benefit, i) => (
              <div key={i} className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40 text-center space-y-4 hover:bg-slate-900/60 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center mx-auto shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-white">{benefit.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Broker Application Form */}
            <div className="glass-panel rounded-3xl p-8 lg:p-10 border border-white/5 bg-slate-900/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-black text-white mb-2">Request to Join</h3>
              <p className="text-slate-400 text-xs mb-8">Submit your details below to start the sign-up process with our team.</p>
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Request submitted successfully!"); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">First Name</label>
                    <input type="text" placeholder="Jane" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold" required />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Last Name</label>
                    <input type="text" placeholder="Smith" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold" required />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Business Email</label>
                  <input type="email" placeholder="jane@brokerage.com" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Mobile Number</label>
                    <input type="tel" placeholder="0400 000 000" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold" required />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">ACL / ACR Number</label>
                    <input type="text" placeholder="123456" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold" required />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Aggregator (If Applicable)</label>
                  <input type="text" placeholder="e.g. AFG, Connective" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all font-semibold" />
                </div>
                <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-indigo-600 text-white font-black text-xs uppercase tracking-widest hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/25">
                  Submit Application
                </button>
              </form>
            </div>

            {/* Yield Estimator */}
            <div className="space-y-6">
              <div className="glass-panel rounded-3xl p-8 lg:p-10 border border-emerald-500/20 bg-slate-950/70 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                  <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 flex items-center">
                    <TrendingUp className="w-3.5 h-3.5 mr-1.5" /> Yield Simulator
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">1.25% Net Comm.</span>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Settled Monthly Volume</label>
                      <span className="text-sm font-black text-white">${(brokerSettledVolume / 1000000).toFixed(1)}M</span>
                    </div>
                    <input 
                      type="range"
                      min="500000"
                      max="10000000"
                      step="250000"
                      value={brokerSettledVolume}
                      onChange={(e) => setBrokerSettledVolume(Number(e.target.value))}
                      className="slider-custom w-full cursor-pointer"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 flex justify-between items-center">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Est. Monthly Revenue</span>
                      <span className="text-2xl font-black text-emerald-400">${Math.round(brokerSettledVolume * 0.0125).toLocaleString()}</span>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 flex justify-between items-center">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Est. Annual Revenue</span>
                      <span className="text-2xl font-black text-indigo-400">${Math.round(brokerSettledVolume * 0.0125 * 12).toLocaleString()}</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 leading-normal text-center">
                    *Simulator assumes an average upfront commission rate of 1.25%. Volume bonuses and trail commissions may apply based on product type and lending panel.
                  </p>
                </div>
              </div>

              {/* Contact Info block */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Broker Support Line</h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-2">Have questions about our accreditation process? Speak directly to our BDM team.</p>
                  <a href="tel:1800010001" className="text-xs font-black text-emerald-400 hover:text-emerald-300 tracking-widest uppercase transition-colors">1800 010 001</a>
                </div>
              </div>

            </div>
          </div>
        </section>

      ) : activeTab === 'Legal' ? (
        
        /* Proper Legal Page */
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-slate-500/20 bg-slate-500/5">
              <Shield className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Compliance & Regulatory</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">Legal & Privacy.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Transparent operations and strict compliance. Review our core policies and regulatory standing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40 space-y-4">
              <h3 className="text-xl font-black text-white flex items-center"><FileText className="w-5 h-5 text-emerald-400 mr-2"/> Terms of Service</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By accessing @money Capital’s website, you agree to comply with our terms. Our platform is a smart system matching loan requests with wholesale credit providers. We do not directly issue loans unless explicitly stated in separate commercial documentation.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40 space-y-4">
              <h3 className="text-xl font-black text-white flex items-center"><Shield className="w-5 h-5 text-indigo-400 mr-2"/> Privacy Policy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your data is completely safe. We employ SSL encryption and adhere to ISO 27001 standards. Your personal and business information is only used to match you with lenders and will never be sold or shared with unauthorized companies.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40 space-y-4">
              <h3 className="text-xl font-black text-white flex items-center"><Landmark className="w-5 h-5 text-teal-400 mr-2"/> Credit Guide & Licensing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                @money Pty Ltd trading as @money Finance holds Australian Credit License #547719. We act in the best interests of our clientele, adhering strictly to the National Consumer Credit Protection Act 2009. We maintain internal dispute resolution procedures and are a member of the Australian Financial Complaints Authority (AFCA).
              </p>
            </div>
          </div>
        </section>

      ) : activeTab === 'Required Docs' ? (

        /* Proper Required Docs Page */
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5">
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-300">Required Documents</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">Standard Document Checklist.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Speed up your loan approval. Prepare the following documents before submitting your application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-4">Personal Loans</h3>
              <p className="text-slate-400 text-xs mb-6">For personal loans, home loans, and standard car loans.</p>
              <ul className="space-y-4">
                {[
                  "Primary ID (Passport or Driver's License)",
                  "Recent Payslips (Last 2 intervals)",
                  "Bank Statements (Last 90 days)",
                  "Current Liabilities Summary"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-white/5 bg-slate-900/40">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-4">Business Loans</h3>
              <p className="text-slate-400 text-xs mb-6">For business loans, heavy equipment, and fleet loans.</p>
              <ul className="space-y-4">
                {[
                  "Corporate Director ID",
                  "Financial Statements (P&L, Balance Sheet)",
                  "Business Tax Returns (Last 2 years)",
                  "Notice of Assessment (ATO)",
                  "Asset Quotes / Invoices (If purchasing)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-6 rounded-2xl border border-dashed border-white/10 bg-slate-950/40 text-center">
             <p className="text-sm text-slate-400 font-medium">All documents can be securely uploaded via our secure portal after you start a quote.</p>
             <button 
                onClick={() => { setActiveTab('Request Loan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 uppercase tracking-widest transition-all"
              >
                Start Pre-Qualification
              </button>
          </div>
        </section>

      ) : (
        
        /* Primary Landing View (Home / Product Tabs) */
        <>
          
          {/* Dynamic Immersive Hero */}
          <section className="py-16 lg:py-28 relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              {activeTab === 'All Products' ? (
                <div className="text-center max-w-3xl mx-auto space-y-6">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Our Loan Options</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                    {heroData[activeTab].title}
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    {heroData[activeTab].desc}
                  </p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Hero Details */}
                  <div className="space-y-8">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
                        {activeTab === 'Home' ? 'Smart Loan Matching' : `${activeTab} Options`}
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                      {heroData[activeTab].title}
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                      {heroData[activeTab].desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 pt-2">
                      {heroData[activeTab].btn && (
                        <button 
                          onClick={() => { setActiveTab('Request Loan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                          className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
                        >
                          {heroData[activeTab].btn}
                        </button>
                      )}
                      
                      <button 
                        onClick={() => {
                          const calcSec = document.getElementById('calculator');
                          if (calcSec) calcSec.scrollIntoView({ behavior: 'smooth' });
                        }} 
                        className="text-slate-300 hover:text-white font-bold text-xs border-b border-slate-700 hover:border-emerald-400 pb-1 uppercase tracking-widest transition-all"
                      >
                        Simulate Repayments
                      </button>
                    </div>
                  </div>

                  {/* Right Hero Visuals (Fully Interactive Live Mockup Dashboards) */}
                  <div className="relative">
                    {renderInteractiveMockup(activeTab)}
                  </div>

                </div>
              )}
              
            </div>
          </section>

          {/* Glow-Border Glass Products Suite (Home or All Products) */}
          {(activeTab === 'All Products' || activeTab === 'Home') && (
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Our Lenders</span>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Top Wholesale Lenders</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We work directly with over 40+ wholesale lenders. Select a loan type to see your options.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {products.map((product, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab(product.title);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="glass-panel glass-card-hover rounded-2xl p-7 flex items-start space-x-5 border border-white/5 hover:bg-slate-900/40 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  >
                    {/* Glowing corner indicator */}
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-all"></div>
                    
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-emerald-500/35 transition-colors shadow-inner">
                      {product.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-wider">{product.title}</h3>
                        <span className="text-[8px] font-bold bg-white/5 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 border border-transparent group-hover:border-emerald-500/20 px-2 py-0.5 rounded-full transition-all">
                          {product.badge}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-xs">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Advanced visual Donut Calculator Section */}
          <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40 relative">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center mb-12 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Repayment Calculator</span>
                <h2 className="text-3xl font-black text-white tracking-tight">Interactive Loan Calculator</h2>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Adjust the sliders to estimate your regular loan repayments. See how extra payments can save you money.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* Left: Input Sliders */}
                  <div className="space-y-8 lg:pr-8 lg:border-r border-white/5">
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Loan Amount ($)</label>
                        <span className="text-sm font-black border border-white/5 rounded-lg px-3 py-1 bg-slate-900 text-white">${calculatorLoanAmount.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="10000" 
                        max="1500000" 
                        step="10000" 
                        value={calculatorLoanAmount} 
                        onChange={(e) => setCalculatorLoanAmount(Number(e.target.value))} 
                        className="slider-custom w-full cursor-pointer" 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Loan Term (Years)</label>
                        <span className="text-sm font-black border border-white/5 rounded-lg px-3 py-1 bg-slate-900 text-white">{calculatorTerm} Years</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="30" 
                        step="1" 
                        value={calculatorTerm} 
                        onChange={(e) => setCalculatorTerm(Number(e.target.value))} 
                        className="slider-custom w-full cursor-pointer" 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Interest Rate (% p.a.)</label>
                        <span className="text-sm font-black border border-white/5 rounded-lg px-3 py-1 bg-slate-900 text-white">{calculatorRate}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="18" 
                        step="0.1" 
                        value={calculatorRate} 
                        onChange={(e) => setCalculatorRate(Number(e.target.value))} 
                        className="slider-custom w-full cursor-pointer" 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Extra Monthly Repayment ($)</label>
                        <span className="text-sm font-black border border-white/5 rounded-lg px-3 py-1 bg-slate-900 text-white">${calculatorExtraPayment}</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="1500" 
                        step="50" 
                        value={calculatorExtraPayment} 
                        onChange={(e) => setCalculatorExtraPayment(Number(e.target.value))} 
                        className="slider-custom w-full cursor-pointer" 
                      />
                    </div>

                    <div className="pt-4 flex gap-4">
                      <button 
                        onClick={() => { setActiveTab('Request Loan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-widest text-center hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/25"
                      >
                        Request Loan
                      </button>
                      <button 
                        onClick={() => setIsCalcScheduleOpen(!isCalcScheduleOpen)}
                        className="flex-1 py-3.5 rounded-xl border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                      >
                        {isCalcScheduleOpen ? 'Hide Projections' : 'Reveal Projections'}
                      </button>
                    </div>
                  </div>

                  {/* Right: Circular Donut Chart & Breakdown */}
                  <div className="flex flex-col items-center">
                    
                    {/* SVG Circular Donut Chart with animated strokes */}
                    <div className="w-48 h-48 relative mb-8 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background track circle */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                        
                        {/* Principal stroke arc (Green) */}
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="transparent" 
                          stroke="#10B981" 
                          strokeWidth="8" 
                          strokeDasharray={`${(donutPercentages.principal * 251.2) / 100} 251.2`}
                          className="transition-all duration-500"
                        />

                        {/* Interest stroke arc (Indigo) */}
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="40" 
                          fill="transparent" 
                          stroke="#6366F1" 
                          strokeWidth="8" 
                          strokeDasharray={`${(donutPercentages.interest * 251.2) / 100} 251.2`}
                          strokeDashoffset={`-${(donutPercentages.principal * 251.2) / 100}`}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="block text-[8px] text-slate-500 uppercase tracking-widest font-black">Monthly Base</span>
                        <span className="text-lg font-black text-white">${Math.round(calculatedRepayments.monthly).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="w-full space-y-4 text-xs font-semibold">
                      <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                        <span className="flex items-center text-slate-400"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm mr-2"></span> Loan Principal</span>
                        <span className="text-white">${calculatedRepayments.principal.toLocaleString()}.00</span>
                      </div>
                      <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                        <span className="flex items-center text-slate-400"><span className="w-2.5 h-2.5 bg-indigo-500 rounded-sm mr-2"></span> Total Interest</span>
                        <span className="text-indigo-300">${Math.round(calculatedRepayments.totalInterest).toLocaleString()}.00</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5">
                        <span className="font-bold text-white uppercase tracking-wider">Simulated Total Pool</span>
                        <span className="font-black text-emerald-400 text-sm">${Math.round(calculatedRepayments.totalCost).toLocaleString()}.00</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Simulated Repayments Projections Drawer */}
                {isCalcScheduleOpen && (
                  <div className="border-t border-white/5 mt-10 pt-8 animate-[pulse-soft_1s_ease-out_1]">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" /> Loan Repayment Timeline
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      {[
                        { label: 'Year 1 Milestone', principal: calculatorLoanAmount * 0.97, interest: calculatedRepayments.totalInterest * 0.1 },
                        { label: 'Year 5 Milestone', principal: calculatorLoanAmount * 0.84, interest: calculatedRepayments.totalInterest * 0.45 },
                        { label: 'Year 10 Milestone', principal: calculatorLoanAmount * 0.62, interest: calculatedRepayments.totalInterest * 0.75 },
                        { label: 'Maturity Target', principal: 0, interest: calculatedRepayments.totalInterest }
                      ].map((mile, idx) => (
                        <div key={idx} className="rounded-xl border border-white/5 bg-slate-900/40 p-4 space-y-2">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{mile.label}</span>
                          <div>
                            <span className="text-[9px] text-slate-500 block">Remaining Principal</span>
                            <span className="text-xs font-bold text-white">${Math.round(mile.principal).toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-slate-500 block">Interest Paid</span>
                            <span className="text-xs font-bold text-indigo-300">${Math.round(mile.interest).toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
              <p className="text-[10px] text-slate-500 text-center mt-6 max-w-3xl mx-auto leading-relaxed">
                *The numbers provided above are estimates. Actual rates and loan amounts vary. Talk to our team for a real quote. Australian Credit License #547719.
              </p>
            </div>
          </section>

          {/* Broker Network Section with Interactive Yield Calculator */}
          <section id="join" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-slate-950/40 relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Wholesale Channel</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                    Unify Your Operations. Partner with the Panel.
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed">
                    We invite finance professionals, brokers, and advisors to work directly with our lending platform. Get access to great tools and a wide range of lenders.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => { setActiveTab('Join as Broker'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-black text-xs uppercase tracking-widest hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/20"
                    >
                      Join Partner Channel
                    </button>
                  </div>
                </div>

                {/* Right: Interactive Partner Yield Simulator */}
                <div className="rounded-3xl border border-indigo-500/20 bg-slate-950/70 p-8 backdrop-blur-xl shadow-2xl">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400 flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-1.5" /> Yield Estimation Simulator
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">1.25% Net Commission</span>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Monthly Settled Volume</label>
                        <span className="text-sm font-black text-white">${(brokerSettledVolume / 1000000).toFixed(1)} Million</span>
                      </div>
                      <input 
                        type="range"
                        min="500000"
                        max="10000000"
                        step="250000"
                        value={brokerSettledVolume}
                        onChange={(e) => setBrokerSettledVolume(Number(e.target.value))}
                        className="slider-custom w-full cursor-pointer"
                      />
                    </div>

                    <div className="rounded-xl border border-white/5 bg-slate-900/60 p-5 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider block mb-1">Standard Commission Pay</span>
                        <span className="text-base font-black text-emerald-400">${Math.round(brokerSettledVolume * 0.0125).toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider block mb-1">Annual Yield Run Rate</span>
                        <span className="text-base font-black text-indigo-400">${Math.round(brokerSettledVolume * 0.0125 * 12).toLocaleString()}</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 leading-normal text-center">
                      *Estimations computed assuming standard commission payouts. Additional volume bonuses apply on premium tiers.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Institutional Integrity Stats */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900/30 to-slate-950 p-10 lg:p-16 relative overflow-hidden shadow-2xl">
              
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 relative z-10">
                <div className="max-w-2xl mb-8 lg:mb-0 space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Our Track Record</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none">Safe and Secure Transactions.</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Providing reliable loans and pre-approvals for all personal and business needs.
                  </p>
                </div>
                <button 
                  onClick={() => { setActiveTab('Request Loan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                >
                  Request Loan
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
                <div className="space-y-2">
                  <span className="text-3xl lg:text-4xl font-black text-emerald-400 block tracking-tight">53,000+</span>
                  <h5 className="text-xs font-black text-white uppercase tracking-wider">Happy Clients</h5>
                  <p className="text-slate-400 text-xs leading-normal">Satisfied borrowers finding the right loan through our system.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl lg:text-4xl font-black text-indigo-400 block tracking-tight">$73M Facility</span>
                  <h5 className="text-xs font-black text-white uppercase tracking-wider">Largest Loan Funded</h5>
                  <p className="text-slate-400 text-xs leading-normal">Successfully settled high-value business and commercial loans.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl lg:text-4xl font-black text-teal-400 block tracking-tight">8 Years</span>
                  <h5 className="text-xs font-black text-white uppercase tracking-wider">Years of Experience</h5>
                  <p className="text-slate-400 text-xs leading-normal">A strong history of providing reliable loan options and great rates.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl lg:text-4xl font-black text-emerald-400 block tracking-tight">8 Regions</span>
                  <h5 className="text-xs font-black text-white uppercase tracking-wider">Regions Covered</h5>
                  <p className="text-slate-400 text-xs leading-normal">Full national coverage to help clients across the country.</p>
                </div>
              </div>

            </div>
          </section>

        </>
      )}

      {/* Modern High-End Footer */}
      <footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-4 space-y-6">
              <BrandLogo />
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                @money Capital connects you directly with top institutional and wholesale lenders, making the process smooth and easy using smart technology.
              </p>
              <div className="flex space-x-3">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 hover:border-white transition-all"><Twitter /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 hover:border-white transition-all"><Facebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 hover:border-white transition-all"><Instagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 hover:border-white transition-all"><Youtube /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 hover:border-white transition-all"><Linkedin /></a>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <div className="text-white font-extrabold text-sm italic tracking-widest flex items-center">
                  <span className="text-emerald-400 mr-1.5 font-bold">{"///"}</span> FBAA MEMBER
                </div>
                <div className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                  <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full mr-1.5 flex items-center justify-center shadow-md shadow-emerald-500/20">
                    <CheckCircle2 className="w-2 h-2 text-slate-950" />
                  </div>
                  AFCA ACCREDITED
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h6 className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-4">Resource Panels</h6>
                <ul className="space-y-3">
                  {['About Us', 'Contact Us', 'All Products', 'Join as Broker', 'Legal', 'Required Docs'].map(link => (
                    <li key={link}>
                      <button onClick={() => { setActiveTab(link); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-400 hover:text-emerald-400 text-xs transition-colors text-left">{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 mb-8">
            <p className="text-[10px] text-slate-500 leading-relaxed text-justify">
              Disclaimer: The contents of this portal are compiled as simulated credit parameters for reference indices. They do not represent official underwriter offers or formal financial product guidance. Underwriter criteria, lending ratios, margins, loan terms, and interest tables apply based on specific risk assessments. @money Pty Ltd trading as @money Finance operates under Australian Credit License #547719, ABN: 58 622 168 316, ACN: 622 168 316. Data coordinates transacted on our system are protected using military-grade security. For comprehensive regulatory disclosures, please coordinate with our accredited broker office or consult our <button type="button" onClick={() => { setActiveTab('Legal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-400 underline font-semibold hover:text-emerald-400">legal page</button>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-500 text-[10px] font-semibold">
            <span>&copy; {new Date().getFullYear()} @money Finance &amp; Capital Panel. All Rights Reserved.</span>
            <span className="mt-2 sm:mt-0 font-bold text-slate-600">SECURE SOCKET LAYER DOCK ACTIVE</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
