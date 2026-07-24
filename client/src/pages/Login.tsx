/*
 * SkillDNA Login Page
 * Design: Clean, unified layout with people enjoying SkillDNA
 * 
 * Modern login page with image carousel showing diverse people
 * using the platform across all ages and backgrounds.
 */

import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const testimonialImages = [
  {
    src: "/manus-storage/people-skilldna-1_1c315e96.png",
    quote: "SkillDNA helped me understand my true potential across my entire career journey.",
    author: "Sarah M., Marketing Director"
  },
  {
    src: "/manus-storage/people-skilldna-2_65e865af.png",
    quote: "Finally, a platform that captures who I really am - not just my resume.",
    author: "Michelle T., Tech Entrepreneur"
  },
  {
    src: "/manus-storage/people-skilldna-3_ebd55d2d.png",
    quote: "Sharing my SkillDNA with my family showed them my life's work in a whole new way.",
    author: "David L., Retired Executive"
  },
  {
    src: "/manus-storage/people-skilldna-4_e64256f7.png",
    quote: "Our team uses SkillDNA to build stronger, more aligned project groups.",
    author: "Team at InnovateTech"
  }
];

export default function Login() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % testimonialImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLocation("/dashboard");
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDemoLogin();
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/manus-storage/skilldna_logo_b4c30c81.png" alt="SkillDNA" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">SkillDNA</span>
          </Link>
          <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="min-h-screen flex">
        {/* Left Side - Image Carousel */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Background Image with Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={testimonialImages[currentImage].src}
                alt="People using SkillDNA"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50" />
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Quote */}
          <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl font-light text-white mb-4 leading-relaxed">
                  "{testimonialImages[currentImage].quote}"
                </p>
                <p className="text-cyan-400 font-medium">
                  — {testimonialImages[currentImage].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots & Arrows */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex gap-2">
                {testimonialImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImage ? "bg-cyan-400 w-8" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute top-24 left-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-white mb-1">8B+</div>
              <div className="text-white/70 text-sm">People Worldwide</div>
              <div className="text-cyan-400 text-xs mt-1">Free for Everyone</div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-20">
          <motion.div 
            className="max-w-md mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Welcome Text */}
            <div className="mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SkillDNA</span>
              </h1>
              <p className="text-slate-400 text-lg">
                Your lifelong Human Potential Dashboard awaits
              </p>
            </div>

            {/* Demo Login Button - Primary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Button
                onClick={handleDemoLogin}
                disabled={isLoading}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 mb-8"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    View Demo: Rick Barretto's SkillDNA
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-slate-500">or sign in with email</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 font-medium">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-slate-300 font-medium">
                    Password
                  </Label>
                  <button 
                    type="button"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-base font-semibold bg-slate-700 hover:bg-slate-600 text-white transition-all"
              >
                Sign in
              </Button>
            </form>

            {/* Sign up link */}
            <p className="mt-8 text-center text-slate-400">
              Don't have an account?{" "}
              <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Create your free SkillDNA
              </button>
            </p>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-slate-800">
              <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
                <span>🔒 Privacy-First</span>
                <span>⚡ AI-Powered</span>
                <span>🌍 Free Forever</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
