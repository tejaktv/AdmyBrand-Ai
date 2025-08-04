import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { FeatureShowcase } from "@/components/ui/feature-showcase"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { ContactForm } from "@/components/ui/contact-form"

import { StatsCounter } from "@/components/ui/stats-counter"
import { BlogPreview } from "@/components/ui/blog-preview"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  MessageSquare, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Lightbulb,
  Rocket,
  Database,
  Eye,
  Menu,
  X,
  Calendar
} from "lucide-react"
import heroImage from "@/assets/hero-dashboard.jpg"
import sarahAvatar from "@/assets/testimonial-sarah.jpg"
import michaelAvatar from "@/assets/testimonial-michael.jpg"
import priyaAvatar from "@/assets/testimonial-priya.jpg"

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }
    toast({
      title: "Success!",
      description: "You've been added to our early access list.",
    })
    setEmail('')
  }

  // Enhanced features data with detailed descriptions
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your marketing performance in real-time, providing actionable insights that boost ROI by up to 300%.",
      features: ["Predictive analytics", "Performance forecasting", "Automated insights", "Custom dashboards"],
      badge: "Most Popular"
    },
    {
      icon: Target,
      title: "Smart Audience Targeting", 
      description: "Precision targeting using AI to identify and reach your ideal customers across all channels with laser-focused messaging and optimal timing.",
      features: ["Lookalike audiences", "Behavioral targeting", "Cross-platform sync", "Real-time optimization"],
      badge: "New"
    },
    {
      icon: BarChart3,
      title: "Real-time Optimization",
      description: "Automatically optimize your campaigns in real-time based on performance data, ensuring maximum efficiency and conversion rates around the clock.",
      features: ["Auto bid management", "Budget allocation", "A/B test automation", "Performance alerts"]
    },
    {
      icon: Zap,
      title: "Lightning Automation",
      description: "Streamline your marketing workflows with intelligent automation that saves 20+ hours per week and eliminates repetitive manual tasks.",
      features: ["Workflow automation", "Email sequences", "Social posting", "Lead nurturing"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced data governance ensuring your campaigns are always protected.",
      features: ["SOC 2 Type II", "256-bit encryption", "GDPR compliance", "Role-based access"]
    },
    {
      icon: Sparkles,
      title: "Creative AI Assistant",
      description: "Generate compelling ad copy, visuals, and creative assets using our advanced AI creative suite powered by the latest multimodal models.",
      features: ["Copy generation", "Image creation", "Video editing", "Brand consistency"],
      badge: "Beta"
    },
    {
      icon: Database,
      title: "Unified Data Platform",
      description: "Consolidate all your marketing data into one powerful platform with 200+ integrations and real-time synchronization across all touchpoints.",
      features: ["200+ integrations", "Real-time sync", "Custom APIs", "Data warehouse"]
    },
    {
      icon: Eye,
      title: "Advanced Attribution",
      description: "Multi-touch attribution modeling with AI-powered insights into customer journey paths and the true impact of each marketing touchpoint.",
      features: ["Multi-touch attribution", "Customer journey mapping", "Cross-device tracking", "Revenue attribution"]
    }
  ]

  // Enhanced testimonials with more details
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO at TechFlow",
      company: "TechFlow Solutions",
      image: sarahAvatar,
      content: "ADmyBRAND AI Suite completely transformed our marketing strategy. We saw a 400% increase in qualified leads within the first quarter. The AI insights are incredibly accurate and actionable, helping us optimize campaigns we never thought possible.",
      rating: 5,
      results: "+400% leads"
    },
    {
      name: "Michael Rodriguez", 
      role: "Marketing Director at GrowthLab",
      company: "GrowthLab Inc",
      image: michaelAvatar,
      content: "The automation features alone saved us 20 hours per week. But what really impressed us was the intelligent targeting - our conversion rates doubled almost overnight. The ROI has been absolutely phenomenal.",
      rating: 5,
      results: "20hrs saved/week"
    },
    {
      name: "Priya Patel",
      role: "Founder at StartupBoost",
      company: "StartupBoost",
      image: priyaAvatar,
      content: "As a startup, every marketing dollar had to count. ADmyBRAND AI Suite helped us achieve enterprise-level results with a fraction of the budget. The platform is absolutely game-changing for small businesses.",
      rating: 5,
      results: "300% ROI increase"
    }
  ]

  // Enhanced pricing plans
  const pricingPlans = [
    {
      name: "Starter",
      price: "₹49",
      originalPrice: "₹99",
      description: "Perfect for small businesses and startups getting started with AI marketing",
      features: [
        "Up to 5 active campaigns",
        "Basic AI analytics & insights",
        "Email support (24h response)",
        "Standard integrations (20+)",
        "Monthly performance reports",
        "Basic audience targeting"
      ],
      popular: false,
      savings: "50% off"
    },
    {
      name: "Professional",
      price: "₹149", 
      originalPrice: "₹299",
      description: "Ideal for growing marketing teams that need advanced AI capabilities",
      features: [
        "Unlimited campaigns",
        "Advanced AI insights & predictions",
        "Priority support (4h response)",
        "All integrations (200+)",
        "Real-time reporting & alerts",
        "Advanced audience targeting",
        "A/B testing automation",
        "Creative AI assistant",
        "Custom dashboards"
      ],
      popular: true,
      savings: "50% off"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs and custom requirements",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations & APIs",
        "White-label options",
        "Advanced security & compliance",
        "Custom training & onboarding",
        "99.9% SLA guarantee",
        "Priority phone support",
        "Custom reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  // Enhanced FAQ section
  const faqs = [
    {
      question: "How quickly can I see results with ADmyBRAND AI Suite?",
      answer: "Most customers see significant improvements within 2-4 weeks. Our AI algorithms start optimizing immediately upon integration, but we recommend allowing 30 days for full performance analysis and optimization cycles to complete. Many clients report 50-100% improvement in key metrics within the first month."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 200+ marketing tools including Google Ads, Facebook, LinkedIn, Instagram, TikTok, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our robust API also allows for custom integrations with your existing tech stack. New integrations are added monthly based on customer requests."
    },
    {
      question: "Is my data secure and compliant?",
      answer: "Absolutely. We maintain SOC 2 Type II compliance, use end-to-end 256-bit encryption, and follow strict GDPR and CCPA data governance protocols. Your data is never shared with third parties and remains fully under your control. We also offer enterprise-grade security features for larger organizations."
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! We offer a comprehensive 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo with our team to see the platform in action and discuss your specific use case."
    },
    {
      question: "Do you offer training and support?",
      answer: "We provide comprehensive onboarding, extensive training materials, video tutorials, and ongoing support. Professional and Enterprise plans include priority support with faster response times, and Enterprise customers get a dedicated customer success manager to ensure optimal results."
    },
    {
      question: "How does the AI actually improve my campaigns?",
      answer: "Our AI continuously analyzes performance data across all your campaigns, identifying patterns and opportunities humans might miss. It automatically adjusts targeting, bidding, timing, and creative elements based on real-time performance data, leading to improved conversion rates and lower acquisition costs."
    }
  ]

  // Sample blog posts for the blog section
  const blogPosts = [
    {
      id: "1",
      title: "10 AI Marketing Strategies That Actually Work in 2025",
      excerpt: "Discover the latest AI-driven marketing techniques that are delivering real results for businesses across industries. From predictive analytics to automated content creation.",
      category: "AI Marketing",
      readTime: "5 min read",
      publishedAt: "Jan 15, 2025",
      image: heroImage,
      author: {
        name: "Sarah Chen",
        avatar: sarahAvatar
      }
    },
    {
      id: "2", 
      title: "How to Measure ROI from AI-Powered Campaigns",
      excerpt: "Learn the key metrics and KPIs that matter when evaluating the success of your AI marketing initiatives. Plus, frameworks for attribution modeling.",
      category: "Analytics",
      readTime: "7 min read",
      publishedAt: "Jan 12, 2025",
      image: heroImage,
      author: {
        name: "Michael Rodriguez",
        avatar: michaelAvatar
      }
    },
    {
      id: "3",
      title: "The Future of Personalized Marketing with AI",
      excerpt: "Explore how artificial intelligence is enabling hyper-personalized customer experiences at scale, and what this means for marketers in 2025 and beyond.",
      category: "Personalization", 
      readTime: "6 min read",
      publishedAt: "Jan 10, 2025",
      image: heroImage,
      author: {
        name: "Priya Patel",
        avatar: priyaAvatar
      }
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Enhanced Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                ADmyBRAND AI
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Pricing', 'Testimonials', 'Resources', 'FAQ'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-primary transition-smooth"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button variant="hero" size="sm">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 space-y-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['Features', 'Pricing', 'Testimonials', 'Resources', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm hover:text-primary transition-smooth">
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">Sign In</Button>
                <Button variant="hero" size="sm">Get Started</Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="w-fit mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Revolutionary AI Marketing Suite
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Transform Your Marketing with{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Intelligence
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Harness the power of advanced AI to optimize campaigns, target audiences with precision, 
                and drive unprecedented growth. Join 10,000+ marketers already boosting ROI by 300%+.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glass" size="xl">
                  <Play className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </motion.div>

              {/* Social proof with animated counters */}
              <motion.div 
                className="flex items-center gap-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <StatsCounter end={500} suffix="K+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <StatsCounter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    $<StatsCounter end={2.4} suffix="M+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-8 text-sm text-muted-foreground pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>No credit card required</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img
                  src={heroImage}
                  alt="ADmyBRAND AI Suite Dashboard"
                  className="w-full h-auto object-cover"
                />
                {/* New Floating Icons */}
                <motion.div
                  className="absolute top-4 left-4 p-3 glass rounded-xl border border-white/10 flex items-center space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [10, 0, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">AI Insights</span>
                </motion.div>
                <motion.div
                  className="absolute top-20 right-6 p-3 glass rounded-xl border border-white/10 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: [-10, 0, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Real-time Analytics</span>
                </motion.div>
                <motion.div
                  className="absolute bottom-10 left-6 p-3 glass rounded-xl border border-white/10 flex items-center space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [10, 0, 10] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-10 p-3 glass rounded-xl border border-white/10 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: [-10, 0, -10] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Growth Metrics</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                Powerful Features for Modern Marketers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to create, optimize, and scale your marketing campaigns 
                with the intelligence of AI and the precision of data science.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <FeatureShowcase
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  features={feature.features}
                  badge={feature.badge}
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Calculator */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                Choose Your Perfect Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Start free and scale as you grow. All plans include our core AI features 
                with advanced capabilities available in higher tiers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card
                  variant="glass"
                  className={`relative h-full ${plan.popular ? 'border-primary shadow-elegant glow-primary' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="secondary" className="bg-gradient-primary text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {plan.savings && (
                    <div className="absolute -top-2 -right-2">
                      <Badge variant="secondary" className="bg-success text-white">
                        {plan.savings}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold font-display">
                        {plan.price}
                        {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          Originally {plan.originalPrice}/month
                        </div>
                      )}
                    </div>
                    <CardDescription className="min-h-[3rem] flex items-center">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.popular ? "hero" : "glass"} 
                      className="w-full mt-auto"
                      size="lg"
                    >
                      {plan.cta || (plan.price === "Custom" ? "Contact Sales" : "Get Started")}
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
            
            {/* Pricing Calculator */}
            <ScrollReveal delay={0.4}>
              <PricingCalculator />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                Trusted by Marketing Leaders Worldwide
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how top marketing teams are achieving unprecedented results with ADmyBRAND AI Suite.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Carousel className="max-w-4xl mx-auto" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card variant="glass" className="p-8">
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <Badge variant="secondary">{testimonial.results}</Badge>
                        </div>
                        <p className="text-lg leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                Latest Insights & Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights, case studies, and best practices 
                for AI-powered marketing success.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BlogPreview posts={blogPosts} />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Button variant="glass" size="lg">
                View All Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about ADmyBRAND AI Suite. Can't find your answer? Contact our team.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-display font-bold">
                    Ready to Transform Your Marketing?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Join thousands of marketers already using AI to drive exceptional results. 
                    Get started with our free trial or speak with our team.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">14-day free trial</div>
                      <div className="text-sm text-muted-foreground">Full access to all features</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Enterprise-grade security</div>
                      <div className="text-sm text-muted-foreground">SOC 2 compliant platform</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Expert support</div>
                      <div className="text-sm text-muted-foreground">Dedicated success team</div>
                    </div>
                  </div>
                </div>

                {/* Newsletter signup */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Stay updated with AI marketing trends</h3>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        type="email"
                        placeholder="Enter your business email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="glass"
                        className="flex-1"
                      />
                      <Button type="submit" variant="hero" size="lg">
                        Get Updates
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <span className="text-xl font-display font-bold">ADmyBRAND AI</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The future of marketing is here. Transform your campaigns with AI intelligence 
                and join the revolution of data-driven growth.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-smooth">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
                <li><a href="#resources" className="hover:text-primary transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Press Kit</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Status Page</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; 2025 ADmyBRAND AI Suite. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index