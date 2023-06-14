import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import {
  UpdateExtraItemInput,
  updateExtraItemSchema,
} from "../../../../utils/schema/menu.schema";
import MenuServices from "../../../api/services/menu.service";
import { useEffect } from "react";
type Props = {};

const EditExtraProductForm = (props: Props) => {
  const { id } = useParams();
  const { data: extraItem } = MenuServices.useExtraItem(id);
  const { mutate: updateExtraItem } = MenuServices.useUpdateExtraItem();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateExtraItemInput>({
    mode: "onChange",
    resolver: zodResolver(updateExtraItemSchema),
  });

  useEffect(() => {
    const defaultValues: UpdateExtraItemInput = {
      name: extraItem?.name,
      allergens: extraItem?.allergens?.join(","),
      price: extraItem?.price,
    };

    reset({ ...defaultValues });
  }, [extraItem]);

  const createExtraProductHandler: SubmitHandler<UpdateExtraItemInput> = (
    data
  ) => {
    const transformedData: UpdateExtraItemInput = {
      name: data.name,
      allergens: data.allergens,
      price: data.price,
    };
    if (isDirty) updateExtraItem({ data: transformedData, id: id! });
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
          type="button"
          classes="rounded font-semibold
              w-20
              "
          color="red"
          text="Cancel"
          onClick={() => navigate("/admin/menu/extra-product")}
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

export default EditExtraProductForm;
