'use client';

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Instagram, Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <h2 className="font-display text-2xl tracking-wide text-stone-100 mb-2">
            Contact us
          </h2>
          <p className="text-stone-400 text-sm mb-4">
            Share your vision with us, and let's create something extraordinary
            together.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="mailto:hello@rare-haus.com"
              className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              hello@therarehaus.com
            </a>
            <a
              href="https://instagram.com/the.rarehaus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              @the.rarehaus
            </a>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/5 border-white/10 text-stone-100 placeholder:text-stone-500 focus:border-white/20"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Tell us about your project and we'll get back to you!"
                className="bg-white/5 border-white/10 text-stone-100 placeholder:text-stone-500 focus:border-white/20 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-stone-100 text-stone-900 hover:bg-stone-200"
            >
              Submit Request
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
