import { WhyCard, MineralColumn, ProductFamily, ScaleCard, InvestorCard, FAQItem } from './types';

export const tickerItems: string[] = [
  'Battery-Grade Lithium Products',
  'Cobalt Recovery & Refining',
  'Nickel Compound Production',
  'Manganese Recovery',
  'Zero Solvent Extraction',
  'Reagent Recycling — Closed Loop',
  'Fully Organic Process',
  'No Toxic Chemicals',
  'In-House Developed Technology'
];

export const whyCards: WhyCard[] = [
  {
    num: '01',
    icon: '⚡',
    title: 'Powering the Energy Transition',
    description: 'Electric vehicles, grid storage, and renewable energy systems all depend on lithium, cobalt, nickel, and manganese. Recycling secures these critical inputs from existing batteries — reducing dependence on primary mining.'
  },
  {
    num: '02',
    icon: '🌍',
    title: 'Protecting the Environment',
    description: 'Spent batteries contain valuable materials that become hazardous waste if not properly recovered. Our process returns these materials to the supply chain cleanly — with zero toxic discharge and no landfill burden.'
  },
  {
    num: '03',
    icon: '🔄',
    title: 'Building a Circular Economy',
    description: "The critical minerals in today's battery become tomorrow's new cell. Closing this loop domestically reduces import dependence, creates local value, and makes clean energy truly circular and self-sustaining."
  },
  {
    num: '04',
    icon: '🏭',
    title: 'Supply Chain Security',
    description: "India's growing EV and electronics sectors need a reliable domestic supply of battery-grade materials. Recycling existing end-of-life assets builds that supply resilience without new extraction."
  },
  {
    num: '05',
    icon: '🌿',
    title: 'Lower Carbon Footprint',
    description: 'Recovering materials from batteries uses significantly less energy than primary mining and refining. Our organic, low-temperature process further minimises the carbon cost of every kilogram recovered.'
  },
  {
    num: '06',
    icon: '📜',
    title: 'Regulatory & EPR Compliance',
    description: 'Battery Waste Management Rules 2022 mandate responsible recycling. RelementX is built for full compliance — helping producers meet their EPR obligations while generating value from waste streams.'
  }
];

export const mineralColumns: MineralColumn[] = [
  {
    title: 'Electric Vehicles & Energy Storage',
    icon: '🔋',
    type: 'ev',
    items: [
      { symbol: 'Li', name: 'Lithium', sub: 'Cathode & electrolyte' },
      { symbol: 'Co', name: 'Cobalt', sub: 'NMC/NCA cathode' },
      { symbol: 'Ni', name: 'Nickel', sub: 'High-energy cathode' },
      { symbol: 'Mn', name: 'Manganese', sub: 'NMC cathode stabiliser' },
      { symbol: 'Cu', name: 'Copper', sub: 'Anode current collector' },
      { symbol: 'Al', name: 'Aluminium', sub: 'Cathode current collector' },
      { symbol: 'C', name: 'Graphite', sub: 'Anode material' }
    ]
  },
  {
    title: 'Solar Technology',
    icon: '☀️',
    type: 'solar',
    items: [
      { symbol: 'Si', name: 'Silicon', sub: 'PV cell semiconductor' },
      { symbol: 'Ag', name: 'Silver', sub: 'Conductive contacts' },
      { symbol: 'In', name: 'Indium', sub: 'Thin-film PV' },
      { symbol: 'Te', name: 'Tellurium', sub: 'CdTe solar cells' },
      { symbol: 'Ge', name: 'Germanium', sub: 'Multi-junction cells' },
      { symbol: 'Ga', name: 'Gallium', sub: 'CIGS thin-film' },
      { symbol: 'Se', name: 'Selenium', sub: 'CIGS absorber layer' }
    ]
  },
  {
    title: 'Wind & Grid Infrastructure',
    icon: '🌬️',
    type: 'grid',
    items: [
      { symbol: 'Fe', name: 'Iron', sub: 'Turbine structure' },
      { symbol: 'Nd', name: 'Neodymium', sub: 'Permanent magnets' },
      { symbol: 'Dynamic', name: 'Dysprosium', sub: 'High-temp magnets' },
      { symbol: 'Cu', name: 'Copper', sub: 'Generator windings' },
      { symbol: 'Zn', name: 'Zinc', sub: 'Corrosion protection' },
      { symbol: 'Mo', name: 'Molybdenum', sub: 'High-strength steel alloy' },
      { symbol: 'Cr', name: 'Chromium', sub: 'Stainless steel component' }
    ]
  }
];

