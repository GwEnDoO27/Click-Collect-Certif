import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import ProductFilters from "@/components/ProductFilters"
import Footer from "@/components/Footer"
import { products } from "@/lib/products"


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="mb-6">
          <h1 className="text-[22px] font-medium">Nos produits</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Réservez en ligne, prenez rendez-vous avec le commerçant / particulier et réglez le montant en personne
          </p>
        </div>
        <ProductFilters />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
