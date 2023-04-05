import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewCategorySchema,
  newCategorySchema,
} from "../../../../shared/utils/validationSchema";
import { useNavigate } from "react-router-dom";

type Props = {
  category: {
    id: string;
    name: string;
    products: {
      value: string;
      label: string;
    }[];
    extraItems: {
      value: string;
      label: string;
    }[];
  } 
};



const EditCategoryForm = ({category}: Props) => {
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors,isDirty },
  } = useForm<NewCategorySchema>({
    mode: "onChange",
    resolver: zodResolver(newCategorySchema),
    defaultValues: {
      name: category.name,
      products: category.products,
      extras: category.extraItems
    }
    
  });

  const editCategoryHandler: SubmitHandler<NewCategorySchema> = (data) => {
    // if isDirty then send it to backend otherwise values are the same.
    console.log(isDirty)
    console.log(data);
  };
 
  return (
    <form
      onSubmit={handleSubmit(editCategoryHandler)}
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

export default EditCategoryForm;