export const productFamilies: ProductFamily[] = [
  {
    id: 'li',
    name: 'Lithium',
    products: [
      { symbol: 'Li₂CO₃', name: 'Lithium Carbonate', grade: 'Battery Grade' },
      { symbol: 'Li₃PO₄', name: 'Lithium Phosphate', grade: 'Battery Grade' },
      { symbol: 'LiPF₆', name: 'Lithium Electrolyte Salt', grade: 'Battery Grade' }
    ]
  },
  {
    id: 'co',
    name: 'Cobalt',
    products: [
      { symbol: 'CoC₂O₄', name: 'Cobalt Oxalate', grade: 'Battery Grade' },
      { symbol: 'CoSO₄', name: 'Cobalt Sulphate', grade: 'Battery Grade' },
      { symbol: 'Co₃O₄', name: 'Cobalt Oxide', grade: 'Battery Grade' },
      { symbol: 'Co(OH)₂', name: 'Cobalt Hydroxide', grade: 'Battery Grade' },
      { symbol: 'CoCO₃', name: 'Cobalt Carbonate', grade: 'Battery Grade' }
    ]
  },
  {
    id: 'ni',
    name: 'Nickel',
    products: [
      { symbol: 'NiC₂O₄', name: 'Nickel Oxalate', grade: 'Battery Grade' },
      { symbol: 'NiSO₄', name: 'Nickel Sulphate', grade: 'Battery Grade' },
      { symbol: 'NiO', name: 'Nickel Oxide', grade: 'Battery Grade' },
      { symbol: 'Ni(OH)₂', name: 'Nickel Hydroxide', grade: 'Battery Grade' },
      { symbol: 'NiCO₃', name: 'Nickel Carbonate', grade: 'Battery Grade' }
    ]
  },
  {
    id: 'mn',
    name: 'Manganese',
    products: [
      { symbol: 'MnC₂O₄', name: 'Manganese Oxalate', grade: 'Battery Grade' },
      { symbol: 'MnSO₄', name: 'Manganese Sulphate', grade: 'Battery Grade' },
      { symbol: 'MnO₂', name: 'Manganese Dioxide', grade: 'Battery Grade' },
      { symbol: 'Mn(OH)₂', name: 'Manganese Hydroxide', grade: 'Battery Grade' },
      { symbol: 'MnCO₃', name: 'Manganese Carbonate', grade: 'Battery Grade' }
    ]
  },
  {
    id: "Cam",
    name: "Cathode material",
    products: [
      { symbol: 'LiFePO4', name: 'Lithium Iron Phosphate', grade: 'Battery Grade' },
      { symbol: 'NMC', name: 'Nickel Manganese Cobalt Oxide ', grade: 'Battery Grade' },
    ]
  },
  {
    id: "PCM",
    name: 'Pre-cam material ',
    products: [
      {
        symbol: 'MHP',
        name: 'Metal hydroxide precipitate',
        grade: 'Battery Grade'
      }
    ]
  }
];

export const scalabilityCards: ScaleCard[] = [
  {
    id: 1,
    label: 'Lab →',
    title: 'Technology Validated',
    description: 'Our process has been developed and validated at laboratory scale, demonstrating consistent battery-grade purity and greater than 95% material yield across multiple battery chemistries.',
    styleType: 'green'
  },
  {
    id: 2,
    label: 'Pilot',
    title: 'Scaling Up Now',
    description: 'We are currently advancing our technology from laboratory to pilot and industrial scale — refining process parameters, equipment specification, and quality assurance protocols for full deployment.',
    styleType: 'light'
  },
  {
    id: 3,
    label: '→ Plant',
    title: 'Industrial Deployment',
    description: 'Our modular process design allows plants to be sized and configured precisely to customer feedstock volumes and product requirements — from dedicated single-product lines to full multi-metal facilities.',
    styleType: 'mid'
  }
];

