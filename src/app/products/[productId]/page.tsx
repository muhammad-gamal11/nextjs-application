import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Metadata => {
  const title = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100)
  );
  return {
    title: `Product ${params.productId}`,
  };
};

const About = ({ params }: Props) => {
  return <div>Details about product {params.productId}</div>;
};
export default About;
