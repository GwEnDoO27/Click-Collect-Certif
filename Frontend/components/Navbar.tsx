import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex h-[60px] items-center justify-between border-b border-border bg-background px-8">
      <span className="text-[17px] font-medium tracking-tight">
        Click & Collect Certif
        <span className="relative -top-px ml-1 inline-block h-2 w-2 rounded-full bg-primary align-middle" />
      </span>
      <Button className="gap-2 bg-primary text-primary-foreground cursor-pointer">
        <ShoppingCart size={16} />
        Panier
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary-foreground text-[11px] font-semibold text-primary">
          3
        </span>
      </Button>
    </nav>
  )
}
