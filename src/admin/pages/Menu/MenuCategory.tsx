import { categories } from '../../../shared/utils/table/allCategories'
import GenericButton from '../../../shared/components/UI-Elements/GenericButton'
import Table from '../../../shared/components/Table/Table'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'

type Props = {}

const MenuCategory = (props: Props) => {
  const columns = useMemo<ColumnDef<Category>[]>(
    () => [
      {
        header: 'Id',
        accessorKey: 'id'
        // cell: ({ row }) => {
        //   return (
        //     <Link
        //       to={`/admin/orders/${row.original.orderId}`}
        //       className="text-blue-600 underline hover:no-underline"
        //     >{`${row.original.orderId}`}</Link>
        //   );
        // },
      },
      {
        header: 'Name',
        accessorKey: 'name'
      },
      {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex justify-evenly'>
            <GenericButton
              text='Edit'
              color='yellow'
              onClick={() => console.log(row.original.id + 'edit page')}
            />

            <GenericButton
              text='Delete'
              color='red'
              onClick={() => console.log(row.original.id + 'deleted')}
            />
          </div>
        )
      }
    ],
    []
  )
  return (
    <div className='h-full flex flex-col items-center sm:px-10 py-5'>
      <div className='w-full max-w-[60rem] flex justify-end items-center py-5'>
        <GenericButton text='Add new category' />
      </div>
      <Table
        {...{
          data: categories,
          columns
        }}
      />
    </div>
  )
}

export default MenuCategory
