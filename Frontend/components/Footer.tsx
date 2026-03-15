export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-background px-8 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            Click & Collect Certif
          </span>{" "}
          — Retraits directement auprès du commerçant selon disponibilités
        </p>
        <div className="flex gap-5">
          {["Mentions légales", "CGV", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
