"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Product } from "@/lib/products"

type Props = {
  product: Product | null
  onClose: () => void
}

export default function ProductDetail({ product, onClose }: Props) {
  return (
    // <Dialog open={!!product} onOpenChange={onClose}>
    <Dialog
      open={!!product}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent className="">
        {product && (
          <>
            <DialogTitle className="text-lg">{product.name}</DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex h-32 items-center justify-center rounded-lg bg-muted text-6xl">
                {product.emoji}
              </div>
              <p className="text-sm font-bold text-muted-foreground">
                Description :
              </p>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
              <p className="text-xl font-medium text-primary">
                {product.price.toFixed(2)} €
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
