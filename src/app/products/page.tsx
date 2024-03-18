import Link from "next/link";

const productsList = () => {
  const productId = 100;
  return (
    <>
      <h1>
        <Link href="products/1">product 1</Link>
      </h1>
      <h1>
        <Link href="products/2">product 2</Link>
      </h1>
      {/* replace attribute directs back to home */}
      <h1>
        <Link href="products/3" replace>
          product 3
        </Link>
      </h1>
      <h1>
        <Link href={`products/${productId}`}>product {productId}</Link>
      </h1>
    </>
  );
};
export default productsList;
