export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-muted-foreground text-sm">
        <p>
          &copy; {new Date().getFullYear()} Kinroot LLC · Made on the South Shore
        </p>
      </div>
    </footer>
  );
}
