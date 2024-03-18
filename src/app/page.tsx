import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">products</Link>
    </>
  );
};
export default HomePage;
