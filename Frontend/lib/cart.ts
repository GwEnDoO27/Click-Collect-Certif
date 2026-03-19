import { products, Product } from "@/lib/products"

export type CartItem = {
  id: number
  name: string
  products: Product
  quantity: number
}

export type Cart = {
  items: CartItem[]
}

export type Order = {
  id: number
  items: CartItem[]
  total: number
  date: string
}

const getProduct = (id: number) => products.find(p => p.id === id)!

export const cart: Cart = {
  items: [
    { product: getProduct(1), quantity: 2 },
    { product: getProduct(6), quantity: 1 },
    { product: getProduct(11), quantity: 3 },
    { product: getProduct(21), quantity: 1 }
  ]
}
