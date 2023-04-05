import { useNavigate, useParams } from 'react-router-dom'

import GenericButton from '../../../../shared/components/UI-Elements/GenericButton'
import EditCategoryForm from '../../../components/Forms/Category/EditCategoryForm'
import { formatData } from '../../../../shared/utils/formatingDAta/formatData'

type Props = {}

const EditCategory = (props: Props) => {
  const navigate = useNavigate()

  const id = useParams().id

  const category = formatData().find(cat => cat.id === id)
  if (!category) {
    return <h2>no Cat</h2>
  }
  return (
    <div className='w-full mx-auto max-w-[60rem] px-5 mt-10 space-y-5'>
      <div className='flex justify-between border-b-2 pb-5'>
        <h2 className='font-semibold text-xl text-green-800'>Edit category</h2>
        <GenericButton
          text='<<'
          color='blue'
          classes='rounded-full w-10 h-10 text-slate-50 font-semibold text-xl flex items-center justify-center'
          onClick={() => navigate(-1)}
        />
      </div>
      <div>
        <EditCategoryForm category={category!} />
      </div>
    </div>
  )
}

export default EditCategory
