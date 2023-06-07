import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewProductSchema,
  newProductSchema,
} from "../../../../utils/validationSchema";

type Props = {};

const EditProductForm = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isDirty },
  } = useForm<NewProductSchema>({
    mode: "onChange",
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      sizes: [
        { size: "Standard", price: 8 },
        { size: "Large", price: 12 },
      ],
    },
  });

  const editProductHandler: SubmitHandler<NewProductSchema> = (data) => {
    // submit the form if isDirty else
    // naivigate to main menu
    console.log(isDirty);
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const addSize = () => {
    append({ size: "", price: 0 });
  };
  return (
    <form onSubmit={handleSubmit(editProductHandler)} className="space-y-4">
      <div className="flex gap-4">
        <Input
          type="text"
          half={false}
          label="Product Name"
          placeholder="ex: Margaritta Pizza"
          id="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="text"
          half={false}
          label="Tag"
          placeholder="popular"
          id="tag"
          {...register("tag")}
          error={errors.tag?.message}
        />
      </div>
      <Input
        type="textarea"
        half={false}
        label="Product Description"
        placeholder="ex: Margaritta Pizza"
        id="description"
        {...register("description")}
        error={errors.description?.message}
      />
      <div className="flex gap-4">
        <Input
          type="text"
          half={false}
          label="Ingridients"
          placeholder="ex: Egg,bacon ..."
          id="ingridients"
          {...register("ingridients")}
          error={errors.ingridients?.message}
        />
        <Input
          type="text"
          half={false}
          label="Allergens"
          placeholder="use commas to seperate them ex:Milk,peanut"
          id="allergens"
          {...register("allergens")}
          error={errors.allergens?.message}
        />
      </div>
      {/* <Input
        type="text"
        half={false}
        label="Product Category"
        placeholder="ex: Pizza"
        id="category"
        {...register("category")}
        error={errors.category?.message}
      /> */}

      <Input
        type="select"
        isMulti={false}
        half={false}
        label="Product Category"
        placeholder="ex: Pizza"
        control={control}
        id="category"
        options={[
          { label: "Pizza", value: "pizza-id" },
          { label: "Salad", value: "salad-id" },
        ]}
        error={errors.category?.message}
      />

      {fields.map((field, idx) => {
        return (
          <div
            key={field.id}
            className="relative flex items-start justify-center gap-4"
          >
            <Input
              type="text"
              {...register(`sizes.${idx}.size`)}
              half={false}
              label="Size"
              placeholder="Standard"
              id="size"
              error={
                errors.sizes ? errors.sizes[idx]?.size?.message : undefined
              }
            />
            <Input
              type="number"
              {...register(`sizes.${idx}.price`, { valueAsNumber: true })}
              half={false}
              label="Price"
              id="price"
              error={
                errors.sizes ? errors.sizes[idx]?.price?.message : undefined
              }
            />
            <GenericButton
              onClick={() => remove(idx)}
              color="red"
              text="X"
              classes="rounded-full w-9 absolute -right-2 font-bold top-2"
            />
          </div>
        );
      })}
      <div className="flex flex-col gap-2">
        <GenericButton
          onClick={addSize}
          text="Add price"
          type="button"
          classes="
          bg-green-800 text-white rounded-lg w-fit
          "
        />
        <span className="text-sm italic text-red-600">
          {getValues().sizes.length > 0
            ? ""
            : "Please add price to your product"}
        </span>
      </div>

      <div className="flex justify-end gap-4">
        <GenericButton
          classes="rounded font-semibold
              w-20
              "
          color="red"
          type="button"
          text="Cancel"
          onClick={() => navigate(-1)}
        />
        <GenericButton
          classes="rounded font-semibold
            w-20
            "
          type="submit"
          text="Save"
        />
      </div>
    </form>
  );
};

export default EditProductForm;
