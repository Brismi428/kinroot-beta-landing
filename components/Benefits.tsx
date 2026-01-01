export default function Benefits() {
  const benefits = [
    "Shape the product",
    "Direct line to the founder",
    "Free until launch",
    "Lifetime discount at launch"
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="border-2 border-border bg-background p-8 md:p-12" style={{ borderRadius: 'var(--radius)' }}>
        <h3 className="font-heading font-semibold text-2xl text-primary text-center mb-8">
          What You Get as a Beta Tester
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-accent text-3xl leading-none">✓</span>
              <span className="text-foreground text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
