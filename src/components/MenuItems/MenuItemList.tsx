
import MenuItem from './MenuItem'

import { items } from '../../shared/utils/data'
type Props = {}

function MenuItemList({  }: Props) {


  const itemsByCategory = items.reduce(
    (result: GroupedItems, item: Item) => ({
      ...result,
      [item!.category]: [...(result[item!.category] || []), item]
    }),
    {}
  )

  return (
<>
      {Object.keys(itemsByCategory).map(category => (
        <div
          id={`${category}`}
          key={category}
          className='p-5 w-full max-w-4xl mx-auto flex flex-col gap-5'
        >
          <h2 className='font-bold text-base lg:text-lg uppercase pt-2'>
            {category}
          </h2>
          {itemsByCategory[category].map((item: Item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </div>
      ))}
    </>  
  )
}

export default MenuItemList
