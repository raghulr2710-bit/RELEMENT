import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, Sparkles, Building, Settings, Landmark, RefreshCcw } from 'lucide-react';

type TrackType = 'recycle' | 'purchase' | 'invest';

export default function CTA() {
  const [activeTrack, setActiveTrack] = useState<TrackType>('recycle');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  // Track specific states
  const [feedstockType, setFeedstockType] = useState('Black Mass');
  const [chemistry, setChemistry] = useState('NMC');
  const [volume, setVolume] = useState('10-50T');
  const [productTarget, setProductTarget] = useState('Li₂CO₃ (Lithium Carbonate)');
  const [investorType, setInvestorType] = useState('Strategic Fund');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out your Name and Email address.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  const getMailtoLink = () => {
    let subject = `RelementX Partnership Inquiry — ${name} (${company || 'Company'})`;
    let body = `Hello RelementX Team,\n\nMy name is ${name} from ${company || 'our company'}.\n\n`;

    if (activeTrack === 'recycle') {
      body += `I would like to explore recycling options for our feedstock.\n`;
      body += `- Feedstock Category: ${feedstockType}\n`;
      body += `- Selected Chemistry: ${chemistry}\n`;
      body += `- Estimated Monthly Volume: ${volume}\n\n`;
    } else if (activeTrack === 'purchase') {
      body += `I want to purchase high-purity chemical compounds.\n`;
      body += `- Target Compound: ${productTarget}\n\n`;
    } else {
      body += `I am interested in strategic investment opportunities with RelementX.\n`;
      body += `- Investor Category: ${investorType}\n\n`;
    }

    if (message) {
      body += `Additional Details: ${message}\n\n`;
    }

    body += `I can be reached at key contact email: ${email}.\n\nBest regards,\n${name}`;

    return `mailto:info@relementx.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setFormSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-24 md:py-32 text-white relative"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 34, 21, 0.45), rgba(10, 34, 21, 0.55)), url('/contact-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g2 mb-4">
            <span className="block w-6 h-[2px] bg-g2" />
            Get In Touch
            <span className="block w-6 h-[2px] bg-g2" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 select-none">
            Let&apos;s Build Something
            <br />
            Sustainable Together
          </h2>
          <p className="text-sm md:text-base font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            We are actively procuring Black mass and End-of-life batteries. Whether you have feedstock to supply, need a specific battery-grade compound, or want to explore investment opportunities — we would love to hear from you.
          </p>
        </div>

        {/* Dynamic Track Selection Panels */}
        <div className="grid grid-cols-3 gap-2 max-w-2xl mx-auto mb-10 pb-6 border-b border-white/10">
          <button
            onClick={() => {
              setActiveTrack('recycle');
              resetForm();
            }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl text-center cursor-pointer transition-all duration-300 border ${
              activeTrack === 'recycle'
                ? 'bg-[#0B2516]/80 text-white border-g2 shadow-md shadow-g5/20 backdrop-blur-md'
                : 'bg-white border-black/5 text-mid hover:border-g3/30 hover:bg-g3/3'
            }`}
          >
            <RefreshCcw className="w-5 h-5 mb-2" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider block leading-none">
              Battery Feedstock
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('purchase');
              resetForm();
            }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl text-center cursor-pointer transition-all duration-300 border ${
              activeTrack === 'purchase'
                ? 'bg-[#0B2516]/80 text-white border-g2 shadow-md shadow-g5/20 backdrop-blur-md'
                : 'bg-white border-black/5 text-mid hover:border-g3/30 hover:bg-g3/3'
            }`}
          >
            <Settings className="w-5 h-5 mb-2" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider block leading-none">
              Buy Compounds
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('invest');
              resetForm();
            }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl text-center cursor-pointer transition-all duration-300 border ${
              activeTrack === 'invest'
                ? 'bg-[#0B2516]/80 text-white border-g2 shadow-md shadow-g5/20 backdrop-blur-md'
                : 'bg-white border-black/5 text-mid hover:border-g3/30 hover:bg-g3/3'
            }`}
          >
            <Landmark className="w-5 h-5 mb-2" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider block leading-none">
              Strategic Invest
            </span>
          </button>
        </div>

        {/* Dynamic Card & Input Form */}
        <div className="bg-[#0A2215]/85 rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl backdrop-blur-md max-w-2xl mx-auto overflow-hidden relative">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key={activeTrack}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {activeTrack === 'recycle' && (
                  <div className="bg-[#05140C]/65 border border-g2/30 text-g2 px-4 py-3 rounded-xl text-xs font-medium flex items-center gap-3">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-g2 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-g2"></span>
                    </span>
                    <span>
                      We are actively procuring <strong className="font-extrabold text-white">Black mass</strong> and <strong className="font-extrabold text-white">End-of-life batteries</strong>.
                    </span>
                  </div>
                )}

                {/* Specific path custom settings indicators */}
                <div className="bg-[#05140C]/65 border border-white/5 p-4 rounded-xl">
                  {activeTrack === 'recycle' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1.5">
                          Feedstock Category
                        </label>
                        <select
                          value={feedstockType}
                          onChange={(e) => setFeedstockType(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2 font-semibold"
                        >
                          <option className="bg-[#05140C] text-white" value="Black Mass">Black Mass (Major Focus)</option>
                          <option className="bg-[#05140C] text-white" value="Battery Feedstock">Battery Feedstock</option>
                          <option className="bg-[#05140C] text-white" value="End-of-life Batteries">End-of-Life Batteries</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1.5">
                          Feedstock Chemistry
                        </label>
                        <select
                          value={chemistry}
                          onChange={(e) => setChemistry(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2"
                        >
                          <option className="bg-[#05140C] text-white" value="Nickel Manganese Cobalt Oxide (532, 622, 811, 111)">Nickel Manganese Cobalt Oxide (532, 622, 811, 111)</option>
                          <option className="bg-[#05140C] text-white" value="Lithium Iron Phosphate (LiFePO4)">Lithium Iron Phosphate (LiFePO4)</option>
                          <option className="bg-[#05140C] text-white" value="Graphite">Graphite</option>
                          <option className="bg-[#05140C] text-white" value="Nickel Cobalt Aluminum (NCA)">Nickel Cobalt Aluminum (NCA)</option>
                          <option className="bg-[#05140C] text-white" value="Mixed">Mixed Scrap</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1.5">
                          Estimated Monthly Volume
                        </label>
                        <select
                          value={volume}
                          onChange={(e) => setVolume(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2"
                        >
                          <option className="bg-[#05140C] text-white" value="<10T">Under 10 Tonnes / Month</option>
                          <option className="bg-[#05140C] text-white" value="10-50T">10 to 50 Tonnes / Month</option>
                          <option className="bg-[#05140C] text-white" value="50-200T">50 to 200 Tonnes / Month</option>
                          <option className="bg-[#05140C] text-white" value=">200T">Over 200 Tonnes / Month</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeTrack === 'purchase' && (
                    <div>
                      <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1.5">
                        Target Refined Compound Spec
                      </label>
                      <select
                        value={productTarget}
                        onChange={(e) => setProductTarget(e.target.value)}
                        className="w-full text-xs px-3 py-2 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2"
                      >
                        {/* Lithium Compounds */}
                        <option className="bg-[#05140C] text-white" value="Li₂CO₃ (Lithium Carbonate)">Li₂CO₃ (Lithium Carbonate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="Li₃PO₄ (Lithium Phosphate)">Li₃PO₄ (Lithium Phosphate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="LiPF₆ (Lithium Electrolyte Salt)">LiPF₆ (Lithium Electrolyte Salt — Battery Grade)</option>
                        {/* Cobalt Compounds */}
                        <option className="bg-[#05140C] text-white" value="CoC₂O₄ (Cobalt Oxalate)">CoC₂O₄ (Cobalt Oxalate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="CoSO₄ (Cobalt Sulphate)">CoSO₄ (Cobalt Sulphate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="Co₃O₄ (Cobalt Oxide)">Co₃O₄ (Cobalt Oxide — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="Co(OH)₂ (Cobalt Hydroxide)">Co(OH)₂ (Cobalt Hydroxide — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="CoCO₃ (Cobalt Carbonate)">CoCO₃ (Cobalt Carbonate — Battery Grade)</option>
                        {/* Nickel Compounds */}
                        <option className="bg-[#05140C] text-white" value="NiC₂O₄ (Nickel Oxalate)">NiC₂O₄ (Nickel Oxalate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="NiSO₄ (Nickel Sulphate)">NiSO₄ (Nickel Sulphate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="NiO (Nickel Oxide)">NiO (Nickel Oxide — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="Ni(OH)₂ (Nickel Hydroxide)">Ni(OH)₂ (Nickel Hydroxide — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="NiCO₃ (Nickel Carbonate)">NiCO₃ (Nickel Carbonate — Battery Grade)</option>
                        {/* Manganese Compounds */}
                        <option className="bg-[#05140C] text-white" value="MnC₂O₄ (Manganese Oxalate)">MnC₂O₄ (Manganese Oxalate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="MnSO₄ (Manganese Sulphate)">MnSO₄ (Manganese Sulphate — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="MnO₂ (Manganese Dioxide)">MnO₂ (Manganese Dioxide — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="Mn(OH)₂ (Manganese Hydroxide)">Mn(OH)₂ (Manganese Hydroxide — Battery Grade)</option>
                        <option className="bg-[#05140C] text-white" value="MnCO₃ (Manganese Carbonate)">MnCO₃ (Manganese Carbonate — Battery Grade)</option>
                        {/* Anode Materials */}
                        <option className="bg-[#05140C] text-white" value="C (Graphite)">C (Graphite — Battery Grade Anode Material)</option>
                        {/* Custom Option */}
                        <option className="bg-[#05140C] text-white" value="Custom specification">Custom Compound Composition Specifications</option>
                      </select>
                    </div>
                  )}

                  {activeTrack === 'invest' && (
                    <div>
                      <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1.5">
                        Investor Class
                      </label>
                      <select
                        value={investorType}
                        onChange={(e) => setInvestorType(e.target.value)}
                        className="w-full text-xs px-3 py-2 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2"
                      >
                        <option className="bg-[#05140C] text-white" value="Strategic Fund">Venture / Private Equity Fund</option>
                        <option className="bg-[#05140C] text-white" value="Clean-Tech LP">Strategic Corporate / Clean-Tech Partner</option>
                        <option className="bg-[#05140C] text-white" value="Impact Capital">E-Waste/Battery Processing Recycler</option>
                        <option className="bg-[#05140C] text-white" value="Institutional Support">Impact / Climate Focus Capital</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Core Unified elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full text-xs px-3 py-2.5 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2 placeholder-white/35"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1">
                      Professional Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full text-xs px-3 py-2.5 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2 placeholder-white/35"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/40">
                      <Building className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2 placeholder-white/35"
                      placeholder="e.g. CleanCells India Pvt Ltd"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold tracking-wider uppercase text-white/70 block mb-1">
                    Specific Message Specs
                  </label>
                  <textarea
                    rows={3}
                    className="w-full text-xs px-3 py-2.5 bg-[#0B1E14]/65 border border-white/10 text-white rounded-lg focus:outline-none focus:border-g2 focus:ring-1 focus:ring-g2 placeholder-white/35"
                    placeholder="Describe any battery metrics, technical specifications, or target investment parameters..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-g3 hover:bg-g2 text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-200 flex items-center justify-center gap-2 select-none cursor-pointer disabled:opacity-75 shadow-lg shadow-g5/20"
                >
                  {submitting ? 'Constructing Proposal...' : 'Create Partnership Request'}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-g1/20 border border-g2/20 text-g2 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Partnership Proposal Formed!</h3>
                  <p className="text-xs text-white/80 mt-2 max-w-md mx-auto leading-relaxed">
                    To maintain strict security and coordinate with our technical mail servers, click the button below to initiate your secure draft with pre-formatted specifications directly to us.
                  </p>
                </div>

                {/* Visual Draft Content Previewbox */}
                <div className="p-4 bg-[#05140C]/65 border border-white/10 rounded-xl text-left max-h-[160px] overflow-y-auto font-mono text-[9px] text-white/80 leading-normal whitespace-pre-wrap select-all">
                  To: info@relementx.com
                  <br />
                  Subject: RelementX Inquiry — {name} ({company || 'Company'})
                  <br />
                  <br />
                  Hello RelementX Team,
                  <br />
                  My name is {name} from {company || 'our company'}.
                  <br />
                  {activeTrack === 'recycle' && `Selected Feedstock Category: ${feedstockType}, Chemistry: ${chemistry} at estimated volume of ${volume}`}
                  {activeTrack === 'purchase' && `Target Recycled Compound requested: ${productTarget}`}
                  {activeTrack === 'invest' && `Investor target profile class: ${investorType}`}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getMailtoLink()}
                    onClick={() => {
                      // Small delay before resetting
                      setTimeout(() => resetForm(), 2000);
                    }}
                    className="flex-1 py-3 bg-g1 hover:bg-g1/80 text-g5 font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    Open Secure Mail Draft
                  </a>
                  <button
                    onClick={resetForm}
                    className="px-5 py-3 border border-white/20 hover:bg-white/5 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Modify Details
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Big original styled email link anchor, centered */}
        <div className="text-center mt-16 select-all">
          <p className="text-xs text-white uppercase font-bold tracking-widest mb-2 opacity-60">
            Direct Corporate Contact Desk
          </p>
          <a
            href="mailto:info@relementx.com"
            className="inline-block text-lg md:text-3xl font-black text-white select-all border-b-2 border-g2/60 pb-1.5 transition-all duration-300 hover:text-g2 hover:border-g2 leading-none"
          >
            info@relementx.com
          </a>
        </div>
      </div>
    </section>
  );
}
