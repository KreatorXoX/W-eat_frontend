import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import MenuServices from "../../../api/services/menu.service";
import {
  NewExtraInput,
  newExtraSchema,
} from "../../../../utils/schema/menu.schema";

type Props = {};

const formatData = (data: IExtraItem[] | undefined) => {
  return data?.map((item) => {
    const option: OptionSelect = {
      value: item._id,
      label: item.name,
    };
    return option;
  });
};
const NewExtraForm = (props: Props) => {
  const { mutate: createExtra } = MenuServices.useCreateExtra();
  const { data: extraItems } = MenuServices.useExtraItems();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<NewExtraInput>({
    mode: "onChange",
    resolver: zodResolver(newExtraSchema),

    defaultValues: {
      paid: "false",
    },
  });

  const createExtraHandler: SubmitHandler<NewExtraInput> = (data) => {
    createExtra(data);
  };
  return (
    <form onSubmit={handleSubmit(createExtraHandler)} className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <Input
          type="text"
          half={true}
          label="Name"
          placeholder="ex: Free Sauces"
          id="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <div className="flex w-1/2 flex-col text-center text-sm font-medium text-gray-700 md:text-base">
          <h2>Paid</h2>
          <div
            className="mt-1 flex justify-center gap-8 rounded
              border border-gray-400 py-[0.4rem]
              "
          >
            <label className="flex items-center gap-2">
              <Input
                id="paid"
                label=""
                half={true}
                type="radio"
                {...register("paid" as const)}
                inputVal={"true"}
                error={undefined}
              />
              True
            </label>

            <label className="flex items-center gap-2">
              <Input
                id="paid"
                label=""
                half={true}
                type="radio"
                {...register("paid" as const)}
                inputVal={"false"}
                error={undefined}
              />
              False
            </label>
          </div>
          {errors.paid && (
            <p className="mt-1 flex flex-row items-baseline gap-1 text-sm font-normal text-red-600 md:text-base">
              {errors.paid.message}
              <span>
                <FiAlertTriangle className="inline" />
              </span>
              <span>Please pick one</span>
            </p>
          )}
        </div>
      </div>
      <Input
        type="select"
        isMulti={true}
        half={false}
        label="Extra-Products"
        id="extraItems"
        control={control}
        options={formatData(extraItems)}
        error={errors.extraItems?.message}
      />

      <div className="flex justify-end gap-4">
        <GenericButton
          classes="rounded font-semibold
              w-20
              "
          color="red"
          text="Cancel"
          onClick={() => navigate(-1)}
        />
        <GenericButton
          type="submit"
          classes="rounded font-semibold
            w-20
            "
          text="Save"
        />
      </div>
    </form>
  );
};

export default NewExtraForm;
