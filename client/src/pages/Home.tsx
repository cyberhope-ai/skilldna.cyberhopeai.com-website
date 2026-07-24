/**
 * SkillDNA Homepage - Immersive Experience
 * Design: Animated DNA particles, parallax scrolling, floating elements
 * Branding: SkillDNA prominently featured, CyberHopeAI, Powered by PrecognitionOS
 * Focus: Human Potential Dashboard - NOT "profile"
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Zap,
  Brain,
  TrendingUp,
  Shield,
  Sparkles,
  Play,
  Upload,
  BarChart3,
  RefreshCw,
  Users,
  Building2,
  ChevronDown
} from "lucide-react";

// Floating DNA Particle Component
function DNAParticle({ delay, duration, startX, startY, size }: { delay: number; duration: number; startX: number; startY: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
        background: `radial-gradient(circle, rgba(34, 211, 238, 0.8) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)`,
        boxShadow: `0 0 ${size * 2}px rgba(34, 211, 238, 0.5)`,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 50 - 25, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated DNA Helix SVG
function AnimatedDNAHelix() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${100 + i * 100},0 Q${150 + i * 100},250 ${100 + i * 100},500 Q${50 + i * 100},750 ${100 + i * 100},1000`}
            fill="none"
            stroke="url(#dnaGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>
    </div>
  );
}

// Floating particles background
function ParticleField() {
  const particles = [...Array(50)].map((_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 8,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    size: 2 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <DNAParticle key={p.id} {...p} />
      ))}
    </div>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 0.3], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/employers", label: "For Employers" },
    { href: "/pricing", label: "Pricing" },
    { href: "/partners", label: "Partners" },
    { href: "/about", label: "About" }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
      {/* Animated Background Layer */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/manus-storage/hero-dna-cosmos_302d0956.png)',
            filter: 'brightness(0.6)',
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/30 via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/50 via-transparent to-[#050508]/50" />
        
        {/* Animated Particles */}
        <ParticleField />
        
        {/* Animated DNA Helix Lines */}
        <AnimatedDNAHelix />
        
        {/* Pulsing Glow Effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v12M8 8c0 2 1.5 3 4 3s4-1 4-3M8 16c0-2 1.5-3 4-3s4 1 4 3" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SkillDNA</span>
                <span className="text-[10px] text-cyan-400/80 tracking-wider uppercase font-medium">by CyberHopeAI</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5">
                  Sign In
                </Button>
              </Link>
              <Button 
                onClick={() => setLocation('/login')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  onClick={() => { setLocation('/login'); setMobileMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ y: textY, opacity }}
        >
          {/* Powered by Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Powered by <span className="text-cyan-400 font-semibold">PrecognitionOS</span></span>
          </motion.div>

          {/* Main Headline - SkillDNA Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skill
              </span>
              <span className="text-white">DNA</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light"
          >
            The World's First
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Human Potential Dashboard
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A living dashboard that turns scattered assessments, experiences, and achievements 
            into a single, evolving <span className="text-cyan-400">capability genome</span>. 
            See yourself with clarity. Evolve forever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg"
              onClick={() => setLocation('/login')}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white text-lg px-8 py-6 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all border-0 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Your SkillDNA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setLocation('/dashboard')}
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-6 backdrop-blur-sm group"
            >
              <Play className="w-5 h-5 mr-2" />
              See Live Demo
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Free Forever for Individuals</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-500" />
              <span>Privacy-First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </section>

      {/* What is SkillDNA Section */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              A <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">NASA Dashboard</span> for Humans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mission control for your human potential. Upload anything that describes you — 
              PDFs, docs, images, videos — and watch as AI extracts signals and builds your 
              continuously evolving dashboard.
            </p>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10"
          >
            <img 
              src="/manus-storage/dashboard-glow_d18e59dc.png" 
              alt="SkillDNA Dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
            
            {/* Floating Labels */}
            <motion.div 
              className="absolute top-1/4 left-[10%] px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Personality Metrics
            </motion.div>
            <motion.div 
              className="absolute top-1/3 right-[10%] px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Skill Visualizations
            </motion.div>
            <motion.div 
              className="absolute bottom-1/3 left-[15%] px-4 py-2 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 text-pink-300 text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              Evidence Layer
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 md:py-32 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-cyan-400">SkillDNA</span> Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Upload, title: "Upload Anything", desc: "PDFs, docs, images, videos — any format that captures who you are", color: "#22d3ee" },
              { icon: Brain, title: "AI Extracts Signals", desc: "Automatically generates evidence-backed claims from your data", color: "#a855f7" },
              { icon: BarChart3, title: "See Your Dashboard", desc: "Clean, visual, addictive mission control for your potential", color: "#ec4899" },
              { icon: RefreshCw, title: "Evolve Forever", desc: "Updates automatically as you learn, work, and grow", color: "#10b981" }
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center text-sm font-bold text-gray-500">
                  {i + 1}
                </div>
                <div 
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifelong Evolution Section */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Lifelong. Living.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Evolving.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                As you learn, work, and grow, your SkillDNA updates automatically — 
                showing "what changed," new capabilities, and emerging strengths over time. 
                This is infrastructure for life.
              </p>
              <div className="space-y-4">
                {[
                  "Decades of data in one living dashboard",
                  "See your evolution over time",
                  "Automatic updates — no manual entry",
                  "Your data, your control, portable forever"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/manus-storage/hero-human-potential_109dc688.png" 
                alt="Human Potential Visualization"
                className="rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props - Individuals vs Employers */}
      <section className="relative z-10 py-24 md:py-32 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              The End of the Resume.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Beginning of Radical Trust.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Individuals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Individuals</h3>
              <p className="text-gray-400 mb-6">
                Your SkillDNA is always <span className="text-cyan-400 font-semibold">FREE</span>. 
                See yourself with clarity, understand your potential, and showcase your authentic capabilities.
              </p>
              <ul className="space-y-3">
                {["Free forever", "Own your data", "Privacy-first design", "Portable across platforms"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For Employers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Employers</h3>
              <p className="text-gray-400 mb-6">
                Hire from verified reality instead of self-reported fiction. 
                Subscriptions for hiring, team formation, and workforce analytics at scale.
              </p>
              <ul className="space-y-3">
                {["Evidence-backed hiring", "Team formation tools", "Workforce analytics", "Skills-based matching"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to See Yourself
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                With Clarity?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the movement. Create your free SkillDNA and discover your human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setLocation('/login')}
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white text-lg px-10 py-6 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all border-0"
              >
                Start Your SkillDNA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setLocation('/employers')}
                className="border-white/20 text-white hover:bg-white/10 text-lg px-10 py-6"
              >
                Enterprise Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/5 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v12M8 8c0 2 1.5 3 4 3s4-1 4-3M8 16c0-2 1.5-3 4-3s4 1 4 3" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">SkillDNA</span>
                  <div className="text-xs text-gray-500">by CyberHopeAI</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                The world's first lifelong Human Potential Dashboard. 
                Free for individuals, enterprise for organizations.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                <Zap className="w-3 h-3 text-cyan-400" />
                Powered by PrecognitionOS
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="/employers" className="hover:text-white transition-colors">For Employers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; 2024 CyberHopeAI. All rights reserved. Patent Pending.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="text-cyan-500">★</span>
              <span>A CyberHopeAI Innovation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
