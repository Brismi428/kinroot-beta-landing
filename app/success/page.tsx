'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  const [copied, setCopied] = useState(false);
  const shareUrl = 'https://kinroot.io';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="text-6xl text-accent">✓</span>
            </div>
            <h1 className="font-heading font-bold text-4xl text-primary mb-4">
              You&apos;re in the running!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thanks for applying to the Kinroot beta. We&apos;re reviewing applications from South Shore families and will be in touch within a few days.
            </p>
          </div>

          {/* What's Next */}
          <div className="mb-12 bg-background border-2 border-border p-8" style={{ borderRadius: 'var(--radius)' }}>
            <h2 className="font-heading font-semibold text-2xl text-primary mb-6 text-center">
              If you&apos;re selected, you&apos;ll get:
            </h2>
            <ul className="space-y-4 max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-foreground text-lg">Early access to Kinroot</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-foreground text-lg">A direct line to the founders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-foreground text-lg">The chance to shape what we build</span>
              </li>
            </ul>
          </div>

          {/* Referral Section */}
          <div className="mb-12 bg-background border-l-4 border-accent p-8" style={{ borderRadius: 'var(--radius)' }}>
            <h2 className="font-heading font-semibold text-2xl text-primary mb-3 text-center">
              Bring your village
            </h2>
            <p className="text-muted-foreground text-center mb-6 max-w-xl mx-auto">
              Know another busy South Shore family? Invite them to apply. If you both get in, you&apos;ll have someone to coordinate with from day one.
            </p>

            <div className="flex justify-center">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          {/* Sign Off */}
          <div className="text-center mb-8">
            <p className="text-lg text-foreground font-heading font-semibold mb-1">
              — Founders
            </p>
            <p className="text-sm text-muted-foreground italic">
              Weymouth parents, just like you
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block text-secondary hover:text-primary transition-colors underline font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
