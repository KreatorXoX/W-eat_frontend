type Props = {
  onClick?: () => void
  text: string
  color?: string
  classes?: string
}

const GenericButton = ({ onClick, text, color = 'green', classes }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-${color}-200 text-${color}-600 rounded-lg
       text-sm 
      ${classes}`}
    >
      <p>{text}</p>
    </button>
  )
}

export default GenericButton
