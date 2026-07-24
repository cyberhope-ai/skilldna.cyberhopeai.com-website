/**
 * SkillDNA About Page
 * Design: Bioluminescent Data Organism
 * Company story, mission, and team
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Globe,
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Truth in Talent",
    description: "We believe every professional deserves to have their authentic skills recognized and verified."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We're constantly pushing the boundaries of what's possible in professional identity verification."
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Technology should amplify human potential, not replace it. We design for people first."
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "Everyone should have the opportunity to prove their skills, regardless of background or pedigree."
  }
];

const milestones = [
  { year: "2023", title: "Founded", description: "SkillDNA was born from a vision to eliminate resume fraud" },
  { year: "2024", title: "Beta Launch", description: "First 1,000 professionals verified their skills" },
  { year: "2024", title: "Employer Platform", description: "Launched enterprise tools for verified hiring" },
  { year: "2025", title: "AI Integration", description: "Introduced cognitive profiling and career insights" }
];

const team = [
  {
    name: "Rick Barretto",
    role: "Founder & CEO",
    bio: "Serial entrepreneur with 20+ companies founded and 84+ patents. Creator of the personal video arcade industry, iRecord law enforcement tech, and The LAN Network esports training.",
    image: "/manus-storage/rick-headshot-profile_cb6fe28f.png"
  }
];

export default function About() {
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
            <Link href="/employers" className="text-muted-foreground hover:text-foreground transition-colors">For Employers</Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">Partners</Link>
            <Link href="/about" className="text-primary font-medium">About</Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent">Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]">
              Making Skills
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Verifiable
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the future of professional identity—where every skill claim is verified, 
              every credential is authentic, and every professional can prove their true capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 bg-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]">
                The Problem We're Solving
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In today's job market, resumes are broken. Studies show that up to 85% of candidates 
                  lie on their resumes, and employers have no reliable way to verify skill claims before hiring.
                </p>
                <p>
                  This creates a lose-lose situation: talented professionals struggle to stand out from 
                  fraudulent claims, while employers waste millions on bad hires and lengthy verification processes.
                </p>
                <p>
                  SkillDNA was founded to solve this fundamental problem. By combining blockchain verification, 
                  AI assessment, and cognitive profiling, we've created a new standard for professional identity—one 
                  where skills are proven, not just claimed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, i) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary behind SkillDNA.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-primary/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Verified Professionals" },
              { value: "500+", label: "Enterprise Clients" },
              { value: "99.7%", label: "Verification Accuracy" },
              { value: "60%", label: "Faster Hiring" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-[family-name:var(--font-mono)] mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
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
                Join the Movement
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the future of professional identity. Create your verified profile today.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/login">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Create Your SkillDNA
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/employers">
                  <Button size="lg" variant="outline">
                    For Employers
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
