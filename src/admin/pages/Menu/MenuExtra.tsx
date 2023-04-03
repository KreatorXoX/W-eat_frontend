import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'

import Table from '../../../shared/components/Table/Table'
import GenericButton from '../../../shared/components/UI-Elements/GenericButton'

import { extraCategories } from '../../../shared/utils/table/allExtras'

type Props = {}

const MenuExtra = (props: Props) => {
  const columns = useMemo<ColumnDef<Extra>[]>(
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
        header: 'Paid',
        accessorKey: 'paid'
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
        <GenericButton text='Add new extra' />
      </div>
      <Table
        {...{
          data: extraCategories,
          columns
        }}
      />
    </div>
  )
}

export default MenuExtra
