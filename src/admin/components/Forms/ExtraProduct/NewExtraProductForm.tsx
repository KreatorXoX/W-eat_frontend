import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import MenuServices from "../../../api/services/menu.service";
import {
  NewExtraItemInput,
  newExtraItemSchema,
} from "../../../../utils/schema/menu.schema";

type Props = {};

const NewExtraProductForm = (props: Props) => {
  const { mutate: createExtraItem } = MenuServices.useCreateExtraItem();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewExtraItemInput>({
    mode: "onChange",
    resolver: zodResolver(newExtraItemSchema),
    defaultValues: { price: 0 },
  });

  const createExtraProductHandler: SubmitHandler<NewExtraItemInput> = (
    data
  ) => {
    const transformedData: NewExtraItemInput = {
      name: data.name,
      allergens: data.allergens ? data.allergens : undefined,
      price: data.price ? data.price : undefined,
    };

    createExtraItem(transformedData);
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
        {/* valueAsNumber: true, */}
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
