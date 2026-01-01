'use client';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
        Finally, get it out of your head.
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Kinroot is the operating system for busy families — a shared place for schedules, meals, and household coordination. We&apos;re looking for parents in{' '}
        <span className="font-semibold text-accent">Weymouth</span>,{' '}
        <span className="font-semibold text-accent">Hingham</span>,{' '}
        <span className="font-semibold text-accent">Quincy</span> areas of the South Shore, Massachusetts to try it first.
      </p>
      <button
        onClick={scrollToForm}
        className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 text-lg hover:opacity-90 transition-opacity"
        style={{ borderRadius: 'var(--radius)' }}
      >
        Apply for Early Access
      </button>
      <p className="text-sm text-muted-foreground mt-3">
        Short form. No commitment. Feedback welcome.
      </p>
      <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
        Kinroot is not another to-do app or shared calendar — it&apos;s designed to reduce the mental load, not organize it better.
      </p>
      <p className="text-sm text-muted-foreground mt-4 italic">
        Built by South Shore parents who get it.
      </p>
    </section>
  );
}
