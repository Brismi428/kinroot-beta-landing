'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [painPointsError, setPainPointsError] = useState('');
  const [toolsError, setToolsError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setPainPointsError('');
    setToolsError('');

    const formData = new FormData(e.currentTarget);

    // Get all checkbox values for multi-select fields
    const biggestPain = formData.getAll('biggest_pain');
    const currentTools = formData.getAll('current_tools');

    // Client-side validation for checkboxes
    let hasError = false;

    if (biggestPain.length === 0) {
      setPainPointsError('Please select at least one pain point');
      hasError = true;
    }

    if (currentTools.length === 0) {
      setToolsError('Please select at least one tool');
      hasError = true;
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    // Honeypot check - if filled, it's a bot
    if (formData.get('website')) {
      // Silently fail - redirect to success so bot thinks it worked
      setIsSubmitting(false);
      router.push('/success');
      return;
    }

    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      town: formData.get('town'),
      zip_code: formData.get('zip_code'),
      num_kids: formData.get('num_kids'),
      kids_ages: formData.get('kids_ages'),
      household_role: formData.get('household_role'),
      household_adults: formData.get('household_adults'),
      biggest_pain: biggestPain,
      current_tools: currentTools,
      why_interested: formData.get('why_interested'),
      hardest_time: formData.get('hardest_time') || null,
      feedback_willing: formData.get('feedback_willing') === 'on',
    };

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

      if (!webhookUrl) {
        console.error('Webhook URL not configured');
        setError('Application submission is temporarily unavailable. Please try again later.');
        setIsSubmitting(false);
        return;
      }
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/success');
      } else {
        // Try to parse error response, fallback to generic message
        try {
          const errorData = await response.json();
          setError(errorData.error || 'Unable to submit your application. Please try again or contact support.');
        } catch {
          // Response doesn't have JSON body
          setError('Unable to submit your application. Please try again or contact support.');
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Unable to submit your application. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-background border border-border p-8" style={{ borderRadius: 'var(--radius)' }}>
        <h2 className="font-heading font-semibold text-3xl text-primary mb-2 text-center">
          Apply for Early Access
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          This helps us make sure Kinroot is a good fit for your household.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Honeypot field - hidden from humans, visible to bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px' }}
            aria-hidden="true"
          />

          {/* SECTION: About You */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-primary border-b border-border pb-2">
              About You
            </h3>

            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-foreground mb-2">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              />
            </div>

            {/* Town */}
            <div>
              <label htmlFor="town" className="block text-sm font-medium text-foreground mb-2">
                Town <span className="text-destructive">*</span>
              </label>
              <select
                id="town"
                name="town"
                required
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <option value="">Select your town</option>
                <option value="Weymouth">Weymouth</option>
                <option value="Hingham">Hingham</option>
                <option value="Quincy">Quincy</option>
                <option disabled>―――――――</option>
                <option value="Other South Shore">Other South Shore</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zip_code" className="block text-sm font-medium text-foreground mb-2">
                Zip Code <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                required
                maxLength={5}
                pattern="[0-9]{5}"
                placeholder="02190"
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              />
            </div>
          </div>

          {/* SECTION: Your Household */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-primary border-b border-border pb-2">
              Your Household
            </h3>

            {/* Number of Kids */}
            <div>
              <label htmlFor="num_kids" className="block text-sm font-medium text-foreground mb-2">
                Number of Kids <span className="text-destructive">*</span>
              </label>
              <select
                id="num_kids"
                name="num_kids"
                required
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <option value="">Select number of kids</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>

            {/* Kids Ages */}
            <div>
              <label htmlFor="kids_ages" className="block text-sm font-medium text-foreground mb-2">
                Kids Ages
              </label>
              <input
                type="text"
                id="kids_ages"
                name="kids_ages"
                placeholder="e.g., 4, 7, 12"
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              />
            </div>

            {/* Household Role */}
            <div>
              <label htmlFor="household_role" className="block text-sm font-medium text-foreground mb-2">
                Household Role <span className="text-destructive">*</span>
              </label>
              <select
                id="household_role"
                name="household_role"
                required
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <option value="">Select your role</option>
                <option value="Primary planner">Primary planner</option>
                <option value="Shared equally">Shared equally</option>
                <option value="Supporting role">Supporting role</option>
              </select>
            </div>

            {/* Household Adults */}
            <div>
              <label htmlFor="household_adults" className="block text-sm font-medium text-foreground mb-2">
                Number of Adults in Household <span className="text-destructive">*</span>
              </label>
              <select
                id="household_adults"
                name="household_adults"
                required
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <option value="">Select number of adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </select>
            </div>
          </div>

          {/* SECTION: Your Challenges */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-primary border-b border-border pb-2">
              Your Challenges
            </h3>

            {/* Biggest Pain Points */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Biggest Pain Points <span className="text-destructive">*</span>
              </label>
              <div className="space-y-2">
                {['Meal planning', 'Scheduling', 'Task tracking', 'Communication', 'All of the above'].map((pain) => (
                  <label key={pain} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="biggest_pain"
                      value={pain}
                      className="w-4 h-4 text-primary border-input focus:ring-ring"
                    />
                    <span className="text-foreground text-base">{pain}</span>
                  </label>
                ))}
              </div>
              {painPointsError && (
                <p className="text-destructive text-sm mt-2">{painPointsError}</p>
              )}
            </div>

            {/* Current Tools */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Current Tools <span className="text-destructive">*</span>
              </label>
              <div className="space-y-2">
                {['Google Calendar', 'Apple Calendar', 'Cozi', 'Paper/whiteboard', 'Texting', 'Nothing works', 'Other'].map((tool) => (
                  <label key={tool} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="current_tools"
                      value={tool}
                      className="w-4 h-4 text-primary border-input focus:ring-ring"
                    />
                    <span className="text-foreground text-base">{tool}</span>
                  </label>
                ))}
              </div>
              {toolsError && (
                <p className="text-destructive text-sm mt-2">{toolsError}</p>
              )}
            </div>

            {/* Why Interested */}
            <div>
              <label htmlFor="why_interested" className="block text-sm font-medium text-foreground mb-2">
                Why do you want to try Kinroot? <span className="text-destructive">*</span>
              </label>
              <textarea
                id="why_interested"
                name="why_interested"
                required
                minLength={20}
                rows={4}
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
                placeholder="Tell us about your household coordination challenges..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Be specific — this helps us understand if Kinroot is right for you
              </p>
            </div>

            {/* Hardest Time */}
            <div>
              <label htmlFor="hardest_time" className="block text-sm font-medium text-foreground mb-2">
                When does household coordination feel hardest during your day?
              </label>
              <select
                id="hardest_time"
                name="hardest_time"
                className="w-full px-4 py-2 border border-input bg-background text-foreground"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <option value="">Select a time (optional)</option>
                <option value="Morning rush">Morning rush</option>
                <option value="Afternoon pickups">Afternoon pickups</option>
                <option value="Evening/dinner time">Evening/dinner time</option>
                <option value="Weekends">Weekends</option>
                <option value="It's constant">It's constant</option>
              </select>
            </div>

            {/* Feedback Willing */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="feedback_willing"
                  className="w-4 h-4 text-primary border-input focus:ring-ring"
                />
                <span className="text-foreground text-base">
                  I&apos;m open to sharing honest feedback as we build
                </span>
              </label>
            </div>
          </div>

          {error && (
            <div className="text-destructive text-sm text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3 text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            style={{ borderRadius: 'var(--radius)' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </section>
  );
}
