type Props = {
  title: string
  value: number | string
}
const OrderCard = ({ title, value }: Props) => {
  return (
    <div
      className='bg-purple-900 flex flex-col gap-4 justify-evenly items-center text-slate-200 min-h-[25rem]
    rounded-xl font-bold
    '
    >
      <h2 className='text-3xl flex flex-wrap text-center'>{title}</h2>

      <div
        className='rounded-full bg-orange-500 border-none outline-none w-32 h-32 flex items-center justify-center
      text-2xl font-semibold
      '
      >
        {value}
      </div>
    </div>
  )
}

export default OrderCard
