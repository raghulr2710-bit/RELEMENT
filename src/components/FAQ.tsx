import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, MessageSquare, HelpCircle } from 'lucide-react';
import { faqData } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'technology', label: 'Proprietary Technology' },
    { id: 'products', label: 'Battery-Grade Compounds' },
    { id: 'environmental', label: 'Environmental Impact' },
    { id: 'general', label: 'Compliance & Off-Take' },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaq = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="px-6 md:px-16 py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute left-[-15%] top-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none bg-radial from-g3/5 to-transparent" />
      <div className="absolute right-[-10%] bottom-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none bg-radial from-g2/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g3 mb-4">
            <span className="block w-4 h-[2px] bg-g3" />
            Common Inquiries
            <span className="block w-4 h-[2px] bg-g3" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-ink leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base font-light text-mid max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our organic recycling chemical process, battery specifications, and commercial compliance models.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-mid">
            <Search className="w-5 h-5 opacity-60" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs (e.g. LFP, purity, EPR, yield)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-black/10 rounded-full focus:outline-none focus:border-g2 focus:ring-2 focus:ring-g1/25 text-sm text-ink placeholder-mid/50 shadow-inner duration-200"
          />
        </div>

        {/* Dynamic Category Filtering bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-black/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenId(null); // Close active when switching filters
              }}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-g4 text-white hover:bg-g4/95 shadow-md shadow-g4/15'
                  : 'bg-white/80 border border-black/7 text-mid hover:bg-g4 hover:text-white hover:border-g4'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion container */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaq.length > 0 ? (
              filteredFaq.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-g3 shadow-lg shadow-g3/4'
                        : 'border-black/5 hover:border-g3/30 hover:shadow-md'
                    }`}
                  >
                    {/* Accordion Trigger */}
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start gap-4 justify-between select-none cursor-pointer group"
                    >
                      <span className={`text-sm md:text-base font-bold leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-g3' : 'text-ink group-hover:text-g3'
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`mt-0.5 p-1.5 rounded-lg transition-colors shrink-0 ${
                        isOpen ? 'bg-g3/8 text-g3' : 'bg-black/3 text-mid'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Accordion Content wrapper */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: isOpen ? 'auto' : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-7 text-xs md:text-sm font-light text-mid leading-relaxed border-t border-black/5 pt-4 bg-light/35">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-black/5 p-8 max-w-md mx-auto">
                <HelpCircle className="w-10 h-10 text-mid mx-auto mb-4 opacity-50" />
                <h3 className="text-sm font-bold text-ink mb-1">No FAQs match your search</h3>
                <p className="text-xs text-mid">Try terms like &quot;LFP&quot;, &quot;yield&quot;, &quot;organic&quot;, or &quot;specification&quot; instead.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Dedicated Support block */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4.5">
            <div className="p-3 bg-g1/25 rounded-xl text-g3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink">Have a highly custom engineering query?</h4>
              <p className="text-xs text-mid font-light">Speak directly with our technical refinery specialists for precise integration guides.</p>
            </div>
          </div>
          <a
            href="mailto:info@relementx.com"
            className="px-5 py-2.5 bg-g4 hover:bg-g3 text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200"
          >
            Email Technical Team
          </a>
        </div>
      </div>
    </section>
  );
}
