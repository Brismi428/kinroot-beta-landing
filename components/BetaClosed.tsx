'use client';

import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

export default function BetaClosed() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!supabase) {
        console.error('Supabase not configured');
        setError('Unable to join waitlist. Please try again later.');
        setIsSubmitting(false);
        return;
      }

      const { error: insertError } = await supabase
        .from('waitlist')
        .insert({ email });

      if (insertError) {
        // Handle duplicate email gracefully
        if (insertError.code === '23505') {
          setSubmitted(true);
        } else {
          console.error('Supabase error:', insertError);
          setError('Unable to join waitlist. Please try again later.');
        }
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Unable to join waitlist. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="beta-closed" className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-background border border-border p-8 text-center" style={{ borderRadius: 'var(--radius)' }}>
        <div className="mb-6">
          <span className="inline-block bg-accent/20 text-accent font-semibold px-4 py-1 text-sm" style={{ borderRadius: 'var(--radius)' }}>
            Beta Full
          </span>
        </div>

        <h2 className="font-heading font-semibold text-3xl text-primary mb-4">
          Thank You for Your Interest!
        </h2>

        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We&apos;ve filled all spots for our initial beta.
          Next up: Boston families. Join the waitlist to be first in line.
        </p>

        {submitted ? (
          <div className="bg-secondary/50 p-6" style={{ borderRadius: 'var(--radius)' }}>
            <p className="text-primary font-semibold mb-2">You&apos;re on the list!</p>
            <p className="text-muted-foreground text-sm">
              We&apos;ll reach out when we&apos;re ready for more families.
            </p>
          </div>
        ) : (
          <>
            <p className="text-foreground font-medium mb-4">
              Want to be notified when we open up more spots?
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
                style={{ borderRadius: 'var(--radius)' }}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>

            {error && (
              <p className="text-destructive text-sm mt-3">{error}</p>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              No spam, just updates on Kinroot availability.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
