import { useNavigate } from "react-router-dom";
import NewExtraForm from "../../../components/Forms/Extra/NewExtraForm";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

type Props = {};

const NewExtra = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto max-w-[60rem] px-5 mt-10 space-y-5">
      <div className="flex justify-between border-b-2 pb-5">
        <h2 className="font-semibold text-xl text-green-800">
          Add new extra category
        </h2>
        <GenericButton
          text="<<"
          color="blue"
          classes="rounded-full w-10 h-10 text-slate-50 font-semibold text-xl flex items-center justify-center"
          onClick={() => navigate(-1)}
        />
      </div>
      <div>
        <NewExtraForm />
      </div>
    </div>
  );
};

export default NewExtra;
