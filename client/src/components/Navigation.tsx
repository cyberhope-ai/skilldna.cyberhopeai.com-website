/**
 * Shared Navigation Component
 * Dark theme with CyberHopeAI branding and PrecognitionOS
 * Mobile-responsive with hamburger menu
 */

import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Menu, X, Zap } from "lucide-react";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v12M8 8c0 2 1.5 3 4 3s4-1 4-3M8 16c0-2 1.5-3 4-3s4 1 4 3" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">SkillDNA</span>
              <span className="text-[10px] text-cyan-400/80 tracking-wider uppercase">by CyberHopeAI</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-white/5 ${
                  currentPath === link.href ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPath === link.href 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                    Sign In
                  </Button>
                </Link>
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
  );
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#0a0a0f]">
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
  );
}
