import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../shared/components/Form/Input";
import {
  NewReviewInput,
  newReviewSchema,
} from "../../utils/schema/review.schema";
import { useAuthStore } from "../../context/useAuthStore";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
type Props = {};

const Review = (props: Props) => {
  const [rating, setRating] = useState(0);

  const token = useAuthStore((state) => state.token);
  if (!token) {
    console.log("token not found or correpted");
  }
  const userInfo = (jwtDecode(token!) as IAccessTokenType).UserInfo;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<NewReviewInput>({
    mode: "onChange",

    resolver: zodResolver(newReviewSchema),
  });

  const newReviewHandler: SubmitHandler<NewReviewInput> = (data) => {
    const review = {
      user: userInfo._id,
      content: data.content,
      rating: rating || 5,
    };
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ content: "" });
      setRating(0);
    }
  }, [isSubmitSuccessful]);
  return (
    <form
      className="mb-4 flex flex-col"
      onSubmit={handleSubmit(newReviewHandler)}
    >
      <div className="relative">
        <Input
          type="textarea"
          half={false}
          label=""
          placeholder="Type your review here"
          id="street"
          {...register("content")}
          error={errors.content?.message}
        />
        <Rating
          className="absolute bottom-0"
          onClick={(rate: number) => setRating(rate)}
          fillColor="rgb(234 88 12)"
          size={25}
          initialValue={rating}
          SVGstyle={{ display: "inline" }}
          allowTitleTag={false}
        />
      </div>
      <button
        disabled={!isValid}
        className=" mx-auto w-1/4 rounded-sm bg-green-600 text-slate-200 transition-colors duration-300 hover:bg-green-700 disabled:bg-gray-400 "
      >
        Submit
      </button>
    </form>
  );
};

export default Review;
