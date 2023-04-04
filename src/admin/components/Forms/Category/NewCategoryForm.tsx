import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewCategorySchema,
  newCategorySchema,
} from "../../../../shared/utils/validationSchema";
import { useNavigate } from "react-router-dom";

type Props = {};

const NewCategoryForm = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewCategorySchema>({
    mode: "onChange",
    resolver: zodResolver(newCategorySchema),
  });

  const createNewCategoryHandler: SubmitHandler<NewCategorySchema> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewCategoryHandler)}
      className="space-y-4"
    >
      <Input
        type="text"
        half={false}
        label="Category Name"
        placeholder="ex: Pizza"
        id="name"
        {...register("name")}
        error={errors.name?.message}
      />
      <div className="flex gap-4 justify-between items-center">
        <Input
          type="select"
          isMulti={true}
          half={true}
          label="Category Products"
          placeholder="ex: Pizza"
          control={control}
          id="products"
          options={[]}
          error={errors.products?.message}
        />
        <Input
          type="select"
          isMulti={true}
          half={true}
          label="Category Extras"
          placeholder="ex: Pizza"
          id="extras"
          control={control}
          options={[]}
          error={errors.extras?.message}
        />
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

export default NewCategoryForm;
