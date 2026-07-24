/**
 * SkillDNA Partners Page
 * Design: Bioluminescent Data Organism
 * Showcases 2 Kites Partners and partnership opportunities
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Handshake,
  ArrowRight,
  Building2,
  Globe,
  Users,
  Award,
  CheckCircle2,
  ExternalLink,
  Mail
} from "lucide-react";

// Placeholder for 2 Kites Partners - will be populated with actual data
const kitesPartners = [
  {
    name: "Kites Partner 1",
    logo: null, // Will be replaced with actual logo
    description: "Partner description coming soon. This partner brings unique value to the SkillDNA ecosystem.",
    website: "#",
    specialization: "Coming Soon",
    benefits: [
      "Benefit 1 - To be updated",
      "Benefit 2 - To be updated",
      "Benefit 3 - To be updated"
    ]
  },
  {
    name: "Kites Partner 2",
    logo: null, // Will be replaced with actual logo
    description: "Partner description coming soon. This partner brings unique value to the SkillDNA ecosystem.",
    website: "#",
    specialization: "Coming Soon",
    benefits: [
      "Benefit 1 - To be updated",
      "Benefit 2 - To be updated",
      "Benefit 3 - To be updated"
    ]
  }
];

const partnershipBenefits = [
  {
    icon: Globe,
    title: "Expanded Reach",
    description: "Access our growing network of verified professionals and employers."
  },
  {
    icon: Users,
    title: "Shared Expertise",
    description: "Collaborate on innovative solutions for skill verification and talent management."
  },
  {
    icon: Award,
    title: "Co-Branding",
    description: "Joint marketing opportunities and brand visibility across platforms."
  },
  {
    icon: Building2,
    title: "Integration Support",
    description: "Technical support for seamless API and platform integrations."
  }
];

export default function Partners() {
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
            <Link href="/partners" className="text-primary font-medium">Partners</Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Strategic Partnerships</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]">
              Our
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We collaborate with industry leaders to bring you the most comprehensive 
              skill verification and talent management ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kites Partners Section */}
      <section className="relative py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Kites Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our flagship partnership program connecting innovation with opportunity.
            </p>
          </motion.div>

          {/* Vimeo Video Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="glass-card rounded-2xl p-4 overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1138927162?h=b594543ab1&title=0&byline=0&portrait=0"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="2 Kites Partners Video"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {kitesPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 relative overflow-hidden group"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Partner Logo Placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 border border-border/50">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="w-16 h-16 object-contain" />
                    ) : (
                      <Building2 className="w-10 h-10 text-muted-foreground" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{partner.name}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm mb-4">
                    {partner.specialization}
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{partner.description}</p>

                  <div className="space-y-2 mb-6">
                    {partner.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full" disabled={partner.website === "#"}>
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="relative py-20 bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Partnership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes a SkillDNA partnership valuable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
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
              <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
                Become a Partner
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in partnering with SkillDNA? Let's explore how we can create value together.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Partnership Team
                </Button>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn About Us
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
