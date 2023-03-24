import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdDeliveryDining } from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi'
import { Rating } from 'react-simple-star-rating'
type Props = {}

const sectionsArr = ['popular', 'tai', 'beef']

function TopSection({  }: Props) {
  return (
    <div className='px-4 max-w-7xl mx-auto bg-slate-50 dark:bg-gray-800 pb-2 shadow-md'>
      <div className='h-[14rem]'>
        <img
          src='https://res.cloudinary.com/dinhhwb9x/image/upload/v1678532308/restrauntMain_xhssgi.jpg'
          alt='main'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='pl-5'>
        <h2 className='my-6 text-xl font-bold font-serif'>Rest the Round</h2>
        <div className='w-full flex gap-2 items-baseline'>
          <Rating
            fillColor='rgb(234 88 12)'
            initialValue={5}
            size={20}
            SVGstyle={{ display: 'inline' }}
            readonly
            allowTitleTag={false}
          />
          <span className='text-sm underline hover:no-underline hover:cursor-pointer'>
            2.4k reviews
          </span>
        </div>
        <div className='text-sm flex gap-5 items-center my-2'>
          <div className='flex gap-2 items-center'>
            <AiOutlineClockCircle className='text-xl inline' />
            <p>50-75 min</p>
          </div>
          <div className='flex gap-2 items-center'>
            <MdDeliveryDining className='text-[1.5rem] inline' />
            <p>€ 6,00</p>
          </div>
          <div className='flex gap-2 items-center'>
            <BiShoppingBag className='text-xl inline' />
            <p>Min. € 30,00</p>
          </div>
        </div>
        <div className='text-sm my-2'>
          <p className='font-semibold'>
            Working Hours : <span className='font-normal'>10:00 - 22:00</span>
          </p>
        </div>
      </div>
      <div className='mt-4 py-2 px-5 bg-gray-200 dark:bg-zinc-500 rounded-lg flex flex-row gap-5 justify-center overflow-hidden'>
        {sectionsArr.map(sec => (
          <div
            key={sec + Date.now()}
            className='px-2 font-semibold text-gray-500 dark:text-slate-50 hover:text-gray-900 dark:hover:text-gray-900'
          >
            <a href={`#${sec}`}>{sec}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSection
