export default function Testimonial() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div
        className="bg-background border-l-4 border-accent p-8 md:p-10 shadow-sm"
        style={{ borderRadius: 'var(--radius)' }}
      >
        <div className="relative">
          <svg
            className="absolute -top-2 -left-2 w-8 h-8 text-accent opacity-30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="relative">
            <p className="text-lg md:text-xl text-foreground italic mb-4 pl-6">
              The mental load was crushing us. We built Kinroot because our family needed it — and we think yours might too.
            </p>
            <footer className="text-muted-foreground text-sm md:text-base pl-6">
              — Founders (Weymouth parents, 2 kids)
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
