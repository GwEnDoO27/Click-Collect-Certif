"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { ShoppingBag, Eye, EyeOff, ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
    bannerPicture: "",
  })
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [banner, setBanner] = useState<string | null>(null)
  const inputRefBanner = useRef<HTMLInputElement | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const [profileFile, setProfileFile] = useState<File | null>(null)
  const [bannerFile, setBannerFile] = useState<File | null>(null)

  const handleClick = () => {
    inputRef.current.click()
  }

  const handleClickBanner = () => {
    inputRefBanner.current.click()
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfileImage(URL.createObjectURL(file))
      setProfileFile(file)
    }
  }

  const handleChangeBanner = (e) => {
    const file = e.target.files[0]
    if (file) {
      setBanner(URL.createObjectURL(file))
      setBannerFile(file)
    }
  }

  const handleRemoveImage = () => {
    setProfileImage(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const handleRemoveBanner = () => {
    setBanner(null)
    if (inputRefBanner.current) {
      inputRefBanner.current.value = ""
    }
  }

  const isRegisterFormValid =
    email &&
    /\S+@\S+\.\S+/.test(email) &&
    firstName !== "" &&
    lastName !== "" &&
    userName !== "" &&
    password !== "" &&
    confirmPassword === password

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
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Adresse e-mail invalide."
    if (firstName === "") newErrors.firstName = "Prénom invalide."
    if (lastName === "") newErrors.lastName = "Nom invalide."
    if (userName === "") newErrors.userName = "Nom invalide."
    if (!password) newErrors.password = "Mot de passe requis."
    setErrors(newErrors)

    // If fields are filled, we create the form that will be sent to the front
    if (!hasErrors) {
      // Basic checks to verify our inputs

      const formDataRegister = new FormData()
      formDataRegister.append("email", email)
      formDataRegister.append("firstName", firstName)
      formDataRegister.append("lastName", lastName)
      formDataRegister.append("userName", userName)
      formDataRegister.append("password", password)
      if (profileFile) {
        // formDataRegister.append("profileImage", profileImage)
        formDataRegister.append("profileImage", profileFile)
      }
      if (bannerFile) {
        // formDataRegister.append("banner", banner)
        formDataRegister.append("banner", bannerFile)
      }

      console.log([...formDataRegister.entries()])

      // Call API
    }
  }

  const handleGoBackLogin = () => {}

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Vous vous êtes enregistré")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted p-6">
      <div className="mb-4 flex w-full max-w-[380px] flex-row items-start justify-start">
        <Link href={"/login"}>
          <Button className="cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
            <ArrowLeft></ArrowLeft>
            Retour
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-[380px] rounded-xl border border-border bg-background p-8">
        {/* Logo */}
        <div className="mb-7 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <ShoppingBag size={14} className="text-primary-foreground" />
          </div>
          <span className="text-[15px] font-medium">
            Click & Collect Certif
          </span>
        </div>

        {/* <h1 className="mb-1 text-[18px] font-medium">Bon retour 👋</h1> */}
        <p className="mb-6 text-sm text-muted-foreground">
          Entrez vos informations pour vous enregistrer
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Adresse e-mail</Label>
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
          {/* Prénom */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstname">Prénom</Label>
            <Input
              id="firstname"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? "border-destructive" : ""}
            />
            {submitted && errors.firstName && (
              <p className="text-xs text-destructive">{errors.firstName}</p>
            )}
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
              className={errors.lastName ? "border-destructive" : ""}
            />
            {submitted && errors.lastName && (
              <p className="text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>
          {/* Nom utilisateur */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="username">Nom d'utilisateur</Label>
            <Input
              id="username"
              type="text"
              placeholder="LeMagnifiqueDu76"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={errors.userName ? "border-destructive" : ""}
            />
            {submitted && errors.userName && (
              <p className="text-xs text-destructive">{errors.userName}</p>
            )}
          </div>
          {/* Mot de passe */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Mot de passe</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pr-10 ${errors.password ? "border-destructive" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            {submitted && errors.password && (
              <p className="text-xs text-destructive">{errors.password}</p>
            )}
          </div>
          {/* Confirmation du mot de passe */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="confirmpassword">Confirmation mot de passe</Label>
            <div className="relative">
              <Input
                id="confirmpassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`pr-10 ${errors.password ? "border-destructive" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            {submitted && errors.password && (
              <p className="text-xs text-destructive">{errors.password}</p>
            )}
          </div>

          <div className="mt-2 mb-6 flex cursor-pointer flex-col items-center gap-4">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleChange}
              className="hidden"
            />

            <Button className="cursor-pointer" onClick={handleClick}>
              Choisir une image
            </Button>

            {profileImage && (
              <div className="gap-2 p-2">
                <Button className="cursor-pointer" onClick={handleRemoveImage}>
                  <X></X>
                </Button>
                <Image
                  width={40}
                  height={40}
                  src={profileImage}
                  alt="preview"
                  className="h-40 w-40 rounded-full border object-cover"
                />
              </div>
            )}
          </div>

          <div className="mt-2 mb-6 flex cursor-pointer flex-col items-center gap-4">
            <input
              type="file"
              accept="image/*"
              ref={inputRefBanner}
              onChange={handleChangeBanner}
              className="hidden"
            />

            <Button className="cursor-pointer" onClick={handleClickBanner}>
              Choisir une bannière
            </Button>

            {banner && (
              <div className="gap-2 p-2">
                <Button className="cursor-pointer" onClick={handleRemoveBanner}>
                  <X></X>
                </Button>
                <Image
                  width={72}
                  height={40}
                  src={banner}
                  alt="preview"
                  className="h-40 w-72 rounded-xl border object-cover"
                />
              </div>
            )}
          </div>
          <div className="flex flex-row justify-center gap-1.5">
            <Link href={"/login"} className="flex w-full">
              <Button
                onClick={handleGoBackLogin}
                type="submit"
                className="flex w-full cursor-pointer bg-red-600 text-primary-foreground hover:bg-red-700"
              >
                Annuler
              </Button>
            </Link>

            <Button
              onClick={handleSubmit}
              disabled={!isRegisterFormValid}
              type="submit"
              className="flex w-[50%] cursor-pointer bg-green-600 text-primary-foreground hover:bg-green-700"
            >
              Enregistrer
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
