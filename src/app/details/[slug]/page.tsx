import { baseURL } from "@/resources";
import { Meta } from "@once-ui-system/core";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  console.log(slugPath);
  
  return Meta.generate({
    title: "Detay",
    description: "dc.....",
    baseURL: baseURL,
    image: `/api/og/generate?title=detay`,
    path: `details/${slugPath}`,
  });
}

const Details = ({
  params
}: { params: Promise<{ slug: string | string[] }> }) => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel magni suscipit nemo consectetur, impedit error ut ducimus libero recusandae tenetur dolores pariatur voluptatem ullam nulla quidem esse deserunt atque sint.
    </div>
  );
}

export default Details;