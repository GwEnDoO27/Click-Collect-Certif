"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { products } from "@/lib/products"

const tags = ["Tout", "Bio", "Promo", "Nouveauté", "Local"]
const categories = ["Toutes", ...new Set(products.map((p) => p.category))]

export default function ProductFilters() {
  const [activeTag, setActiveTag] = useState("Tout")

  return (
    <div className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border border-border bg-background p-4">
      <div className="flex min-w-[140px] flex-1 flex-col gap-1">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Catégorie
        </span>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Toutes les catégories" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {" "}
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex min-w-[140px] flex-1 flex-col gap-1">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Trier par
        </span>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Popularité" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Popularité</SelectItem>
            <SelectItem value="price-asc">Prix croissant</SelectItem>
            <SelectItem value="price-desc">Prix décroissant</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex min-w-[140px] flex-1 flex-col gap-1">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Rechercher
        </span>
        <Input placeholder="Ex : pain, café..." />
      </div>

      <div className="flex flex-2 flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === tag
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