export const investorCards: InvestorCard[] = [
  {
    icon: '🔬',
    title: 'Proprietary Technology',
    description: 'In-house developed, patent-protectable organic recovery process with no solvent extraction and full reagent reuse.'
  },
  {
    icon: '📈',
    title: 'Massive Market',
    description: "India's EV and clean energy boom is creating a rapidly growing stream of end-of-life batteries — and a surging demand for domestically recovered critical minerals."
  },
  {
    icon: '🌿',
    title: 'ESG-Aligned',
    description: 'Zero toxic waste, organic process, circular economy model — strong ESG credentials for impact-focused investors and sustainability-mandated funds.'
  },
  {
    icon: '📜',
    title: 'Policy Tailwind',
    description: 'Battery Waste Management Rules 2022 and EPR mandates create a regulatory-backed demand signal for compliant, high-quality recycling operations.'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'technology',
    question: 'How does RelementX’s organic recovery process differ from traditional recycling?',
    answer: 'Traditional recycling relies on hydro-metallurgical extraction using hazardous concentrated mineral acids (such as sulfuric or hydrochloric acids) or volatile organic solvents, which release toxic emissions and generate secondary chemical waste. RelementX uses bio-based organic chelators that extract targeted critical minerals at a low temperature, generating zero toxic effluent and cutting the processing carbon footprint by over 65%.'
  },
  {
    id: 'faq-2',
    category: 'technology',
    question: 'What battery chemistries can your system successfully process?',
    answer: 'Our organic recovery chemistry is highly versatile and feedstock-flexible. We successfully process end-of-life cells across both major families: Lithium Iron Phosphate (LFP) and Nickel Manganese Cobalt (NMC, including various configurations such as 523, 622, and 811), as well as Nickel Cobalt Aluminum (NCA).'
  },
  {
    id: 'faq-3',
    category: 'products',
    question: 'Are the recovered carbonates and sulfates truly battery-grade?',
    answer: 'Absolutely. We refine our compounds to meet or exceed international battery-grade standards (>99.5% purity). Every production batch undergoes strict ICP-OES spectroscopy testing in our laboratory to ensure trace metallic impurities (like copper, iron, or zinc) remain within the parts-per-million thresholds required by major cathode manufacturers.'
  },
  {
    id: 'faq-4',
    category: 'products',
    question: 'Can you customize products according to precise customer specifications?',
    answer: 'Yes. RelementX is built on customer-centric design. We can tailormake recovered metal complexes at specific moisture contents, grain size distributions (D50), or compound forms (e.g., custom cobalt hydroxides, manganous carbonates, or lithium salts) matching your existing supply chain requirements.'
  },
  {
    id: 'faq-5',
    category: 'environmental',
    question: 'Does the process produce heavy-metal secondary waste or hazardous wastewater?',
    answer: 'No. Our entire chemical chain operates as a fully closed loop. Process reagents undergo an in-line purification and recovery step, allowing them to be fully concentrated and cycled back into treatment. Structural components like stainless steel casings, copper foils, and aluminum current collectors are clean-separated and sent to specialized metal recyclers, resulting in zero toxic waste and zero landfill contribution.'
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'How does RelementX help EV and battery producers comply with India’s BWM/EPR rules?',
    answer: "India's Battery Waste Management (BWM) Rules 2022 mandate strict Extended Producer Responsibility (EPR) recycling targets for producers, importers, and vehicle OEMs. RelementX acts as a certified, registered recycling partner. We verify the collection of end-of-life battery logs, manage standard processing safely, and issue certified trace-back reports and recycling credits matching the regulatory requirements."
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'How can battery suppliers, gigafactories, or recyclers coordinate feedstock off-take?',
    answer: 'We establish structured feedstock buyback agreements with battery pack assemblers, cellular gigafactories, solar grid storage collectors, and vehicle salvage networks. We manage logistics protocols for active, damaged, or end-of-life battery modules under strict safety regulations, converting them back into active precursor inputs for domestic markets.'
  },
  {
    id: 'faq-8',
    category: 'environmental',
    question: 'What is the carbon footprint reduction compared to primary mined minerals?',
    answer: 'Recovering battery elements from existing recycled stock avoids the carbon-intensive steps of ore excavation, overland transport, and high-temperature heavy smelting. RelementX’s organic material circularization and low-temperature organic extraction reduce total greenhouse gas emission intensity by over 78% relative to primary material refinement.'
  }
];
