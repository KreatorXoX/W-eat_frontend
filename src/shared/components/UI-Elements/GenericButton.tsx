type Props = {
  onClick?: () => void;
  text: string;
  color?: string;
  classes?: string;
  type?: "button" | "submit" | "reset";
};

const colorVariants: Record<string, string> = {
  blue: "bg-blue-200 text-blue-600",
  red: "bg-red-200 text-red-600",
  yellow: "bg-yellow-200 text-yellow-600",
  orange: "bg-orange-200 text-orange-600",
  green: "bg-green-200 text-green-600",
  gray: "bg-gray-200 text-gray-600",
};
const GenericButton = ({
  onClick,
  text,
  color = "green",
  classes,
  type,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`p-2 text-xs md:text-sm ${colorVariants[color]}
      ${classes}`}
    >
      <p>{text}</p>
    </button>
  );
};

export default GenericButton;
