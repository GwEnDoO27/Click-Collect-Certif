"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartTotal from "@/components/CartTotal"
import { products, Product } from "@/lib/products"
import { cart, Cart } from "@/lib/cart"
import CartItemCard from "@/components/CartItemCard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Eye, EyeOff, ArrowLeft } from "lucide-react"
import ProductDetail from "@/components/ProductDetail"

import { useState } from "react"

export default function CartPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setSelectedCartItems] = useState<Cart | null>(null)
  console.log("CART : ", cart)

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="mx-auto max-w-[1200px] flex-1 px-6 py-8">
        <div className="mb-6">
          <Link href={"/"}>
            <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
              <ArrowLeft></ArrowLeft>
              Retour
            </Button>
          </Link>
          <h1 className="text-[22px] font-medium">Votre panier</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Voici les éléments de vôtre panier :
          </p>
        </div>
        <div className="flex grid-cols-[1fr_350px] flex-row gap-6">
          <div className="flex w-full flex-col gap-4">
            {cart.items.map((c) => (
              <CartItemCard
                key={c.id}
                item={c}

                //   onOpen={() => setSelectedCartItems(p)}
              />
              // </Button>
            ))}
          </div>
          <CartTotal></CartTotal>
        </div>
        <Link href={"/"}>
          <Button className="mt-6 cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
            <ArrowLeft></ArrowLeft>
            continuer les achats
          </Button>
        </Link>
      </main>
      <Footer />
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedCartItems(null)}
      />
    </div>
  )
}
