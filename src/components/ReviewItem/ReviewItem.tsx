import React from "react";
import { Rating } from "react-simple-star-rating";
import { formatDate } from "../../utils/formatDate";

type Props = {
  review?: IReview;
};

const ReviewItem = ({ review }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col">
        <p>{review?.user?.name}</p>
        <span className="text-xs">{formatDate(review?.createdAt)}</span>
      </div>
      <article className="font-sm text-gray-800 dark:text-slate-200">
        {review?.content ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores in nam vel accusantium porro! Natus aperiam necessitatibus esse aliquid! Aspernatur sequi temporibus dolore repudiandae harum dolor recusandae eius corporis."}
      </article>

      <Rating
        fillColor="rgb(234 88 12)"
        initialValue={review?.rating}
        size={25}
        SVGstyle={{ display: "inline" }}
        readonly
        allowTitleTag={false}
      />
      {review?.response && (
        <div className="rounded-lg border p-2 text-sm">
          <h2 className="font-bold">Restaurant Response</h2>
          <p className="ml-4">
            {review?.response || "Thank you for reviewing your order"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewItem;
