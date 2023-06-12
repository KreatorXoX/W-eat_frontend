import { useNavigate } from "react-router-dom";

import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import EditExtraForm from "../../../components/Forms/Extra/EditExtraForm";

type Props = {};

const EditExtra = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 w-full max-w-[60rem] space-y-5 px-5">
      <div className="flex justify-between border-b-2 pb-5">
        <h2 className="text-xl font-semibold text-green-800">
          Edit extra category
        </h2>
        <GenericButton
          text="<<"
          color="blue"
          classes="rounded-full w-10 h-10 text-slate-50 font-semibold text-xl flex items-center justify-center"
          onClick={() => navigate("/admin/menu/extra")}
        />
      </div>
      <div>
        <EditExtraForm />
      </div>
    </div>
  );
};

export default EditExtra;
