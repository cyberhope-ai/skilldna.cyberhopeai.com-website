/**
 * SkillDNA Features Page
 * Design: Dark DNA aesthetic + Modern Startup (Stripe/Linear/Vercel style)
 * Branding: CyberHopeAI company, Powered by PrecognitionOS
 */

import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Brain,
  Target,
  Zap,
  BarChart3,
  FileText,
  TrendingUp,
  Heart,
  ArrowRight,
  Upload,
  RefreshCw,
  Sparkles,
  Eye,
  Shield,
  Layers,
  Image,
  Video,
  Database,
  Menu,
  X,
  Star
} from "lucide-react";

const features = [
  {
    category: "Your Secure Vault",
    icon: Upload,
    color: "#22d3ee",
    description: "Upload anything that describes you — the platform does the rest",
    items: [
      {
        title: "Universal File Support",
        description: "PDFs, DOCX, spreadsheets, images, videos — any format that captures who you are becomes part of your profile.",
        icon: FileText
      },
      {
        title: "AI Signal Extraction",
        description: "Our platform automatically extracts structured signals from your uploads and generates evidence-backed claims.",
        icon: Brain
      },
      {
        title: "Secure Storage",
        description: "Your data is encrypted and stored securely. You own it, you control it, and it's portable across platforms.",
        icon: Shield
      }
    ]
  },
  {
    category: "NASA Dashboard for Humans",
    icon: BarChart3,
    color: "#a855f7",
    description: "A mission control center for your human potential",
    items: [
      {
        title: "Clean Identity Core",
        description: "Your central profile presents who you are at a glance — clear, visual, and instantly understandable.",
        icon: Target
      },
      {
        title: "Modular Tiles",
        description: "Cognition, behavior, motivation, interests — each dimension of you displayed in beautiful, interactive modules.",
        icon: Layers
      },
      {
        title: "Evidence Layer",
        description: "Every claim can be traced back to proof. Radical trust through radical transparency.",
        icon: Eye
      }
    ]
  },
  {
    category: "Lifelong Evolution",
    icon: RefreshCw,
    color: "#10b981",
    description: "Your dashboard grows and evolves as you do",
    items: [
      {
        title: "Automatic Updates",
        description: "As you learn, work, and grow, your dashboard updates automatically — no manual entry required.",
        icon: RefreshCw
      },
      {
        title: "What Changed View",
        description: "See your evolution over time — new skills acquired, strengths that emerged, growth areas addressed.",
        icon: TrendingUp
      },
      {
        title: "Decades of Data",
        description: "Track your journey from first job to retirement. Your SkillDNA is infrastructure for life.",
        icon: Database
      }
    ]
  },
  {
    category: "Self-Understanding",
    icon: Sparkles,
    color: "#f59e0b",
    description: "Finally see yourself with clarity",
    items: [
      {
        title: "Cognitive Architecture",
        description: "Understand your unique thinking patterns, how you process information, and where you excel.",
        icon: Brain
      },
      {
        title: "Behavioral Insights",
        description: "Discover your natural tendencies, communication style, and how you interact with others.",
        icon: Heart
      },
      {
        title: "Motivation Mapping",
        description: "Identify what drives you, what energizes you, and the conditions where you thrive.",
        icon: Zap
      }
    ]
  }
];

const fileTypes = [
  { icon: FileText, label: "Documents", types: "PDF, DOCX, TXT", color: "#22d3ee" },
  { icon: Image, label: "Images", types: "PNG, JPG, Screenshots", color: "#a855f7" },
  { icon: Video, label: "Videos", types: "MP4, Recordings", color: "#ec4899" },
  { icon: BarChart3, label: "Data", types: "XLS, CSV, Reports", color: "#10b981" }
];

export default function Features() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/employers", label: "For Employers" },
    { href: "/pricing", label: "Pricing" },
    { href: "/partners", label: "Partners" },
    { href: "/about", label: "About" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v12M8 8c0 2 1.5 3 4 3s4-1 4-3M8 16c0-2 1.5-3 4-3s4 1 4 3" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">SkillDNA</span>
                <span className="text-[10px] text-cyan-400/80 tracking-wider uppercase">by CyberHopeAI</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 ${link.href === '/features' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
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
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/25"
              >
                Get Started Free
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

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5"
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
                    Get Started Free
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Platform Features</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Understand Yourself
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              SkillDNA transforms scattered documents and assessments into a living, evolving dashboard 
              that makes self-understanding daily, visual, and addictive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* File Types Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Upload Anything That Describes You
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your secure vault accepts any file format. We extract the signals, you get the insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {fileTypes.map((type, i) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center hover:border-white/10 transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${type.color}15` }}
                >
                  <type.icon className="w-6 h-6" style={{ color: type.color }} />
                </div>
                <div className="font-semibold mb-1">{type.label}</div>
                <div className="text-gray-500 text-sm">{type.types}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-32">
            {features.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon className="w-7 h-7" style={{ color: category.color }} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {category.category}
                    </h2>
                    <p className="text-gray-500">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: category.color }} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It In <span className="text-cyan-400">Action</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Experience the Human Potential Dashboard with a live demo profile.
            </p>
            <Button 
              size="lg"
              onClick={() => setLocation('/dashboard')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg px-8 py-6 shadow-xl shadow-cyan-500/25"
            >
              View Live Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="/manus-storage/nasa-human-dashboard_37b9e5d9.png" 
              alt="SkillDNA Dashboard Preview"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to See Yourself <span className="text-cyan-400">Clearly</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Create your free SkillDNA profile and discover your human potential.
            </p>
            <Button 
              size="lg"
              onClick={() => setLocation('/login')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg px-8 py-6 shadow-xl shadow-cyan-500/25"
            >
              Create Your Free Profile
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
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
                  <span className="text-xl font-bold">SkillDNA</span>
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
              <h4 className="font-semibold mb-4 text-sm">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="/employers" className="hover:text-white transition-colors">For Employers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
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
              <Star className="w-3 h-3 text-cyan-500" />
              <span>A CyberHopeAI Innovation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
