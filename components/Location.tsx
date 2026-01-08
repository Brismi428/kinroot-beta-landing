export default function Location() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="font-heading font-semibold text-2xl text-primary text-center mb-8">
        Coming Soon to Boston
      </h3>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div
          className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 font-heading font-semibold text-lg"
          style={{ borderRadius: 'var(--radius)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Boston
        </div>
      </div>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        We started with South Shore families and are expanding to Boston next.
        Join the waitlist to be notified when spots open up.
      </p>
    </section>
  );
}
