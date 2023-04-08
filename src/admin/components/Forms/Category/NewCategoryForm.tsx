import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewCategorySchema,
  newCategorySchema,
} from "../../../../shared/utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { formatData } from "../../../../shared/utils/formatingDAta/formatData";
type Props = {};

const category = formatData()[0];

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

      <Input
        type="select"
        isMulti={true}
        half={false}
        label="Category Products"
        placeholder="ex: Pizza"
        control={control}
        id="products"
        options={category.products}
        error={errors.products?.message}
      />
      <Input
        type="select"
        isMulti={true}
        half={false}
        label="Category Extras"
        placeholder="ex: Pizza"
        id="extras"
        control={control}
        options={category.extraItems}
        error={errors.extras?.message}
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

export default NewCategoryForm;
