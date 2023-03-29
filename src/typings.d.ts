type ExtraItem = {
  id: string
  name: string
  price: number
}
type Extra = {
  id: string
  name: string
  paid: boolean
  extraItems: ExtraItem[]
}

type Item =
  | {
      id: string
      title: string
      description: string
      ingridients: string
      price: number
      alergens: string[]
      category: string
      extras: Extra[]
    }
  | undefined
type GroupedItems = {
  [key: string]: {
    products: Item[]
    extras: Extra[] | undefined
  }
}

type OptionSelect = {
  value: string
  label: string
}

type Order = {
  orderId: string
  orderDate: string
  price: string
}
