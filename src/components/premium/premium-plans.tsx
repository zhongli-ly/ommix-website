'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Gem, Rocket, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const planData = [
  {
    name: 'Free',
    icon: Sparkles,
    description: 'For individuals and small communities getting started.',
    price: { monthly: 0, yearly: 0 },
    button: { text: 'Currently Active', variant: 'outline', disabled: true, href: '#' },
    features: [
      'Basic Moderation',
      'Ticketing System',
      'Standard Music Quality',
      'Community Support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    icon: Gem,
    description: 'For growing servers that need more power and features.',
    price: { monthly: 799, yearly: 679 },
    button: { text: 'Upgrade to Pro', variant: 'default', disabled: false, href: '/purchase' },
    features: [
      'Everything in Free',
      'Advanced Anti-Nuke',
      'AI-Powered Auto-Mod',
      'Custom Branding',
      'High-Quality Music',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    description: 'For large-scale communities requiring dedicated solutions.',
    price: { monthly: 2499, yearly: 2129 },
    button: { text: 'Contact Sales', variant: 'outline', disabled: false, href: '/support' },
    features: [
      'Everything in Pro',
      'Dedicated Bot Instance',
      'SLA & Uptime Guarantee',
      'Onboarding Assistance',
      'Custom Feature Development',
      '24/7 Enterprise Support',
    ],
    isPopular: false,
  },
];

const FireAnimation = () => {
    const particles = Array.from({ length: 50 });
    
    return (
        <div 
            className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none"
            style={{ filter: 'blur(3px) contrast(12)' }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute bottom-0 w-24 h-1 bg-orange-400 rounded-full" />
                
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-0 rounded-full"
                        style={{
                            width: `${Math.random() * 20 + 5}px`,
                            height: `${Math.random() * 20 + 5}px`,
                            background: `rgba(255, ${Math.floor(Math.random() * 100 + 155)}, 0, 0.8)`,
                        }}
                        initial={{
                            x: (Math.random() - 0.5) * 60,
                            y: 0,
                            scale: Math.random() * 0.6 + 0.4,
                            opacity: 1,
                        }}
                        animate={{
                            y: -100 - Math.random() * 80,
                            x: (Math.random() - 0.5) * 100,
                            scale: 0,
                        }}
                        transition={{
                            duration: Math.random() * 1.5 + 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "circOut",
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </div>
    );
};


export function PremiumPlans() {
  const [isYearly, setIsYearly] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  
  const featureListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
  };

  return (
    <div className="mt-16">
      <motion.div
        className="flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Label htmlFor="billing-cycle">Monthly</Label>
        <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} aria-label="billing-cycle" />
        <Label htmlFor="billing-cycle">Yearly</Label>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isYearly ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="ml-2 origin-left rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
        >
          Save 15%
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {planData.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            className="group relative"
          >
            <motion.div 
              className={cn(
                "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary blur-md transition-opacity duration-300",
                plan.isPopular ? "opacity-75" : "opacity-0 group-hover:opacity-75"
              )}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            />
             <motion.div
              className="relative h-full"
              whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
            >
              <Card className="flex h-full flex-col overflow-hidden rounded-xl border bg-background shadow-lg transition-shadow hover:shadow-primary/20">
                 {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                <CardHeader className="items-center text-center">
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <plan.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <CardTitle className="pt-2 font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col gap-6 text-center">
                   <div className="relative h-12 font-headline text-5xl font-bold">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={isYearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-x-0"
                        >
                           ₹{isYearly ? plan.price.yearly : plan.price.monthly}
                           <span className="text-base font-normal text-muted-foreground">/mo</span>
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <Button asChild className="w-full smooth-hover" variant={plan.button.variant as any} disabled={plan.button.disabled}>
                        <Link href={plan.button.href}>{plan.button.text}</Link>
                    </Button>
                </CardContent>
                <CardFooter className="flex-col !p-0">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-t">
                        <AccordionTrigger className="px-6 text-sm font-medium text-muted-foreground hover:no-underline">
                          What's included
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <motion.ul 
                            className="space-y-3 text-left text-sm text-muted-foreground"
                            variants={featureListVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {plan.features.map((feature) => (
                              <motion.li 
                                  key={feature}
                                  className="flex items-start gap-3"
                                  variants={featureItemVariants}
                                >
                                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                          </motion.ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                </CardFooter>
              </Card>
              {index === planData.length - 1 && <FireAnimation />}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
