import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate, useParams } from "react-router-dom";

import {
  UpdateCategoryInput,
  updateCategorySchema,
} from "../../../../utils/schema/menu.schema";
import { useEffect } from "react";
import MenuServices from "../../../../api/services/menu.service";

const formatProducts = (data: IProduct[] | undefined) => {
  return data?.map((product) => {
    const option: OptionSelect = {
      value: product._id,
      label: product.name,
    };
    return option;
  });
};
const formatExtras = (data: IExtra[] | undefined) => {
  return data?.map((extra) => {
    const option: OptionSelect = {
      value: extra._id,
      label: extra.name,
    };
    return option;
  });
};

const EditCategoryForm = () => {
  const { id } = useParams();
  const { data: category } = MenuServices.useCategory(id);
  const { data: products } = MenuServices.useProducts();
  const { data: extras } = MenuServices.useExtras();
  const { mutate: updateCategory } = MenuServices.useUpdateCategory();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateCategoryInput>({
    mode: "onChange",
    resolver: zodResolver(updateCategorySchema),
  });

  useEffect(() => {
    const defaultValues: UpdateCategoryInput = {
      name: category?.name,
      products: formatProducts(category?.products),
      extras: formatExtras(category?.extras),
    };
    reset({ ...defaultValues });
  }, [category]);

  const editCategoryHandler: SubmitHandler<UpdateCategoryInput> = (data) => {
    // if isDirty then send it to backend otherwise values are the same.
    updateCategory(
      { data: data, id: id! },
      {
        onSuccess: () => {
          navigate("/admin/menu/categories");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(editCategoryHandler)} className="space-y-4">
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
        options={formatExtras(extras)}
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

export default EditCategoryForm;
