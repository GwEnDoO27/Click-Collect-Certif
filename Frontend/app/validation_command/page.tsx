"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CarTotalValidate from "@/components/CardTotalValidate"
import { products, Product } from "@/lib/products"
import { cart, Cart } from "@/lib/cart"
import CartItemValidateCard from "@/components/CartItemValidateCard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Eye, EyeOff, ArrowLeft } from "lucide-react"

import { useState } from "react"
import CartTotalValidate from "@/components/CardTotalValidate"

export default function ValidationCommandPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setSelectedCartItems] = useState<Cart | null>(null)
  console.log("CART : ", cart)

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="mx-auto max-w-[1200px] flex-1 px-6 py-8">
        <div className="mb-6 text-center">
          {/* <Link href={"/cart"}>
            <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
              <ArrowLeft></ArrowLeft>
              Retour
            </Button>
          </Link> */}
          <h1 className="text-[22px] font-medium">Merci pour votre commande</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Voici les éléments de vôtre panier :
          </p>
        </div>
        <div className="flex grid-cols-[1fr_350px] flex-row gap-6">
          <div className="flex w-full flex-col gap-4">
            {cart.items.map((c) => (
              <CartItemValidateCard
                key={c.id}
                item={c}

                //   onOpen={() => setSelectedCartItems(p)}
              />
              // </Button>
            ))}
          </div>
          <CartTotalValidate />
        </div>
        {/* <Link href={"/"}>
          <Button className="mt-6 cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
            <ArrowLeft></ArrowLeft>
            Retour à mla boutique
          </Button>
        </Link> */}
      </main>
      <Footer />
      {/* <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedCartItems(null)}
      /> */}
    </div>
  )
}
