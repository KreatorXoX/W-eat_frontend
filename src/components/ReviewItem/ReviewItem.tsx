import React from "react";
import { Rating } from "react-simple-star-rating";

type Props = {};

const ReviewItem = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col">
        <h2>Patrick Mahones</h2>
        <span className="text-xs">Saturday, 08 July 2020</span>
      </div>
      <article className="font-medium text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        asperiores in nam vel accusantium porro! Natus aperiam necessitatibus
        esse aliquid! Aspernatur sequi temporibus dolore repudiandae harum dolor
        recusandae eius corporis.
      </article>
      <Rating
        fillColor="rgb(234 88 12)"
        initialValue={5}
        size={25}
        SVGstyle={{ display: "inline" }}
        readonly
        allowTitleTag={false}
      />
    </div>
  );
};

export default ReviewItem;
