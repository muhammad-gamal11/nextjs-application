/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const notFound = () => {
  return (
    <>
      <h1>page not found</h1>
      <p>this page doesn't exist </p>
      <Link
        href="/"
        className="bg-green-600 hover:bg-green-300 rounded-md p-1 transition-all"
      >
        back home
      </Link>
    </>
  );
};
export default notFound;
