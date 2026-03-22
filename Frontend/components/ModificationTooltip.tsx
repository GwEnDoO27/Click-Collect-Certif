"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/input"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Ellipsis } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

type Props = {
  isSheetOpen: boolean
  onSheetOpen: () => void
  onSheetClose: () => void
  isAlertOpen: boolean
  onIsAlertOpen: (open: boolean) => void // ← accepte un booléen
}
export function ToolTipModifier({
  isSheetOpen,
  onSheetOpen,
  onSheetClose,
  isAlertOpen,
  onIsAlertOpen,
}: Props) {
  return (
    // Need to separate Sheet and Dropdown menu because Radix UI interfers with the DropdonwMenu close
    <>
      {/* Sheet part */}
      <Sheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          console.log("🟡 onOpenChange appelé avec :", open)
          if (!open) onSheetClose()
        }}
      >
        <SheetContent
          onInteractOutside={(e) => {
            e.stopPropagation()
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <SheetHeader>
            <SheetTitle>Modifier le profil</SheetTitle>
            <SheetDescription>
              Faites les modifications nécessaires puis sauvegarder
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Nom</Label>
              <Input id="sheet-demo-name" defaultValue="Produit 1" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-firstname">Image</Label>
              <Input id="sheet-demo-firstname" defaultValue="" type="file" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="La description du produit cliqué."
                defaultValue="Commerçant depuis 4 générations et expert dans son milieu."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-password">Prix (à'lunité) </Label>
              <Input id="sheet-demo-password" defaultValue="2.34" />
            </div>
          </div>
          <SheetFooter>
            <Button
              onClick={(e) => {
                ;(e.stopPropagation(), console.log("hello"))
              }}
              type="submit"
            >
              Enregistrer les modifications
            </Button>
            <SheetClose asChild>
              <Button
                onClick={(e) => {
                  ;(e.stopPropagation(), console.log("hello"))
                }}
                variant="outline"
              >
                Fermer
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* DropdownMenu part */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="cursor-pointer gap-2 bg-primary text-primary-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                <Ellipsis size={14} />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Modifications</p>
          </TooltipContent>
        </Tooltip>

        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                onSheetOpen()
              }}
            >
              Éditer
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                onIsAlertOpen(true)
              }}
            >
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isAlertOpen} onOpenChange={onIsAlertOpen}>
        <AlertDialogContent onClick={(e) => e.stopPropagation()}>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Voulez-vous vraiment supprimer ce
              produit ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
