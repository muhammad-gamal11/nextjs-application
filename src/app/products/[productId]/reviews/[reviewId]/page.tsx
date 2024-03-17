import { notFound } from "next/navigation";

const review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      review {params.reviewId} for product {params.productId}
    </h1>
  );
};
export default review;
