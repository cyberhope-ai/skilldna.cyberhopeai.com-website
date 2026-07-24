/**
 * SkillDNA For Employers Page
 * Design: Bioluminescent Data Organism
 * Showcases employer benefits and subscription options
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Sparkles,
  Brain,
  Target,
  Zap,
  CheckCircle2,
  Users,
  Building2,
  Search,
  Filter,
  BarChart3,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  ArrowRight,
  Play
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Talent Pool",
    description: "Access candidates with blockchain-verified skills. No more resume fraud or inflated credentials.",
    stat: "99.7%",
    statLabel: "Verification Accuracy"
  },
  {
    icon: Clock,
    title: "Faster Hiring",
    description: "Pre-verified candidates mean less time on background checks and skill assessments.",
    stat: "60%",
    statLabel: "Faster Time-to-Hire"
  },
  {
    icon: DollarSign,
    title: "Reduced Costs",
    description: "Eliminate bad hires and reduce turnover with candidates whose skills are proven.",
    stat: "$45K",
    statLabel: "Avg. Savings per Hire"
  },
  {
    icon: Target,
    title: "Better Matches",
    description: "AI-powered matching based on cognitive profiles, not just keywords.",
    stat: "3.2x",
    statLabel: "Better Retention"
  }
];

const features = [
  {
    title: "Advanced Talent Search",
    description: "Search by verified skills, cognitive profiles, leadership styles, and more.",
    icon: Search
  },
  {
    title: "Smart Filtering",
    description: "Filter candidates by verification level, experience, location, and availability.",
    icon: Filter
  },
  {
    title: "Team Compatibility",
    description: "See how candidates' cognitive profiles complement your existing team.",
    icon: Users
  },
  {
    title: "Analytics Dashboard",
    description: "Track hiring metrics, candidate quality, and ROI on your subscription.",
    icon: BarChart3
  },
  {
    title: "Bulk Verification",
    description: "Verify your existing employees' skills to build internal talent profiles.",
    icon: FileText
  },
  {
    title: "API Access",
    description: "Integrate SkillDNA verification into your existing ATS and HR systems.",
    icon: Zap
  }
];

const testimonials = [
  {
    quote: "SkillDNA cut our bad hire rate by 80%. The verified skills feature alone is worth 10x the subscription cost.",
    author: "Sarah Chen",
    role: "VP of Talent, TechCorp",
    company: "Fortune 500 Tech Company"
  },
  {
    quote: "We finally have confidence that candidates can actually do what they claim. Game changer for technical hiring.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "Series B Startup"
  },
  {
    quote: "The cognitive profiling helped us build more balanced teams. Our project success rate improved 40%.",
    author: "Emily Rodriguez",
    role: "Head of HR",
    company: "Global Consulting Firm"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Employers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-border/30">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-[family-name:var(--font-display)]">
                SkillDNA
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="/employers" className="text-primary font-medium">For Employers</Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">Partners</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary">For Employers</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]">
                Hire With
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stop guessing. Start knowing. SkillDNA gives you access to candidates 
                with blockchain-verified skills and AI-analyzed cognitive profiles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Request Demo
                  <Play className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1 font-[family-name:var(--font-mono)]">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{benefit.statLabel}</div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Powerful Employer Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find, verify, and hire the best talent.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and transform your hiring process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Subscribe", description: "Choose a plan that fits your hiring volume" },
              { step: 2, title: "Search", description: "Find candidates with verified skills you need" },
              { step: 3, title: "Analyze", description: "Review cognitive profiles and team compatibility" },
              { step: 4, title: "Hire", description: "Connect with confidence and close faster" }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Trusted by Leading Companies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already hiring smarter with SkillDNA.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">SkillDNA</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 SkillDNA. Your Skills. Verified. Visualized.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
