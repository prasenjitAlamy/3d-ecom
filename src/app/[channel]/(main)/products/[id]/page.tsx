import { notFound } from "next/navigation";
import { AddButton } from "./AddButton";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import { AvailabilityMessage } from "@/ui/components/AvailabilityMessage";

export default async function Page({}: {
	params: { id: string; channel: string };
	searchParams: { variant?: string };
}) {
	const product = {
		id: "1",
		name: "Acme Circles T-Shirt",
		slug: "car",
		category: {
			id: "cat-1",
			name: "Category",
		},
		thumbnail: {
			url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
		},
		price: "$11.00 USD",
		description:
			"The Acme Circles T-Shirt is the perfect blend of comfort and style, designed to elevate your everyday wardrobe. Made from ultra-soft, breathable cotton, it offers all-day comfort with a relaxed yet flattering fit. Featuring a bold circular design in vibrant, fade-resistant colors, this tee adds a modern touch to any outfit. Whether you’re heading out for a casual outing, relaxing at home, or layering it under your favorite jacket, the Acme Circles T-Shirt is a versatile piece that ensures you look and feel great.",
	};

	if (!product) {
		notFound();
	}

	const firstImage = product.thumbnail;
	const description = product?.description;

	async function addItem() {
		"use server";
	}

	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8" action={addItem}>
				<div className="md:col-span-1 lg:col-span-5">
					{firstImage && (
						<ProductImageWrapper priority={true} alt={""} width={1024} height={1024} src={firstImage.url} />
					)}
				</div>
				<div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
					<div>
						<h1 className="mb-3 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
							{product?.name}
						</h1>
						<p className="mb-4 w-max rounded-full bg-blue-600 p-2 px-5 text-sm text-white">{product.price}</p>
						<hr />
						<AvailabilityMessage isAvailable={true} />

						{description && <div className="mt-8 space-y-6 text-sm text-neutral-500">{description}</div>}
						<div className="mt-8">
							<AddButton />
						</div>
					</div>
				</div>
			</form>
		</section>
	);
}
