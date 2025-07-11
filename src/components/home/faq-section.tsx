'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { motion } from 'framer-motion';

const FAQ_DATA = [
  {
    question: "What is Omnix?",
    answer: "Omnix is an all-in-one Discord bot designed to provide a comprehensive suite of tools for server management, including moderation, anti-nuke, ticketing, music, and much more. It's built to be powerful, reliable, and easy to use."
  },
  {
    question: "How do I invite Omnix to my server?",
    answer: "You can invite Omnix to your server by clicking on the 'Invite to Discord' button on our homepage. You will need to have 'Manage Server' permissions in the server you want to add the bot to."
  },
  {
    question: "Is Omnix free to use?",
    answer: "Yes, Omnix has a robust free version with a wide range of features. We also offer premium plans for users who want access to even more advanced features and capabilities."
  },
  {
    question: "How do I get support?",
    answer: "For general questions, you can use our AI-powered FAQ page. For specific issues or to report a bug, please join our official support server on Discord and create a support ticket via our /support page."
  },
  {
    question: "How does the Anti-Nuke feature work?",
    answer: "Our Anti-Nuke system monitors administrative actions in your server. If it detects suspicious activity, like a rapid series of kicks or bans, it can automatically intervene to lock down the server and alert server owners, preventing catastrophic damage."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Find answers to common questions about Omnix. For more specific queries, visit our{' '}
            <Link href="/faq" className="text-primary hover:underline">
              AI-powered FAQ page
            </Link>.
          </p>
        </motion.div>
        
        <Accordion type="single" collapsible className="mt-12 w-full space-y-4 text-left">
          {FAQ_DATA.map((faq, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="overflow-hidden rounded-lg border-0 bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg data-[state=open]:shadow-xl"
              >
                <AccordionTrigger className="w-full px-6 py-5 text-left font-headline text-lg transition-colors hover:no-underline data-[state=open]:bg-gradient-to-r data-[state=open]:from-primary/10 data-[state=open]:via-transparent data-[state=open]:to-primary/10 data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
