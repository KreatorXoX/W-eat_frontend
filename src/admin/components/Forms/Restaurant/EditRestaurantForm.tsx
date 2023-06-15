import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../../shared/components/Form/Input";
import GenericButton from "../../../../shared/components/UI-Elements/GenericButton";

import { useNavigate } from "react-router-dom";
import {
  UpdateRestaurantInput,
  updateRestaurantSchema,
} from "../../../../utils/schema/restaurant.schema";
import RestaurantServices from "../../../api/services/restaurant.service";
import { useEffect } from "react";

const EditRestaurantForm = () => {
  const { data: restaurant } = RestaurantServices.useRestaurant();
  const { mutate: updateRestaurant } = RestaurantServices.useUpdateRestaurant();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateRestaurantInput>({
    mode: "onChange",
    resolver: zodResolver(updateRestaurantSchema),
  });

  useEffect(() => {
    if (restaurant) {
      const defaultValues: UpdateRestaurantInput = {
        name: restaurant?.name,
        email: restaurant?.email,
        address: restaurant?.address,
        phoneNumber: restaurant?.phoneNumber,
        backgroundImage: restaurant?.backgroundImage,
        minDeliveryAmount: restaurant?.minDeliveryAmount,
        averageDeliveryTime: restaurant?.averageDeliveryTime,
        deliveryCost: restaurant?.deliveryCost,
        operationTime: {
          openingTime: restaurant.operationTime.openingTime,
          closingTime: restaurant.operationTime.closingTime,
        },
      };
      reset({ ...defaultValues });
    }
  }, [restaurant]);

  const editCategoryHandler: SubmitHandler<UpdateRestaurantInput> = (data) => {
    // if isDirty then send it to backend otherwise values are the same.
    console.log(isDirty);
    updateRestaurant({ data: data, id: restaurant?._id! });
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
          {...register("operationTime.openingTime")}
          error={errors.operationTime?.openingTime?.message}
        />

        <Input
          type="text"
          half={false}
          label="Closing"
          placeholder="ex: 22:00"
          id="closingTime"
          {...register("operationTime.closingTime")}
          error={errors.operationTime?.closingTime?.message}
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
