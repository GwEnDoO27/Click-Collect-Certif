"use client"
import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import ProductDetail from "@/components/ProductDetail"
import ProductFilters from "@/components/ProductFilters"
import Footer from "@/components/Footer"
import { Product, traderProducts } from "@/lib/products"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

import React, { useState } from "react"

export default function HomeTrader() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 py-8">
        <Link href={"/profile"}>
          <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
            <ArrowLeft></ArrowLeft>
            Retour
          </Button>
        </Link>
        <div className="mb-6">
          <h1 className="text-[22px] font-medium">
            Vos produits mis à disposition
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Retrouvez ci-dessous tous les différents produits que avez ajouté
            sur la plateforme
          </p>
        </div>
        <ProductFilters />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {traderProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={() => setSelectedProduct(p)}
              onClose={() => selectedProduct(null)}
            />
          ))}
        </div>
      </main>
      <Footer />
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}
