"use client"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Ellipsis } from "lucide-react"
import {  Product } from "@/lib/products"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ToolTipModifier } from "@/components/ModificationTooltip"

type Props = {
  product: Product
  onOpen: () => void
  onClose: () => void
}

export default function ProductCard({ product, onOpen, onClose }: Props) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const justClosedSheet = useRef(false)

  useEffect(() => {
    console.log(isSheetOpen)
  }, [isSheetOpen])

  const handleSheetClose = () => {
    console.log("🔴 handleSheetClose appelé")
    justClosedSheet.current = true
    setIsSheetOpen(false)
  }

  return (
    <Card
      className="cursor-pointer overflow-hidden transition-colors hover:border-primary"
      onClick={() => {
        if (justClosedSheet.current) {
          justClosedSheet.current = false
          return
        }
        onOpen()
      }}
    >
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
          <div className="flex flex-row gap-2">
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7 cursor-pointer rounded-lg hover:bg-amber-200"
              onClick={(e) => {
                ;(e.stopPropagation(), console.log("hello"))
              }}
            >
              <Plus size={14} />
            </Button>
            <TooltipProvider>
              <ToolTipModifier
                isSheetOpen={isSheetOpen}
                onSheetOpen={() => {
                  console.log("🟢 onSheetOpen appelé")
                  setIsSheetOpen(true)
                }}
                onSheetClose={handleSheetClose}
                isAlertOpen={isAlertOpen}
                onIsAlertOpen={setIsAlertOpen}
              />
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
