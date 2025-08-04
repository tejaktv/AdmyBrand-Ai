import React, { useState } from 'react';
import { ArrowRight, Sparkles, Brain, Target, BarChart3, Zap, Shield, CheckCircle, Star, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-dashboard.jpg';
import sarahImage from '@/assets/testimonial-sarah.jpg';
import michaelImage from '@/assets/testimonial-michael.jpg';
import priyaImage from '@/assets/testimonial-priya.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon with early access details.",
    });
    setEmail('');
  };

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your marketing performance and provide actionable insights to boost ROI by up to 300%."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Audience Targeting",
      description: "Precision targeting using AI to identify and reach your ideal customers across all channels with laser-focused messaging."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Campaign Optimization",
      description: "Automatically optimize your campaigns in real-time based on performance data, ensuring maximum efficiency and conversion rates."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning-Fast Automation",
      description: "Streamline your marketing workflows with intelligent automation that saves time and eliminates manual tasks."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, ensuring your data and campaigns are always protected and secure."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Creative AI Assistant",
      description: "Generate compelling ad copy, visuals, and creative assets using our advanced AI creative suite powered by the latest models."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO at TechFlow",
      image: sarahImage,
      content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 400% increase in qualified leads within the first quarter. The AI insights are incredibly accurate and actionable.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director at GrowthLab",
      image: michaelImage,
      content: "The automation features alone saved us 20 hours per week. But what really impressed us was the intelligent targeting - our conversion rates doubled almost overnight.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Founder at StartupBoost",
      image: priyaImage,
      content: "As a startup, we needed every marketing dollar to count. ADmyBRAND AI Suite helped us achieve enterprise-level results with a fraction of the budget. Absolutely game-changing.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 campaigns",
        "Basic AI analytics",
        "Email support",
        "Standard integrations",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      description: "Ideal for growing marketing teams",
      features: [
        "Unlimited campaigns",
        "Advanced AI insights",
        "Priority support",
        "All integrations",
        "Real-time reporting",
        "Custom audiences",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced security",
        "Custom training",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How quickly can I see results with ADmyBRAND AI Suite?",
      answer: "Most customers see significant improvements within 2-4 weeks. Our AI algorithms start optimizing immediately, but we recommend allowing 30 days for full performance analysis and optimization cycles to complete."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 200+ marketing tools including Google Ads, Facebook, LinkedIn, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your existing tech stack."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We maintain SOC 2 Type II compliance, use end-to-end encryption, and follow strict data governance protocols. Your data is never shared with third parties and remains fully under your control."
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo with our team to see the platform in action."
    },
    {
      question: "Do you offer training and support?",
      answer: "We provide comprehensive onboarding, training materials, and ongoing support. Professional and Enterprise plans include priority support, and Enterprise customers get a dedicated success manager."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-bold text-gradient-primary">
                ADmyBRAND AI
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm hover:text-primary transition-smooth">Features</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-smooth">Pricing</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-smooth">Testimonials</a>
              <a href="#faq" className="text-sm hover:text-primary transition-smooth">FAQ</a>
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
            <div className="md:hidden py-4 space-y-4 border-t border-white/10">
              <a href="#features" className="block text-sm hover:text-primary transition-smooth">Features</a>
              <a href="#pricing" className="block text-sm hover:text-primary transition-smooth">Pricing</a>
              <a href="#testimonials" className="block text-sm hover:text-primary transition-smooth">Testimonials</a>
              <a href="#faq" className="block text-sm hover:text-primary transition-smooth">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">Sign In</Button>
                <Button variant="hero" size="sm">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full text-sm border-white/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Revolutionary AI Marketing Suite</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Transform Your Marketing with{' '}
                <span className="text-gradient-primary">AI Intelligence</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Harness the power of advanced AI to optimize campaigns, target audiences with precision, 
                and drive unprecedented growth. Join 10,000+ marketers already boosting ROI by 300%+.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glass" size="xl">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-down">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-2xl shadow-elegant glow-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Powerful Features for Modern Marketers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, optimize, and scale your marketing campaigns 
              with the intelligence of AI and the precision of data science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="feature" className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core AI features 
              with advanced capabilities available in higher tiers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                variant="glass"
                className={`relative ${plan.popular ? 'border-primary shadow-elegant glow-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold font-display">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "hero" : "glass"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Trusted by Marketing Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how top marketing teams are achieving unprecedented results with ADmyBRAND AI Suite.
            </p>
          </div>

          <Carousel className="max-w-4xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card variant="glass" className="p-8">
                    <CardContent className="space-y-6">
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <Avatar size="lg">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ADmyBRAND AI Suite.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass border-white/10 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of marketers already using AI to drive exceptional results.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
                Get Early Access
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Start your 14-day free trial. No credit card required.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-lg font-display font-bold">ADmyBRAND AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The future of marketing is here. Transform your campaigns with AI intelligence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Status</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ADmyBRAND AI Suite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;