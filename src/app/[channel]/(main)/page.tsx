import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
	title: "3D",
	description:
		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
};

export default async function Page({ params }: { params: { channel: string } }) {
	return (
		<section className="mx-auto max-w-7xl p-8 pb-16">
			<h2 className="sr-only">Product list</h2>
			<ProductList
				products={[
					{
						id: "1",
						name: "Acme Circles T-Shirt",
						slug: "car",
						category: {
							id: "cat-1",
							name: "Event 1",
						},
						thumbnail: {
							url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
						},
						price: "$11.00 USD",
						description:
							"The Acme Circles T-Shirt is the perfect blend of comfort and style, designed to elevate your everyday wardrobe. Made from ultra-soft, breathable cotton, it offers all-day comfort with a relaxed yet flattering fit. Featuring a bold circular design in vibrant, fade-resistant colors, this tee adds a modern touch to any outfit. Whether you’re heading out for a casual outing, relaxing at home, or layering it under your favorite jacket, the Acme Circles T-Shirt is a versatile piece that ensures you look and feel great.",
					},
				]}
			/>
			{/* <ProductList products={products} /> */}
		</section>
	);
}
