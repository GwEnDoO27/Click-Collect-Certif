import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
// import { products, Product } from "@/lib/products"
import { cart, Cart, CartItem } from "@/lib/cart"
import Link from "next/link"

export default function CartTotalValidate() {
  //   console.log("ITEMS : ", item)

  return (
    <Card className="flex h-[30vh] flex-col items-center p-4">
      <div className="flex w-full items-center justify-center">
        {/* <CardHeader> */}
        <h1 className="flex text-center text-xl font-bold">Résumé :</h1>
        {/* </CardHeader> */}
      </div>
      <div className="flex w-full flex-col items-center gap-6 p-6">
        <div className="flex flex-row items-center gap-10">
          <span className="text-sm">Produits</span>
          <span className="font-medium">Lolo</span>
        </div>
        <div className="flex flex-row items-center gap-10">
          <span className="text-sm">Livraison</span>
          <span className="font-medium">Lolo</span>
        </div>

        <div className="flex flex-row items-center gap-8">
          <span className="text-lg font-bold">TOTAL</span>
          <span className="text-lg font-bold">2.44€</span>
        </div>
        <Link href={"/"}>
          <Button className="cursor-pointer p-4 text-sm">
            Retour à la boutique
          </Button>
        </Link>
      </div>
    </Card>
  )
}
