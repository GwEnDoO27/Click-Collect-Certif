"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartTotal from "@/components/CartTotal"
import { products, Product } from "@/lib/products"
import { cart, Cart } from "@/lib/cart"
import CartItemCard from "@/components/CartItemCard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Eye, EyeOff, ArrowLeft, Plus, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useState } from "react"

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 py-8">
        <div className="mb-6">
          <Link href={"/"}>
            <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
              <ArrowLeft></ArrowLeft>
              Retour
            </Button>
          </Link>
          <h1 className="text-[22px] font-medium">Votre profil</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Voici os informations :
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {/* <div className="flex w-full flex-col gap-4 "> */}
          <div className="m mx-auto w-full">
            <Card className="flex w-full flex-col items-start p-3">
              <div className="relative flex h-56 w-full items-center">
                {/* <div className=""> */}
                <Image
                  src="/images/world.jpg"
                  alt="Picture of the author"
                  fill={true}
                  className="rounded-t-lg object-cover"
                  //   width={500}
                  //   height={1}
                />
                {/* </div> */}
              </div>
              <div className="mt-6 grid w-full grid-cols-2 items-center gap-10">
                {/* Prénom */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                {/* Nom */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="lastname">Nom</Label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                {/* Mail */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vous@exemple.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>
                {/* Description */}
                <div className="col-span-2 flex flex-col gap-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea placeholder="Type your message here." />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-between">
            {/* <Button className="cursor-pointer">Modifier</Button> */}
            <Link href={"/commercant_home"}>
              <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
                Voir mes produits
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="cursor-pointer">Modifier</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Modifier le profil</SheetTitle>
                  <SheetDescription>
                    Faites les modifications nécessaires puis sauvegarder
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Nom</Label>
                    <Input id="sheet-demo-name" defaultValue="Doe" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-firstname">Prénom</Label>
                    <Input id="sheet-demo-firstname" defaultValue="John" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-email">Email</Label>
                    <Input
                      id="sheet-demo-email"
                      defaultValue="johndoe@gmail.com"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-password">Mot de passe</Label>
                    <Input id="sheet-demo-password" defaultValue="********" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-confirmPassword">
                      Confirmation mot de passe
                    </Label>
                    <Input
                      id="sheet-demo-confirmPassword"
                      defaultValue="********"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      placeholder="Type your message here."
                      defaultValue="Commerçant depuis 4 générations et expert dans son milieu."
                    />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Sauvegarder les changements</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Fermer</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
