import { NewReviewInput } from "../../utils/schema/review.schema";

import axiosApi from "../axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Get Reviews
const getAllReviews = async () => {
  const response = await axiosApi.get<IReview[]>("/reviews");
  return response.data;
};

const useReviews = () => {
  return useQuery(["reviews"], {
    queryFn: () => getAllReviews(),
  });
};

// New Review
const createReview = async (data: NewReviewInput) => {
  const response = await axiosApi.post("/reviews", {
    ...data,
  });
  return response.data;
};

const useCreateReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (review: NewReviewInput) => createReview(review),
    onSuccess: () => {
      queryClient.invalidateQueries(["menu"]);
    },
  });
};

const ReviewServices = {
  useReviews,
  useCreateReview,
};
export default ReviewServices;
