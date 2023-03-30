type ExtraMap = Map<string, OptionSelect[]>

export const formatExtras = (extras: Extra[]): ExtraMap => {
  const extraOptions: ExtraMap = new Map()
  extras.forEach(extra => {
    const extraItems = extra.extraItems.map(({ id, name, price }) => ({
      value: `${id}-${price}`,
      label: `${name} ${price ? `(+ € ${price.toFixed(2)})` : ''}`
    }))
    extraOptions.set(extra.name, extraItems)
  })
  return extraOptions
}
