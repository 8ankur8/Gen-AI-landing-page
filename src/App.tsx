/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { 
  Brain, 
  ChevronRight, 
  Cpu, 
  Globe, 
  Layers, 
  MessageSquare, 
  Play, 
  Shield, 
  Sparkles, 
  Trophy, 
  Zap,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Brain className="text-black w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">GENAI ACADEMY</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Curriculum", "Roadmap", "Pricing", "Community"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Curriculum", "Roadmap", "Pricing", "Community"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-white/60" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="w-full py-3 bg-white text-black font-bold rounded-xl mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Stunning Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-700" />
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3 h-3" />
          The Future of Intelligence is Here
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-gradient"
        >
          MASTER THE <br /> GENERATIVE ERA
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Gamified learning paths designed for school grads. Build, prompt, and deploy 
          the next generation of AI applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            Start Your Quest <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <Play className="w-4 h-4 fill-current" /> Watch Trailer
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{ 
              y: [null, Math.random() * -100, Math.random() * 100],
              x: [null, Math.random() * -50, Math.random() * 50],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Active Students", value: "50K+" },
    { label: "AI Models Built", value: "120K+" },
    { label: "Career Success", value: "94%" },
    { label: "Learning Hours", value: "1M+" },
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/40 uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LearningPath = () => {
  const levels = [
    { title: "Foundations", desc: "Understand neural networks and basic LLM architecture.", icon: <Layers className="w-6 h-6" /> },
    { title: "Prompt Engineering", desc: "Master the art of communicating with AI models.", icon: <MessageSquare className="w-6 h-6" /> },
    { title: "Image Generation", desc: "Dive into Diffusion models and creative AI art.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Agentic AI", desc: "Build autonomous agents that can solve complex tasks.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Deployment", desc: "Ship your AI applications to the global market.", icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <section id="roadmap" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">THE QUEST LOG</h2>
          <p className="text-white/60 max-w-2xl mx-auto">A gamified roadmap designed to take you from zero to AI architect.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 hidden md:block" />

          <div className="space-y-24">
            {levels.map((level, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${i % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start"}`}>
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6 text-white">
                      {level.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Level {i + 1}: {level.title}</h3>
                    <p className="text-white/60 leading-relaxed max-w-md">{level.desc}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    {i + 1}
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const cards = [
    { title: "LLM Mastery", icon: <Brain />, color: "from-white/20 to-transparent" },
    { title: "Diffusion Models", icon: <Sparkles />, color: "from-white/20 to-transparent" },
    { title: "AI Ethics", icon: <Shield />, color: "from-white/20 to-transparent" },
    { title: "Prompt Hacking", icon: <Zap />, color: "from-white/20 to-transparent" },
  ];

  return (
    <section id="curriculum" className="py-32 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">WHAT'S INSIDE THE VAULT?</h2>
            <p className="text-white/60">Comprehensive modules covering the most in-demand AI skills today.</p>
          </div>
          <button className="px-6 py-3 glass rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
            View Full Syllabus <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl glass glow-hover overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-white/40">Learn the core principles and advanced techniques used by industry leaders.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const demos = [
    { title: "Text Gen", desc: "Watch how transformers predict the next token in real-time.", code: "const ai = new GenAI();\nawait ai.generate('The future is...');" },
    { title: "Image Gen", desc: "Visualize the denoising process of latent diffusion.", code: "diffusion.denoise(steps: 50,\nguidance: 7.5);" },
    { title: "Agents", desc: "See how autonomous agents break down complex goals.", code: "agent.plan('Build a website');\nagent.execute();" },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase">Interactive Visualizer</h2>
            <div className="space-y-6">
              {demos.map((demo, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${activeTab === i ? "bg-white text-black" : "hover:bg-white/5 text-white/60"}`}
                >
                  <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                  <p className={`text-sm ${activeTab === i ? "text-black/70" : "text-white/40"}`}>{demo.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-black rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <pre className="font-mono text-sm md:text-base text-white/80 leading-relaxed">
                <code>{demos[activeTab].code}</code>
              </pre>
              
              {/* Visual Feedback */}
              <div className="mt-12 h-32 flex items-center justify-center border border-white/5 rounded-2xl bg-white/5 relative overflow-hidden">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex gap-4"
                >
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      animate={{ 
                        height: [20, 40, 20],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: j * 0.1 
                      }}
                      className="w-2 bg-white rounded-full"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Alex Chen", role: "High School Senior", text: "The gamified approach made complex AI concepts feel like playing a strategy game. I built my first LLM agent in 2 weeks!", avatar: "AC" },
    { name: "Sarah Miller", role: "CS Freshman", text: "GenAI Academy bridged the gap between theory and actual deployment. The community is incredibly supportive.", avatar: "SM" },
    { name: "Leo Zhang", role: "AI Researcher", text: "Brilliant for anyone starting out. The curriculum is cutting-edge and constantly updated with the latest research.", avatar: "LZ" },
  ];

  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">VOICES FROM THE ACADEMY</h2>
          <div className="flex items-center justify-center gap-1 text-white">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass flex flex-col justify-between"
            >
              <p className="text-white/80 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Apprentice", price: "Free", features: ["Basic Foundations", "Community Access", "Weekly Workshops"], cta: "Start Free", popular: false },
    { name: "Architect", price: "$29", features: ["Full Curriculum", "Advanced Projects", "1-on-1 Mentorship", "Certification"], cta: "Join Pro", popular: true },
    { name: "Legend", price: "$99", features: ["Lifetime Access", "Industry Placement", "Early Access to Models", "Private Discord"], cta: "Go Legend", popular: false },
  ];

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">CHOOSE YOUR PATH</h2>
          <p className="text-white/60">Unlock the full potential of Generative AI with our flexible plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-10 rounded-[40px] flex flex-col ${plan.popular ? "bg-white text-black scale-105 z-10" : "glass text-white"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-sm opacity-60">/mo</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${plan.popular ? "text-black" : "text-white/40"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-transform hover:scale-105 ${plan.popular ? "bg-black text-white" : "bg-white text-black"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Is this suitable for absolute beginners?", a: "Yes! Our foundations track starts from the very basics of how computers think." },
    { q: "Do I need a high-end GPU?", a: "No. All our learning environments are cloud-based. You just need a browser." },
    { q: "What kind of projects will I build?", a: "Everything from custom chatbots to AI-powered art galleries and autonomous coding agents." },
    { q: "Is there a certification?", a: "Yes, our Architect and Legend paths include industry-recognized certifications." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-brand-gray/20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">FREQUENTLY ASKED</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl glass overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Brain className="text-black w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight uppercase">GenAI Academy</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Empowering the next generation of creators, builders, and thinkers to master 
              the most transformative technology of our time.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[Globe, MessageSquare, Shield, Zap].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <div className="text-xs text-white/20">
            © 2026 GENAI ACADEMY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-8 text-xs font-bold tracking-widest text-white/40 uppercase">
            <span>Built with Intelligence</span>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Rank #1 AI Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <LearningPath />
        <Curriculum />
        <InteractiveDemo />
        <Testimonials />
        <Pricing />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-white z-0" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-black">
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-none">READY TO <br /> LEVEL UP?</h2>
            <p className="text-xl font-medium mb-12 opacity-70 max-w-2xl mx-auto">
              Join 50,000+ students mastering the future of technology. 
              Your AI journey starts today.
            </p>
            <button className="px-12 py-6 bg-black text-white font-bold rounded-2xl text-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Claim Your Spot <Zap className="w-6 h-6 fill-current" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
