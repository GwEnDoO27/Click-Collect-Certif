"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function CheckoutCard() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")

  const [errors, setErrors] = useState({
    email: "",
    // firstName: "",
    // lastName: "",
    // userName: "",
    // password: "",
    // confirmPassword: "",
    // profilePicture: "",
    // bannerPicture: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [deliveryType, setDeliveryType] = useState("")

  const isChecloutFormValid = email && /\S+@\S+\.\S+/.test(email)
  // firstName !== "" &&
  // lastName !== "" &&
  // userName !== "" &&
  // password !== "" &&
  // confirmPassword === password

  const hasErrors = Object.values(errors).some((error) => error !== "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const newErrors = {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      profilePicture: "",
      bannerPicture: "",
    }
    // if (!email || !/\S+@\S+\.\S+/.test(email))
    //   newErrors.email = "Adresse e-mail invalide."
    if (firstName === "") newErrors.firstName = "Prénom invalide."
    // if (lastName === "") newErrors.lastName = "Nom invalide."
    // if (userName === "") newErrors.userName = "Nom invalide."
    // if (!password) newErrors.password = "Mot de passe requis."
    setErrors(newErrors)

    // If fields are filled, we create the form that will be sent to the front
    if (!hasErrors) {
      // Basic checks to verify our inputs

      const formDataRegister = new FormData()
      //   formDataRegister.append("email", email)
      formDataRegister.append("firstName", firstName)
      //   formDataRegister.append("lastName", lastName)
      //   formDataRegister.append("userName", userName)
      //   formDataRegister.append("password", password)

      console.log([...formDataRegister.entries()])

      // Call API TO SAVE DATA USER
    }
  }

  return (
    <Card className="flex flex-col items-center">
      <div className="flex w-full items-center p-4">
        <div className="flex flex-col">
          <Label htmlFor="email" className="mb-2 text-sm">
            Adresse e-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="vous@exemple.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {submitted && errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col p-4">
        <Label className="mb-2 text-sm">Adresse de Livraison</Label>
        <div className="grid w-full grid-cols-2 items-center gap-10">
          {/* <div className="bg-red-200 flex flex-row gap-10"> */}
          <Input type="text" placeholder="Prénom" />
          <Input type="text" placeholder="Nom" />
          <Input type="text" placeholder="Adresse" className="col-span-2" />
          <Input type="text" placeholder="Code postal" />
          <Input type="text" placeholder="Ville" />
          <div className="col-span-2">
            <Select>
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Choisir un département normand" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem className="cursor-pointer" value="default">
                  Choix
                </SelectItem>
                <SelectItem className="cursor-pointer" value="calvados">
                  Calvados
                </SelectItem>
                <SelectItem className="cursor-pointer" value="eure">
                  Eure
                </SelectItem>
                <SelectItem className="cursor-pointer" value="manche">
                  Manche
                </SelectItem>
                <SelectItem className="cursor-pointer" value="orne">
                  Orne
                </SelectItem>
                <SelectItem className="cursor-pointer" value="seine-maritime">
                  Seine-Maritime
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input placeholder="Téléphone" className="col-span-2" />{" "}
          <div className="flex w-full flex-col">
            <Label className="mb-2 text-sm">Choix de Livraison</Label>
            <div className="col-span-2">
              <Select onValueChange={setDeliveryType}>
                <SelectTrigger className="cursor-pointer">
                  <SelectValue placeholder="Choisir un département normand" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem className="cursor-pointer" value="default">
                    Choix
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="domicile">
                    Livraison à domicile
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="relais">
                    Point relais
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="magasin">
                    Retrait en magasin
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {deliveryType === "relais" && (
              <div className="col-span-2 mt-4 flex flex-row gap-6">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un point relais" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="relais1">Relais Paris 1</SelectItem>
                    <SelectItem value="relais2">Relais Paris 2</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  className="cursor-pointer"
                  onClick={() => setDeliveryType("")}
                >
                  <X></X>
                </Button>
              </div>
            )}
            {deliveryType === "magasin" && (
              <div className="col-span-2 mt-4 flex flex-row gap-6">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un magasin" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="store1">Magasin Paris</SelectItem>
                    <SelectItem value="store2">Magasin Lyon</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  className="cursor-pointer"
                  onClick={() => setDeliveryType("")}
                >
                  <X></X>
                </Button>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </Card>
  )
}
