"use client"
import { useState, useEffect } from "react"
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
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [city, setCity] = useState("")
  const [department, setDepartment] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    department: "",
    phoneNumber: "",
    // bannerPicture: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [deliveryType, setDeliveryType] = useState("")

  const isChecloutFormValid =
    email &&
    /\S+@\S+\.\S+/.test(email) &&
    firstName !== "" &&
    lastName !== "" &&
    address !== "" &&
    postalCode !== "" &&
    city !== "" &&
    department !== "default" &&
    phoneNumber !== ""

  const hasErrors = Object.values(errors).some((error) => error !== "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const newErrors = {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      postalCode: "",
      city: "",
      department: "",
      phoneNumber: "",
    }
    // if (!email || !/\S+@\S+\.\S+/.test(email))
    //   newErrors.email = "Adresse e-mail invalide."
    if (firstName === "") newErrors.firstName = "Prénom invalide."
    if (lastName === "") newErrors.lastName = "Nom invalide."
    if (address === "") newErrors.address = "Adresse invalide."
    if (!postalCode) newErrors.postalCode = "Code postal requis."
    if (department === "default")
      newErrors.department = "Veuillez indiqué un département."
    if (city === "") newErrors.city = "Ville requise."
    if (phoneNumber === "")
      newErrors.phoneNumber = "Numéro de téléphone requis."
    setErrors(newErrors)

    // If fields are filled, we create the form that will be sent to the front
    if (!hasErrors) {
      // Basic checks to verify our inputs

      const formDataRegister = new FormData()
      //   formDataRegister.append("email", email)
      formDataRegister.append("firstName", firstName)
      formDataRegister.append("lastName", lastName)
      formDataRegister.append("address", address)
      formDataRegister.append("postalCode", postalCode)
      formDataRegister.append("city", city)
      formDataRegister.append("departement", department)
      formDataRegister.append("phone", phoneNumber)

      console.log([...formDataRegister.entries()])

      // Call API TO SAVE DATA USER
    }
  }

  useEffect(() => {
    console.log(department)
  }, [department])

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
          <div className="flex flex-col">
            <Label htmlFor="firstName" className="mb-2 ml-1 text-xs">
              Prénom
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? "border-destructive" : ""}
            />
            {submitted && errors.firstName && (
              <p className="text-xs text-destructive">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <Label htmlFor="lastName" className="mb-2 ml-1 text-xs">
              Nom
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={errors.lastName ? "border-destructive" : ""}
            />
            {submitted && errors.lastName && (
              <p className="text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>
          {/* <Input type="text" placeholder="Nom" /> */}
          <div className="col-span-2 flex flex-col">
            <Label htmlFor="address" className="mb-2 ml-1 text-xs">
              Adresse
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="Adresse"
              value={lastName}
              onChange={(e) => setAddress(e.target.value)}
              className={errors.lastName ? "border-destructive" : ""}
            />
            {submitted && errors.lastName && (
              <p className="text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>
          {/* <Input type="text" placeholder="Adresse" className="col-span-2" /> */}
          <div className="flex flex-col">
            <Label htmlFor="postCode" className="mb-2 ml-1 text-xs">
              Code postal
            </Label>
            <Input
              id="postCode"
              type="text"
              placeholder="Code postal"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className={errors.postalCode ? "border-destructive" : ""}
            />
            {submitted && errors.postalCode && (
              <p className="text-xs text-destructive">{errors.postalCode}</p>
            )}
          </div>
          {/* <Input type="text" placeholder="Code postal" /> */}
          <div className="flex flex-col">
            <Label htmlFor="city" className="mb-2 ml-1 text-xs">
              Ville
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Ville"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={errors.city ? "border-destructive" : ""}
            />
            {submitted && errors.city && (
              <p className="text-xs text-destructive">{errors.city}</p>
            )}
          </div>
          {/* <Input type="text" placeholder="Ville" /> */}
          <div className="col-span-2 flex flex-col">
            <Label htmlFor="city" className="mb-2 ml-1 text-xs">
              Choix du département normand
            </Label>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Choisir un département" />
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
          <div className="col-span-2 flex flex-col">
            <Label htmlFor="phone" className="mb-2 ml-1 text-xs">
              N° de téléphone
            </Label>
            <Input
              id="phone"
              type="text"
              placeholder="Téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={errors.phoneNumber ? "border-destructive" : ""}
            />
            {submitted && errors.phoneNumber && (
              <p className="text-xs text-destructive">{errors.phoneNumber}</p>
            )}
          </div>
          {/* <Input placeholder="Téléphone" className="col-span-2" />{" "} */}
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
