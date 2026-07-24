/**
 * SkillDNA Pricing Page
 * Design: Bioluminescent Data Organism
 * Showcases pricing plans for individuals and employers
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Check,
  X,
  ArrowRight,
  Building2,
  User,
  Zap,
  Crown,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

const individualPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic profile features",
    features: [
      { text: "Basic profile creation", included: true },
      { text: "Up to 5 skill claims", included: true },
      { text: "Self-reported skills only", included: true },
      { text: "Public profile page", included: true },
      { text: "Verified credentials", included: false },
      { text: "AI cognitive assessment", included: false },
      { text: "Priority support", included: false },
      { text: "Advanced analytics", included: false }
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$19",
    period: "/month",
    description: "Full verification and AI insights",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Unlimited skill claims", included: true },
      { text: "Blockchain verification", included: true },
      { text: "AI cognitive assessment", included: true },
      { text: "Leadership style analysis", included: true },
      { text: "Career recommendations", included: true },
      { text: "Priority employer visibility", included: true },
      { text: "Advanced analytics", included: true }
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Executive",
    price: "$49",
    period: "/month",
    description: "Premium features for senior professionals",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Executive coaching insights", included: true },
      { text: "Board-ready profile", included: true },
      { text: "Historical parallels analysis", included: true },
      { text: "Private profile options", included: true },
      { text: "White-glove verification", included: true },
      { text: "1-on-1 profile consultation", included: true },
      { text: "API access for integrations", included: true }
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const employerPlans = [
  {
    name: "Startup",
    price: "$299",
    period: "/month",
    description: "For growing teams up to 50 employees",
    features: [
      { text: "Up to 50 candidate searches/mo", included: true },
      { text: "Basic skill verification", included: true },
      { text: "Candidate profiles access", included: true },
      { text: "Email support", included: true },
      { text: "Team compatibility analysis", included: false },
      { text: "API access", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Custom integrations", included: false }
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Business",
    price: "$799",
    period: "/month",
    description: "For companies with 50-500 employees",
    features: [
      { text: "Unlimited candidate searches", included: true },
      { text: "Full verification suite", included: true },
      { text: "Team compatibility analysis", included: true },
      { text: "Priority support", included: true },
      { text: "Basic API access", included: true },
      { text: "ATS integration", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "Custom integrations", included: false }
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with 500+ employees",
    features: [
      { text: "Everything in Business", included: true },
      { text: "Unlimited everything", included: true },
      { text: "Full API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "On-premise deployment option", included: true },
      { text: "SLA guarantee", included: true },
      { text: "Custom training & onboarding", included: true }
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "How does skill verification work?",
    answer: "Our AI analyzes multiple data points including uploaded credentials, work samples, peer endorsements, and assessment results. Verified skills are then recorded on our blockchain for immutable proof."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your billing cycle."
  },
  {
    question: "Is there a free trial for employer plans?",
    answer: "Yes, all employer plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers for annual plans, and can arrange invoicing for Enterprise customers."
  }
];

export default function Pricing() {
  const [isEmployer, setIsEmployer] = useState(false);
  const plans = isEmployer ? employerPlans : individualPlans;

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
            <Link href="/pricing" className="text-primary font-medium">Pricing</Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Choose the plan that fits your needs. All plans include our core verification technology.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsEmployer(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  !isEmployer 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="w-5 h-5" />
                For Individuals
              </button>
              <button
                onClick={() => setIsEmployer(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  isEmployer 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="w-5 h-5" />
                For Employers
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass-card rounded-2xl p-8 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                      <Crown className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground font-[family-name:var(--font-mono)]">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
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
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the perfect plan for your needs.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    View Demo
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
