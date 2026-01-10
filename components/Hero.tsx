'use client';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('beta-closed')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
        Finally, get it out of your head.
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Kinroot is the operating system for busy families — a shared place for schedules, meals, and household coordination. We&apos;re currently building with beta families on the South Shore, and expanding to{' '}
        <span className="font-semibold text-accent">Boston</span> soon.
      </p>
      <button
        type="button"
        onClick={scrollToWaitlist}
        className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 text-lg hover:opacity-90 active:opacity-80 transition-opacity cursor-pointer"
        style={{ borderRadius: 'var(--radius)' }}
      >
        Join the Waitlist
      </button>
      <p className="text-sm text-muted-foreground mt-3">
        Beta is full — join the waitlist for future access.
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
