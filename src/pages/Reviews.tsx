import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import ReviewItem from "../components/ReviewItem/ReviewItem";

type Props = {};

export default function Reviews({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col gap-2 pb-4 lg:h-fit lg:pb-0">
      <div className="flex items-center justify-between border-b p-4 lg:pt-0">
        <h2 className="text-xl font-medium">Reviews</h2>
        <span>
          <AiOutlineClose
            onClick={() => navigate(-1)}
            className="cursor-pointer text-2xl"
          />
        </span>
      </div>
      <div className="flex h-36 flex-col items-start justify-center gap-0 bg-gray-700 lg:h-40">
        <h3 className="px-4 text-xl font-medium tracking-widest text-slate-100 lg:text-2xl">
          Overall Score
        </h3>
        <div className="flex flex-row items-center gap-5 text-slate-100">
          <h2 className="flex h-20 w-20 items-center justify-center border-r border-gray-500 text-2xl lg:h-28 lg:w-28 lg:text-5xl">
            4,3
          </h2>
          <div className="flex flex-col gap-1 text-sm text-slate-300">
            <span className="flex flex-col text-xs">
              <Rating
                fillColor="rgb(234 88 12)"
                initialValue={5}
                size={25}
                SVGstyle={{ display: "inline" }}
                readonly
                allowTitleTag={false}
              />
              <span>out of 0 reviews</span>
            </span>
            <span>
              All revies come from customers who have ordered from W/eat
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 overflow-y-scroll px-4 lg:max-h-[30rem]">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
}