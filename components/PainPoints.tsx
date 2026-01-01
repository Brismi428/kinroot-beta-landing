export default function PainPoints() {
  const painPoints = [
    {
      title: "Who's picking up the kids?",
      subtitle: "The endless text thread",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "What's for dinner?",
      subtitle: "The 5pm panic",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Did anyone pay that bill?",
      subtitle: "The mental load",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {painPoints.map((point, idx) => (
          <div
            key={idx}
            className="bg-background border-2 border-accent p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderRadius: 'var(--radius)' }}
          >
            {point.icon}
            <h3 className="font-heading font-semibold text-xl text-primary mb-2">
              {point.title}
            </h3>
            <p className="text-muted-foreground">
              {point.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
