import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
// import { products, Product } from "@/lib/products"
import { cart, Cart, CartItem } from "@/lib/cart"

type Props = {
  item: CartItem
}

export default function CartItemValidateCard({ item }: Props) {
  console.log("ITEMS : ", item)

  return (
    <Card className="flex flex-row items-center p-3">
      <div className="flex items-center">
        <div className="text-6xl">{item.product.emoji}</div>
      </div>
      <div className="grid w-full grid-cols-3 items-center gap-10">
        {/* <div className="bg-red-200 flex flex-row gap-10"> */}
        <div className="">
          <p className="text-sm font-medium">{item.product.name}</p>
          <p className="text-xs text-muted-foreground">
            {item.product.price.toFixed(2)} €
          </p>
        </div>

        <div className="flex items-center gap-10">
          <span className="font-medium">{item.quantity}</span>
        </div>

        <div className="flex items-center gap-10">
          <span className="font-medium">
            {(item.product.price * item.quantity).toFixed(2)} €
          </span>
        </div>
        {/* </div> */}
        {/* <Button size="icon" variant="outline" className="cursor-pointer">
          <Plus size={14} />
        </Button> */}
      </div>
    </Card>
  )
}
