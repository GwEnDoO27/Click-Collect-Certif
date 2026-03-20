"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartTotal from "@/components/CartTotal"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import CheckoutCard from "@/components/CheckoutCard"

export default function CartCheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="mb-6">
          <Link href={"/cart"}>
            <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
              <ArrowLeft></ArrowLeft>
              Retour
            </Button>
          </Link>
          <h1 className="text-[22px] font-medium">Vos informations</h1>
          <span className="mt-1 text-sm text-muted-foreground">
            Renseignez les champs ci-dessous
          </span>
        </div>
        <div className="flex grid-cols-[1fr_350px] flex-row gap-6">
          <div className="flex w-full flex-col gap-4">
            <CheckoutCard></CheckoutCard>
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
    </>
  )
}
