import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate } from "react-router-dom";

import {
  NewCategoryInput,
  newCategorySchema,
} from "../../../../utils/schema/menu.schema";
import MenuServices from "../../../../api/services/menu.service";
type Props = {};

const formatProducts = (data: IProduct[] | IExtra[] | undefined) => {
  return data?.map((product) => {
    const option: OptionSelect = {
      value: product._id,
      label: product.name,
    };
    return option;
  });
};

const NewCategoryForm = (props: Props) => {
  const { data: products } = MenuServices.useUncategorizedProducts();
  const { data: extras } = MenuServices.useExtras();
  const { mutate: createCategory } = MenuServices.useCreateCategory();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewCategoryInput>({
    mode: "onChange",
    resolver: zodResolver(newCategorySchema),
  });

  const createNewCategoryHandler: SubmitHandler<NewCategoryInput> = (data) => {
    createCategory(data, {
      onSuccess: () => {
        navigate("/admin/menu/categories");
      },
    });
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
        options={formatProducts(products)}
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
        options={formatProducts(extras)}
        error={errors.extras?.message}
      />

      <div className="flex justify-end gap-4">
        <GenericButton
          type="button"
          classes="rounded font-semibold
              w-20
              "
          color="red"
          text="Cancel"
          onClick={() => navigate("/admin/menu/categories")}
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

export default NewCategoryForm;
