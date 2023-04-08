import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewExtraProductSchema,
  newExtraProductSchema,
} from "../../../../shared/utils/validationSchema";

type Props = {};

const NewExtraProductForm = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewExtraProductSchema>({
    mode: "onChange",
    resolver: zodResolver(newExtraProductSchema),
    defaultValues: {
      price: 0,
    },
  });

  const createExtraProductHandler: SubmitHandler<NewExtraProductSchema> = (
    data
  ) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createExtraProductHandler)}
      className="space-y-4"
    >
      <div className="flex items-start justify-between gap-4">
        <Input
          type="text"
          half={false}
          label="Name"
          placeholder="ex: Ketchup"
          id="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="number"
          half={false}
          label="Price (Optional)"
          id="price"
          {...register("price", { valueAsNumber: true })}
          error={errors.price?.message}
        />
      </div>
      <Input
        type="text"
        half={false}
        label="Allergens (Optional)"
        placeholder="ex: milk, peanut"
        id="allergens"
        {...register("allergens")}
        error={errors.allergens?.message}
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
          classes="rounded font-semibold
            w-20
            "
          text="Save"
        />
      </div>
    </form>
  );
};

export default NewExtraProductForm;
