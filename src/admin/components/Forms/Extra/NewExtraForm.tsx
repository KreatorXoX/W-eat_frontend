import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewExtraSchema,
  newExtraSchema,
} from "../../../../shared/utils/validationSchema";

type Props = {};

const NewExtraForm = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<NewExtraSchema>({
    mode: "onChange",
    resolver: zodResolver(newExtraSchema),
  });

  const createExtraHandler: SubmitHandler<NewExtraSchema> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(createExtraHandler)} className="space-y-4">
      <Input
        type="text"
        half={false}
        label="Name"
        placeholder="ex: Free Sauces"
        id="name"
        {...register("name")}
        error={errors.name?.message}
      />
      <div className="flex gap-4 justify-between items-start">
        <Input
          type="select"
          isMulti={true}
          half={true}
          label="Extra-Products"
          id="extraItems"
          control={control}
          options={[{ value: "ketchup", label: "id-ketchup" }]}
          error={errors.extraItems?.message}
        />
        <div className="flex flex-col text-center text-gray-700 font-medium w-1/2">
          <h2>Paid</h2>
          <div
            className="flex gap-8 justify-center mt-1 py-[0.4rem]
              border border-gray-400 rounded
              "
          >
            <label className="flex items-center gap-2">
              <Input
                id="paid"
                label=""
                half={true}
                type="radio"
                {...register("paid" as const)}
                inputVal="true"
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
                inputVal="false"
                error={undefined}
              />
              False
            </label>
          </div>
          {errors.paid && (
            <p className="font-normal text-sm md:text-base text-red-600 flex flex-row items-baseline gap-1 mt-1">
              <span>
                <FiAlertTriangle className="inline" />
              </span>
              <span>Please pick one</span>
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <GenericButton
          classes="rounded font-semibold
              w-20
              "
          color="red"
          text="Cancel"
          onClick={() => navigate(-1)}
        />
        <GenericButton
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
