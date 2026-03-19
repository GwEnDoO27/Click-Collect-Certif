
"use client"
import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import Footer from "@/components/Footer"
import ProductDetail from "@/components/ProductDetail"
import { products, Product } from "@/lib/products"
import { cart, Cart } from "@/lib/cart"
import CartItemCard from "@/components/CartItemCard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Eye, EyeOff, ArrowLeft } from "lucide-react"

import { useState } from "react"

export default function CartPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [cartItems, setSelectedCartItems] = useState<Cart | null>(null)
    console.log("CART : ",cart);
    
    
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="mb-6">
          <h1 className="text-[22px] font-medium">Votre panier</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Voici les éléments de vôtre panier :
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {cart.items.map((c) => (
            <CartItemCard
                key={c.id}
                item={c}

            //   onOpen={() => setSelectedCartItems(p)}
            />
            // </Button>
          ))}
        </div>
        <Link href={"/"}>
          <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white mt-6">
            <ArrowLeft></ArrowLeft>
            continuer les  achats
          </Button>
        </Link>
      </main>
      <Footer />
      {/* <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedCartItems(null)}
      /> */}
    </>
  )
}
