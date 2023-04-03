import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import Table from '../../../shared/components/Table/Table'
import { customerList } from '../../../shared/utils/table/customerTable'
import GenericButton from '../../../shared/components/UI-Elements/GenericButton'

interface Props {}

const Customers = (props: Props) => {
  const columns = useMemo<ColumnDef<Customer>[]>(
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
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'Status',
        accessorKey: 'status'
      },
      {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex justify-evenly'>
            <GenericButton
              text='Del'
              color='red'
              onClick={() => console.log(row.original.id + 'is deleted')}
            />
            <GenericButton
              text='Sus'
              color='gray'
              onClick={() => console.log(row.original.id + 'is suspended')}
            />
            <GenericButton
              text='Act'
              onClick={() => console.log(row.original.id + 'is activated')}
            />
          </div>
        )
      }
    ],
    []
  )
  return (
    <div className='h-full flex flex-col items-center sm:px-10 py-5'>
      <h2 className='font-semibold text-2xl text-green-800'>Customers</h2>
      <Table
        {...{
          data: customerList,
          columns
        }}
      />
    </div>
  )
}

export default Customers
