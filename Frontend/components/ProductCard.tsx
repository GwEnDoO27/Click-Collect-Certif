import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

type Product = {
  id: number
  name: string
  category: string
  price: number
  emoji: string
  badge?: "Promo" | "Nouveau"
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="cursor-pointer overflow-hidden transition-colors hover:border-primary">
      <div className="relative flex h-[140px] items-center justify-center bg-muted text-5xl">
        {product.emoji}
        {product.badge && (
          <Badge
            className="absolute top-2 left-2 text-[10px] tracking-wide uppercase"
            variant={product.badge === "Nouveau" ? "default" : "secondary"}
          >
            {product.badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-3">
        <p className="mb-1 text-[11px] tracking-wide text-muted-foreground uppercase">
          {product.category}
        </p>
        <p className="mb-3 text-sm leading-snug font-medium">{product.name}</p>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-primary">
            {product.price.toFixed(2)} €
          </span>
          <Button size="icon" variant="outline" className="h-7 w-7 rounded-lg">
            <Plus size={14} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
