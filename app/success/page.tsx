'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  const [copied, setCopied] = useState(false);
  const shareUrl = 'https://kinroot.io';
  const shareMessage = "I just applied for early access to Kinroot — it's a new app for busy families to manage the mental load. You should check it out: https://kinroot.io";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareViaSMS = () => {
    window.open(`sms:?body=${encodeURIComponent(shareMessage)}`, '_blank');
  };

  const shareViaEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent('Check out Kinroot')}&body=${encodeURIComponent(shareMessage)}`, '_blank');
  };

  const shareViaFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
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

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? 'Copied!' : 'Copy Link'}
              </button>

              <button
                onClick={shareViaSMS}
                className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Text Message
              </button>

              <button
                onClick={shareViaEmail}
                className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </button>

              <button
                onClick={shareViaFacebook}
                className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
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
