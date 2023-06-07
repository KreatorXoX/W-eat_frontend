import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";
import {
  NewRestaurantSchema,
  newRestaurantSchema,
} from "../../../../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { isDirty } from "zod";

type Props = {};

const EditRestaurantForm = ({}: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<NewRestaurantSchema>({
    mode: "onChange",
    resolver: zodResolver(newRestaurantSchema),
  });

  const editCategoryHandler: SubmitHandler<NewRestaurantSchema> = (data) => {
    // if isDirty then send it to backend otherwise values are the same.
    console.log(isDirty);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(editCategoryHandler)} className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          type="text"
          half={false}
          label="Restaurant Name"
          placeholder="ex: Big Papa's"
          id="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="text"
          half={false}
          label="Phone Number"
          placeholder="Type your Phone Number"
          id="phoneNumber"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        />
      </div>
      <Input
        type="textarea"
        half={false}
        label="Address"
        placeholder="Type your address"
        id="address"
        {...register("address")}
        error={errors.address?.message}
      />
      <Input
        type="text"
        half={false}
        label="Email"
        placeholder="Type your email"
        id="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        type="text"
        half={false}
        label="Backgroud Image URL"
        placeholder="Type your image URL"
        id="backgroundImage"
        {...register("backgroundImage")}
        error={errors.backgroundImage?.message}
      />
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          type="text"
          half={false}
          label="Opening"
          placeholder="ex: 09:00"
          id="openingTime"
          {...register("openingTime")}
          error={errors.openingTime?.message}
        />

        <Input
          type="text"
          half={false}
          label="Closing"
          placeholder="ex: 22:00"
          id="closingTime"
          {...register("closingTime")}
          error={errors.closingTime?.message}
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        {/* min amount will be used as restriction of the order when its not reached */}
        <Input
          type="number"
          half={false}
          label="Minimum Amount of Purchase"
          placeholder="ex: 20"
          id="minDeliveryAmount"
          {...register("minDeliveryAmount")}
          error={errors.minDeliveryAmount?.message}
        />

        <Input
          type="number"
          half={false}
          label="Delivery Cost"
          placeholder="ex: 5"
          id="deliveryCost"
          {...register("deliveryCost")}
          error={errors.deliveryCost?.message}
        />
      </div>
      <Input
        type="text"
        half={false}
        label="Average Delivery Time"
        placeholder=" ex: 45-65 min"
        id="averageDeliveryTime"
        {...register("averageDeliveryTime")}
        error={errors.averageDeliveryTime?.message}
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

export default EditRestaurantForm;
